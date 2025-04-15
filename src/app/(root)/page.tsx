import CategoriesList from "./_components/(events)/CategoriesList";
import EventCard from "./_components/(events)/EventCard";
import Jumbotron from "./_components/Jumbotron";

export default function Page() {
  return (
    <main>
      <Jumbotron />
      <h1>Event Pilihan</h1>
      <EventCard />
      <CategoriesList />
    </main>
  );
}
