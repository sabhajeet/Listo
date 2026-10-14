import Link from "next/link";

const categories = [
{ name: "Mobile Phones", icon: "📱", slug: "mobile-phones" },
{ name: "Cars", icon: "🚗", slug: "cars" },
{ name: "Motorcycles", icon: "🏍️", slug: "motorcycles" },
{ name: "Electronics", icon: "💻", slug: "electronics" },
{ name: "Furniture", icon: "🛋️", slug: "furniture" },
{ name: "Property", icon: "🏠", slug: "property" },
{ name: "Jobs", icon: "💼", slug: "jobs" },
{ name: "Services", icon: "🔧", slug: "services" },
];

const listings = [
{
id: 1,
title: "iPhone 14 128GB",
price: "₹38,000",
location: "Delhi",
category: "Mobile Phones",
image: "📱",
},
{
id: 2,
title: "Dell Inspiron Laptop",
price: "₹42,000",
location: "Noida",
category: "Electronics",
image: "💻",
},
{
id: 3,
title: "Honda Activa 6G",
price: "₹72,000",
location: "Varanasi",
category: "Motorcycles",
image: "🏍️",
},
{
id: 4,
title: "Wooden Sofa Set",
price: "₹18,000",
location: "Lucknow",
category: "Furniture",
image: "🛋️",
},
];

export default function HomePage() {
return (
     <main>

  {/* Header */}

  <header className="site-header">
    <div className="header-container">

      <Link href="/" className="logo">
        LISTO
      </Link>

      <nav className="desktop-nav">
        <Link href="/category/cars">Cars</Link>
        <Link href="/category/mobile-phones">Mobiles</Link>
        <Link href="/category/jobs">Jobs</Link>
        <Link href="/category/property">Property</Link>
      </nav>

      <div className="header-actions">
        <Link href="/login" className="login-link">
          Login
        </Link>

        <Link href="/post-ad" className="post-button">
          + Post Ad
        </Link>
      </div>

    </div>
  </header>


  {/* Hero Search */}

  <section className="hero">

    <div className="hero-content">

      <h1>
        Find what you need.
        <br />
        Sell what you don't.
      </h1>

      <p className="hero-subtitle">
        Buy and sell everything around you.
      </p>


      <div className="search-box">

        <div className="search-input-wrapper">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search for products, cars, mobiles..."
          />
        </div>

        <div className="location-input">
          <span>📍</span>

          <select defaultValue="">
            <option value="" disabled>
              Select location
            </option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="varanasi">Varanasi</option>
            <option value="lucknow">Lucknow</option>
          </select>
        </div>

        <Link href="/search" className="search-button">
          Search
        </Link>

      </div>

    </div>

  </section>


  {/* Categories */}

  <section className="section">

    <div className="section-header">

      <h2>Browse Categories</h2>

      <Link href="/category">
        View all
      </Link>

    </div>


    <div className="category-grid">

      {categories.map((category) => (

        <Link
          key={category.slug}
          href={'/category/${category.slug}'}
          className="category-card"
        >

          <div className="category-icon">
            {category.icon}
          </div>

          <span>
            {category.name}
          </span>

        </Link>

      ))}

    </div>

  </section>


  {/* Listings */}

  <section className="section">

    <div className="section-header">

      <h2>Fresh Recommendations</h2>

      <Link href="/search">
        View all
      </Link>

    </div>


    <div className="listing-grid">

      {listings.map((listing) => (

        <Link
          key={listing.id}
          href={'/listing/${listing.id}'}
          className="listing-card"
        >

          <div className="listing-image">
            {listing.image}
          </div>

          <div className="listing-content">

            <h3>
              {listing.title}
            </h3>

            <strong>
              {listing.price}
            </strong>

            <p>
              {listing.location}
            </p>

            <small>
              {listing.category}
            </small>

          </div>

        </Link>

      ))}

    </div>

  </section>


  {/* Mobile Navigation */}

  <nav className="mobile-navigation">

    <Link href="/">
      <span>🏠</span>
      <small>Home</small>
    </Link>

    <Link href="/search">
      <span>🔍</span>
      <small>Search</small>
    </Link>

    <Link href="/post-ad" className="mobile-post">
      <span>＋</span>
      <small>Sell</small>
    </Link>

    <Link href="/favorites">
      <span>♡</span>
      <small>Saved</small>
    </Link>

    <Link href="/profile">
      <span>👤</span>
      <small>Profile</small>
    </Link>

  </nav>

</main>


);
}
