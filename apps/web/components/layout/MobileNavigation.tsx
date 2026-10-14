import Link from "next/link";

export default function MobileNavigation() {
return ( <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden">


  <div className="grid grid-cols-5">

    <Link
      href="/"
      className="flex flex-col items-center py-2 text-xs"
    >
      <span className="text-lg">🏠</span>
      Home
    </Link>

    <Link
      href="/search"
      className="flex flex-col items-center py-2 text-xs"
    >
      <span className="text-lg">🔍</span>
      Search
    </Link>

    <Link
      href="/post-ad"
      className="flex flex-col items-center py-2 text-xs"
    >
      <span className="text-xl">＋</span>
      Sell
    </Link>

    <Link
      href="/favorites"
      className="flex flex-col items-center py-2 text-xs"
    >
      <span className="text-lg">♡</span>
      Saved
    </Link>

    <Link
      href="/profile"
      className="flex flex-col items-center py-2 text-xs"
    >
      <span className="text-lg">👤</span>
      Profile
    </Link>

  </div>

</nav>


);
}
