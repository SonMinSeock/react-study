import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EvnetsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    // const res = new Response('any data', { status: 201 })
    //return resData.json();
    return resData;
  }
}

export default EvnetsPage;
