import { ItemType, Listing } from './components/Listing'
import data from './data/etsy.json'
import './App.css'

function App() {
  const items: ItemType[] = data.filter(item => item.state == 'active').map((item) => {
    return (
      {
        listing_id: item.listing_id,
        title: item.title, 
        url: item.url,
        price: item.price,
        currencyCode: item.currency_code,
        quantity: item.quantity,
        MainImage: item.MainImage ? {
          url_570xN: item.MainImage.url_570xN
        } : null
      }
    )
  });

  return (
    <Listing items={items} />
  )
}

export default App
