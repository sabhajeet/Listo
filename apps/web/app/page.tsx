import Link from "next/link";

const categories = [
  { name: "Mobile Phones", icon: "📱", slug: "mobile-phones" },
  { name: "Motorcycles", icon: "🏍️", slug: "motorcycles" },
  { name: "Classes", icon: "📚", slug: "classes" },
  { name: "Furniture", icon: "🛋️", slug: "furniture" },
  { name: "Real Estate - Sale", icon: "🏡", slug: "real-estate-sale" },
  { name: "Jobs", icon: "💼", slug: "jobs" },
  { name: "Cars", icon: "🚗", slug: "cars" },
  { name: "Electronics", icon: "💻", slug: "electronics" },
  { name: "Real Estate - Rent", icon: "🔑", slug: "real-estate-rent" },
  { name: "Services", icon: "🛠️", slug: "services" },
  { name: "Fashion", icon: "👗", slug: "fashion" },
  { name: "Books", icon: "📖", slug: "books" },
  { name: "Others", icon: "📦", slug: "others" },
];

const mobileAds = [
  { id: 1, title: "iPhone 14 128GB", price: 38000, location: "Delhi", image: "📱" },
  { id: 2, title: "Samsung Galaxy S23", price: 42000, location: "Noida", image: "📱" },
  { id: 3, title: "Google Pixel 8", price: 45000, location: "Delhi", image: "📱" },
  { id: 4, title: "OnePlus 12", price: 48000, location: "Gurgaon", image: "📱" },
  { id: 5, title: "Samsung A55", price: 28000, location: "Lucknow", image: "📱" },
  { id: 6, title: "Redmi Note 14", price: 18000, location: "Varanasi", image: "📱" },
];

const bikeAds = [
  { id: 7, title: "Honda Activa 6G", price: 72000, location: "Delhi", image: "🏍️" },
  { id: 8, title: "Royal Enfield Classic 350", price: 175000, location: "Noida", image: "🏍️" },
  { id: 9, title: "Yamaha MT-15", price: 145000, location: "Lucknow", image: "🏍️" },
  { id: 10, title: "TVS Apache", price: 95000, location: "Varanasi", image: "🏍️" },
  { id: 11, title: "Bajaj Pulsar", price: 85000, location: "Delhi", image: "🏍️" },
  { id: 12, title: "Hero Splendor", price: 65000, location: "Noida", image: "🏍️" },
];

const carAds = [
  { id: 13, title: "Maruti Swift VXi 2021", price: 550000, location: "Delhi", image: "🚗" },
  { id: 14, title: "Hyundai Creta SX 2020", price: 1150000, location: "Noida", image: "🚗" },
  { id: 15, title: "Tata Nexon XZ+ 2022", price: 850000, location: "Gurgaon", image: "🚗" },
  { id: 16, title: "Honda City VX 2019", price: 780000, location: "Lucknow", image: "🚗" },
  { id: 17, title: "Mahindra Thar LX 2021", price: 1350000, location: "Varanasi", image: "🚗" },
  { id: 18, title: "Toyota Innova Crysta 2018", price: 1450000, location: "Delhi", image: "🚗" },
];

const realEstateAds = [
  { id: 19, title: "2 BHK Flat, Dwarka", price: 7200000, location: "Delhi", image: "🏠" },
  { id: 20, title: "1 BHK Apartment", price: 3200000, location: "Noida", image: "🏠" },
  { id: 21, title: "3 BHK Flat, Sector 56", price: 12500000, location: "Gurgaon", image: "🏠" },
  { id: 22, title: "Residential Plot, Gomti Nagar", price: 4500000, location: "Lucknow", image: "🏠" },
  { id: 23, title: "2 BHK House, Lanka", price: 3800000, location: "Varanasi", image: "🏠" },
  { id: 24, title: "Studio Apartment", price: 2500000, location: "Noida", image: "🏠" },
];

