import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("Loading Meals Failed.");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // 1. 이미지 파일에서 확장자 추출.
  const extensions = meal.image.name.split(".").pop();
  // 2. 파일 시스템에서 저장할 파일 이름을 만든다.
  const fileName = `${meal.slug}.${extensions}`;
  // 3. 스트림 생성.
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // 4. 이미지 파일 버퍼로 변환 작업.
  const bufferedImage = await meal.image.arrayBuffer();

  // 해당 파일시스템에서 스트림 저장.
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed!");
    }
  });

  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title, @summary, @instructions, @creator, @creator_email, @image, @slug
    )
  `
  ).run(meal);
}
