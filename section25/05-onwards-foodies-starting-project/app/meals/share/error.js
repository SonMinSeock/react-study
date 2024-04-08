"use client";
function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
      <p>Failed to create meal.</p>
    </main>
  );
}

export default Error;
