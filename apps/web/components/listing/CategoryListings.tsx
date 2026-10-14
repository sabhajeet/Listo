import ListingCard from "./ListingCard";

type Listing = {
id: number;
title: string;
price: number;
location: string;
image: string;
};

type CategoryListingsProps = {
title: string;
slug: string;
listings: Listing[];
};

export default function CategoryListings({
title,
slug,
listings,
}: CategoryListingsProps) {
return ( <section className="listing-section">


  <div className="section-heading">

    <h2>{title}</h2>

    <a href={`/category/${slug}`}>
      View All →
    </a>

  </div>

  <div className="listing-grid">

    {listings.map((listing) => (
      <ListingCard
        key={listing.id}
        listing={listing}
      />
    ))}

  </div>

</section>


);
}
