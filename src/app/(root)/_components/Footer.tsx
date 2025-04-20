export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-2 sm:space-y-0">
        <h1 className="text-lg font-semibold">About</h1>
        <h1 className="text-lg font-semibold">Social Media</h1>
        <h1 className="text-lg font-semibold">{new Date().getFullYear()}</h1>
      </div>
    </footer>
  );
}
