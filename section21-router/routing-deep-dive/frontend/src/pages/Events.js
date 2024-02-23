import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EvnetsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return (
  //     <>
  //       <p>{data.message}</p>
  //     </>
  //   );
  // }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events24324");

  if (!response.ok) {
    // return { isError: "true", message: "Could not fetch events." };
    // throw new Error("Could not fetch events.");
    // throw { message: "Could not fetch events.", status: 500 };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), { status: 500 });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    // const res = new Response('any data', { status: 201 })
    //return resData.json();
    return resData;
  }
}

export default EvnetsPage;
