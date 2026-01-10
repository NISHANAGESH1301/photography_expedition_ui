export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
      <h1 className="text-xl font-bold tracking-wide">
        PhotoExpedition
      </h1>

      <div className="space-x-8 text-sm font-medium">
        <a href="/" className="hover:text-green-700">Home</a>
        <a href="/photos" className="hover:text-green-700">Photos</a>
        <a href="/tours" className="hover:text-green-700">Tours</a>
        <a href="/profile" className="hover:text-green-700">Profile</a>
      </div>
    </nav>
  );
}
