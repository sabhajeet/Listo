type Listing = {
id: number;
title: string;
price: number;
location: string;
image: string;
};

type ListingCardProps = {
listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
return ( <div className="listing-card">


  <div className="listing-image">
    {listing.image}
  </div>

  <div className="listing-info">

    <h3>{listing.title}</h3>

    <strong>
      ₹{listing.price.toLocaleString("en-IN")}
    </strong>

    <p>{listing.location}</p>

  </div>

</div>


);
}
