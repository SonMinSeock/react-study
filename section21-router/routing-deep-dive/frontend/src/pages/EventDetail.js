import { useParams } from "react-router-dom";

function EventDetailPage() {
  const { eventId } = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {eventId}</p>
    </>
  );
}

export default EventDetailPage;