const electronicAds = [
  { id: 25, title: "Sony 55-inch 4K Smart TV", price: 42000, location: "Delhi", image: "📺" },
  { id: 26, title: "Dell Inspiron Laptop", price: 38000, location: "Noida", image: "💻" },
  { id: 27, title: "Canon EOS 1500D Camera", price: 32000, location: "Gurgaon", image: "📷" },
  { id: 28, title: "LG Double-Door Refrigerator", price: 28000, location: "Lucknow", image: "🧊" },
  { id: 29, title: "JBL Party Speaker", price: 12000, location: "Varanasi", image: "🔊" },
  { id: 30, title: "PlayStation 5", price: 42000, location: "Delhi", image: "🎮" },
];

const furnitureAds = [
  { id: 31, title: "Wooden 3-Seater Sofa", price: 18000, location: "Delhi", image: "🛋️" },
  { id: 32, title: "Queen-Size Bed with Mattress", price: 24000, location: "Noida", image: "🛏️" },
  { id: 33, title: "6-Seater Dining Table", price: 15000, location: "Gurgaon", image: "🪑" },
  { id: 34, title: "Study Table and Chair", price: 6500, location: "Lucknow", image: "🪑" },
  { id: 35, title: "3-Door Wooden Wardrobe", price: 22000, location: "Varanasi", image: "🚪" },
  { id: 36, title: "Glass-Top Coffee Table", price: 4500, location: "Delhi", image: "🪑" },
];

type Listing = {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
};

function ListingSection({
  title,
  slug,
  listings,
}: {
  title: string;
  slug: string;
  listings: Listing[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {title}
        </h2>
        <Link
          href={`/category/${slug}`}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {listings.map((listing) => (
          <Link
            key={listing.id}
            href={`/listing/${listing.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-36 items-center justify-center bg-gray-100 text-5xl sm:h-40">
              {listing.image}
            </div>
            <div className="p-3">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {listing.title}
              </h3>
              <p className="mt-1 text-base font-bold text-gray-900">
                ₹{listing.price.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 truncate text-xs text-gray-500">
                📍 {listing.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CategoryCard({
  category,
}: {
  category: (typeof categories)[number];
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="flex flex-col items-center rounded-xl border bg-white p-4 text-center transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-sm"
    >
      <span className="text-3xl">{category.icon}</span>
      <span className="mt-2 text-xs font-semibold text-gray-700 sm:text-sm">
        {category.name}
      </span>
    </Link>
  );
}

export default function HomePage() {
  const firstSixCategories = categories.slice(0, 6);
  const remainingCategories = categories.slice(6);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Buy and sell anything near you
          </h1>
          <p className="mt-3 text-sm text-gray-500 sm:text-lg">
            Find great deals from people around you.
          </p>

          <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-2 rounded-xl border bg-white p-2 shadow-lg md:flex-row">
            <div className="flex flex-1 items-center rounded-lg border px-4">
              <span className="mr-3 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search products, cars, mobiles..."
                className="w-full py-3 text-sm outline-none"
              />
            </div>
            <div className="flex items-center rounded-lg border px-4 md:w-56">
              <span className="mr-3">📍</span>
              <input
                type="text"
                placeholder="Search location..."
                className="w-full bg-transparent py-3 text-sm outline-none"
              />
            </div>
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
          <h2 className="mb-5 text-xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {firstSixCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>

          <details className="group mt-5">
            <summary className="mx-auto w-fit cursor-pointer list-none rounded-lg border border-gray-300 px-5 py-2 text-center text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-700 [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Show all categories</span>
              <span className="hidden group-open:inline">Show fewer</span>
            </summary>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {remainingCategories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </details>
        </div>
      </section>

      <ListingSection
        title="Mobile Phones"
        slug="mobile-phones"
        listings={mobileAds}
      />

      <ListingSection
        title="Motorcycles"
        slug="motorcycles"
        listings={bikeAds}
      />

      <ListingSection
        title="Cars"
        slug="cars"
        listings={carAds}
      />

      <ListingSection
        title="Room for Sale & Rent"
        slug="realestate"
        listings={realEstateAds}
      />

      <ListingSection
        title="Electronic"
        slug="electronic"
        listings={electronicAds}
      />

      <ListingSection
        title="Furninutre"
        slug="furniture"
        listings={furnitureAds}
      />

    </main>
  );
}