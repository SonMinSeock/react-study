import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Home 컴포넌트 서버사이드에서 실행중...");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
