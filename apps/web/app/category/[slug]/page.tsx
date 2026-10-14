import Link from "next/link";
import { notFound } from "next/navigation";

type Listing = {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
};

const categoryData: Record<string, { name: string; listings: Listing[] }> = {
  "mobile-phones": {
    name: "Mobile Phones",
    listings: [
      { id: 1, title: "iPhone 14 128GB", price: 38000, location: "Delhi", image: "📱" },
      { id: 2, title: "Samsung Galaxy S23", price: 42000, location: "Noida", image: "📱" },
      { id: 3, title: "Google Pixel 8", price: 45000, location: "Delhi", image: "📱" },
      { id: 4, title: "OnePlus 12", price: 48000, location: "Gurgaon", image: "📱" },
    ],
  },
  motorcycles: {
    name: "Motorcycles",
    listings: [
      { id: 7, title: "Honda Activa 6G", price: 72000, location: "Delhi", image: "🏍️" },
      { id: 8, title: "Royal Enfield Classic 350", price: 175000, location: "Noida", image: "🏍️" },
    ],
  },
  classes: {
    name: "Classes",
    listings: [
      { id: 1201, title: "Class 10 Mathematics Tuition", price: 500, location: "Delhi", image: "📚" },
      { id: 1202, title: "Beginner Guitar Lessons", price: 800, location: "Noida", image: "🎸" },
    ],
  },
  cars: {
    name: "Cars",
    listings: [
      { id: 201, title: "Maruti Swift", price: 550000, location: "Delhi", image: "🚗" },
      { id: 202, title: "Hyundai i20", price: 620000, location: "Noida", image: "🚗" },
    ],
  },
  electronics: {
    name: "Electronics",
    listings: [
      { id: 401, title: "Sony 4K Smart TV", price: 32000, location: "Delhi", image: "📺" },
      { id: 402, title: "Dell Laptop", price: 45000, location: "Gurgaon", image: "💻" },
    ],
  },
  furniture: {
    name: "Furniture",
    listings: [
      { id: 501, title: "Three-Seater Sofa", price: 18000, location: "Delhi", image: "🛋️" },
      { id: 502, title: "Wooden Dining Table", price: 12000, location: "Noida", image: "🪑" },
    ],
  },
  "real-estate-sale": {
    name: "Real Estate - Sale",
    listings: [
      { id: 601, title: "2 BHK Apartment", price: 4500000, location: "Delhi", image: "🏡" },
      { id: 602, title: "Residential Plot", price: 2500000, location: "Lucknow", image: "🏠" },
    ],
  },
  "real-estate-rent": {
    name: "Real Estate - Rent",
    listings: [
      { id: 701, title: "2 BHK Apartment for Rent", price: 18000, location: "Noida", image: "🔑" },
      { id: 702, title: "Studio Apartment for Rent", price: 12000, location: "Delhi", image: "🏠" },
    ],
  },
  jobs: {
    name: "Jobs",
    listings: [
      { id: 801, title: "Customer Support Executive", price: 25000, location: "Delhi", image: "💼" },
      { id: 802, title: "Delivery Partner", price: 20000, location: "Noida", image: "💼" },
    ],
  },
  services: {
    name: "Services",
    listings: [
      { id: 901, title: "Home Cleaning Service", price: 1000, location: "Delhi", image: "🧹" },
      { id: 902, title: "Electrician Available", price: 500, location: "Noida", image: "🛠️" },
    ],
  },
  fashion: {
    name: "Fashion",
    listings: [
      { id: 1001, title: "Men's Denim Jacket", price: 1500, location: "Delhi", image: "👕" },
      { id: 1002, title: "Women's Handbag", price: 2200, location: "Gurgaon", image: "👜" },
    ],
  },
  books: {
    name: "Books",
    listings: [
      { id: 1101, title: "Competitive Exam Books", price: 600, location: "Delhi", image: "📚" },
      { id: 1102, title: "Used School Textbooks", price: 300, location: "Noida", image: "📖" },
    ],
  },
  others: {
    name: "Others",
    listings: [
      { id: 1301, title: "Travel Backpack", price: 1200, location: "Delhi", image: "🎒" },
      { id: 1302, title: "Indoor Plant Collection", price: 700, location: "Gurgaon", image: "🪴" },
    ],
  },
};

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-1 items-center rounded-lg border px-4">
              <span className="mr-3">🔍</span>
              <input
                type="text"
                placeholder={`Search in ${category.name}`}
                className="w-full py-3 text-sm outline-none"
              />
            </div>
            <div className="flex items-center rounded-lg border px-4 md:w-52">
              <span className="mr-3">📍</span>
              <input
                type="text"
                placeholder="Search location..."
                className="w-full bg-transparent py-3 text-sm outline-none"
              />
            </div>
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
        <div className="mb-5 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{category.name}</span>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {category.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {category.listings.length} listings available
          </p>
        </div>

        {category.listings.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {category.listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listing/${listing.id}`}
                className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-36 items-center justify-center bg-gray-100 text-5xl sm:h-44">
                  {listing.image}
                </div>
                <div className="p-3">
                  <h2 className="truncate text-sm font-medium text-gray-900">
                    {listing.title}
                  </h2>
                  <p className="mt-1 font-bold text-gray-900">
                    ₹{listing.price.toLocaleString("en-IN")}
                  </p>
                  <p className="mt-1 truncate text-xs text-gray-500">
                    📍 {listing.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border bg-white p-8 text-center">
            <p className="font-semibold text-gray-800">
              No listings in this category yet.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Check back later for new listings.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}