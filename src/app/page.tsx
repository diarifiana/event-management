import EventCard from "./components/(events)/EventCard";
import Jumbotron from "./components/Jumbotron";

export default function Page() {
  return (
    <main>
      <Jumbotron />
      <h1>Event Pilihan</h1>
      <EventCard />
      <h1>Categories</h1>
    </main>
  );
}
