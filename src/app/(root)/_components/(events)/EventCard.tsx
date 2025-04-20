import { getEvents } from "@/app/api/getEvents";
import Image from "next/image";

export default async function EventCard() {
  const events = await getEvents();

  return (
    <div className="flex m-auto p-auto gap-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-xl shadow-blue-400 overflow-hidden md:grid-cols-4"
        >
          <Image
            src={event.thumbnail}
            alt={event.name}
            className="w-full h-48 object-cover"
            width={100}
            height={100}
          />

          <div className="p-4">
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>Start Date</p>
            <p>Ticket Price</p>
            <p>Organizer</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
 <p>Mulai dari: {event.tickets[0].price}</p>
 <p>Organizer: {event.organizer[0].name}</p>
*/
