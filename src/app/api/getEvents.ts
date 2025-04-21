import Event from "../types/Event";

export async function getEvents() {
  const data = await fetch("http://localhost:8000/events");
  const events: Event[] = await data.json();

  return events;
}
