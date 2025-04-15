import Link from "next/link";

const events = [
  { id: 1, name: "event 1" },
  { id: 2, name: "event 2" },
];

interface Event {
  id: number;
  name: string;
}

function generateStaticParams() {}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Event: {slug}</h1>
      <ul>
        {events.map((event: Event) => (
          <li key={event.id}>
            <Link href={`/events/${event.name}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
