import Image from "next/image";

export default async function EventCard() {
  return (
    <div className="bg-white rounded-xl shadow-blue-400 overflow-hidden">
      <div>
        <Image
          src="/event-dinner.avif"
          alt="event-dinner"
          className="w-full h-48 object-cover"
          width={100}
          height={100}
        />

        <div className="p-4">
          <h3>Event Title</h3>
          <p>Event Location</p>
          <p>Event Date</p>
          <p>Mulai dari Ticket Price</p>
        </div>
      </div>
    </div>
  );
}

/*
  const data = await fetch("http://localhost:8000/events");
  const events: Event[] = await data.json();

  
{events.map((event: Event) => (
        <div key={event.id}>
          <h1>{event.name}</h1>
          <h2>{new Date(event.startDate).toString()}</h2>
          <h2>Price</h2>
          <h2>Organiser: {event.organizerId}</h2>
        </div>
      ))}
*/
