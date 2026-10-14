export default function CategoryLoading() {
return ( <section className="min-h-screen bg-gray-50">


  <div className="border-b bg-white">

    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

      <div className="h-12 animate-pulse rounded-lg bg-gray-200" />

    </div>

  </div>


  <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">

    <div className="mb-6">

      <div className="h-8 w-56 animate-pulse rounded bg-gray-200" />

      <div className="mt-2 h-4 w-32 animate-pulse rounded bg-gray-200" />

    </div>


    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

      {Array.from({ length: 12 }).map((_, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-xl border bg-white"
        >

          <div className="h-40 animate-pulse bg-gray-200" />

          <div className="space-y-3 p-3">

            <div className="h-4 animate-pulse rounded bg-gray-200" />

            <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


);
}
