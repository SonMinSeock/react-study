import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

function EvnetsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);

      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
      </div>
    </>
  );
}

export default EvnetsPage;
