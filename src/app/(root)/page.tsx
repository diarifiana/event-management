import EventCard from "./_components/(events)/EventCard";
import Jumbotron from "./_components/Jumbotron";

export default function Page() {
  return (
    <main>
      <Jumbotron />

      <div className="p-8">
        <h2>Our Events</h2>
        <EventCard />
      </div>
    </main>
  );
}
