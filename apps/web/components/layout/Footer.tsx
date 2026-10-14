import Link from "next/link";

export default function Footer() {
return ( <footer className="mt-10 border-t bg-white">


  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

    <div className="flex flex-col justify-between gap-5 sm:flex-row">

      <div>

        <Link
          href="/"
          className="text-xl font-black"
        >
          LISTO
        </Link>

        <p className="mt-1 text-sm text-gray-500">
          Buy and sell locally.
        </p>

      </div>


      <div className="flex gap-5 text-sm text-gray-500">

        <Link href="/about">
          About
        </Link>

        <Link href="/terms">
          Terms
        </Link>

        <Link href="/privacy">
          Privacy
        </Link>

      </div>

    </div>


    <p className="mt-7 border-t pt-5 text-xs text-gray-400">
      © 2026 Listo. All rights reserved.
    </p>

  </div>

</footer>


);
}
