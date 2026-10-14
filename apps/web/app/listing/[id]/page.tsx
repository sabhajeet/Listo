import Link from "next/link";

type ListingPageProps = {
params: Promise<{
id: string;
}>;
};

export default async function ListingPage({
params,
}: ListingPageProps) {
const { id } = await params;

return ( <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6">


  {/* Back Button */}

  <Link
    href="/"
    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
  >
    ← Back to Home
  </Link>


  {/* Listing */}

  <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

    <div className="flex h-72 items-center justify-center rounded-xl bg-gray-100 text-8xl">
      📦
    </div>


    <div className="mt-6">

      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Listing #{id}
      </h1>


      <p className="mt-3 text-2xl font-bold text-gray-900">
        ₹ Price will come from PostgreSQL
      </p>


      <p className="mt-3 text-sm text-gray-500">
        📍 Location will come from PostgreSQL
      </p>


      <hr className="my-6" />


      <h2 className="text-lg font-bold text-gray-900">
        Description
      </h2>


      <p className="mt-2 text-sm leading-6 text-gray-600">
        This listing page is currently using the listing ID from
        the URL. Later, we will fetch the complete listing data
        from our Bun.js API and PostgreSQL database.
      </p>

    </div>

  </div>

</main>


);
}
