import Link from "next/link";

export default function Header() {
return ( 
        // <header className="sticky top-0 z-50 border-b bg-white">
        <header className="sticky top-0 z-50 border-b border-orange-600 bg-white">


  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

    {/* Logo */}

    <Link
      href="/"
      className="text-2xl font-black tracking-tight text-gray-900"
    >
      LISTO
    </Link>


    {/* Desktop Navigation */}

    <nav className="hidden items-center gap-7 md:flex">

      <Link
        href="/category/mobile-phones"
        className="text-sm font-medium hover:text-blue-600"
      >
        Mobiles
      </Link>

      <Link
        href="/category/motorcycles"
        className="text-sm font-medium hover:text-blue-600"
      >
        Bikes
      </Link>

      <Link
        href="/category/classes"
        className="text-sm font-medium hover:text-blue-600"
      >
        Classes
      </Link>

      <Link
        href="/category/property"
        className="text-sm font-medium hover:text-blue-600"
      >
        Property
      </Link>

    </nav>


    {/* Right Side */}

    <div className="flex items-center gap-3">

      <Link
        href="/login"
        className="hidden text-sm font-semibold sm:block"
      >
        Login
      </Link>

      <Link
        href="/post-ad"
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
      >
        + Post Ad
      </Link>

    </div>

  </div>

</header>


);
}
