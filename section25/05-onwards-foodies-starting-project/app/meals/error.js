"use client";
function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}

export default Error;
