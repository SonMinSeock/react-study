import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EvnetsPage() {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EvnetsPage;
