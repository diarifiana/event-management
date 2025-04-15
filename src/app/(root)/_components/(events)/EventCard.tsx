import Event from "@/app/types/event";

export default async function EventCard() {
  const data = await fetch("http://localhost:8000/events");
  const events: Event[] = await data.json();

  return (
    <main>
      {events.map((event: Event) => (
        <div key={event.id}>
          <h1>{event.name}</h1>
          <h2>{new Date(event.startDate).toString()}</h2>
          <h2>Price</h2>
          <h2>Organiser: {event.organizerId}</h2>
        </div>
      ))}
    </main>
  );
}
