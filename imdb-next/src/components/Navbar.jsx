import NavbarItems from "./NavbarItems";
export default function Navbar() {
  return (
    <div className="flex gap-6 dark:bg-gray-600 bg-amber-200 p-4 lg:text-lg justify-center">
      <NavbarItems title="Trending" param="fetchTrending" />
      <NavbarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
