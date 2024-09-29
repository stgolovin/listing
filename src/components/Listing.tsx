import { ItemImage } from "./ItemImage";
import { ItemPrice } from "./ItemPrice";
import { ItemQuantity } from "./ItemQuantity";
import { ItemTitle } from "./ItemTitle";

export type ItemType = { 
  listing_id: number; 
  title: string | undefined; 
  url: string | undefined;
  price: string | undefined;
  currencyCode: string | undefined;
  quantity: number | undefined;
  MainImage: {
    url_570xN: string | undefined
  } | null
}

export type ListingType = {
  items: ItemType[];
}

export const Listing = ({items}: ListingType) => {
  return (
    <div className="item-list">
      {
        items.map((item) => {
          return (
            <div className="item" key={item.listing_id}>{
                (item.MainImage && item.MainImage.url_570xN) ? 
                  <ItemImage itemRef={item.url} imageSrc={item.MainImage.url_570xN} /> :
                  ''
              }              
              <div className="item-details">
                <ItemTitle title={item.title} />
                <ItemPrice currencyCode={item.currencyCode} price={item.price} />
                <ItemQuantity quantity={item.quantity} />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

const defaultProps : ListingType = {
  items: []
};

Listing.defaultProps = defaultProps;
