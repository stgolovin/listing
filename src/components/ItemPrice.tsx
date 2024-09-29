export type ItemPriceType = {
    price: string | undefined;
    currencyCode: string | undefined;
}
  
export const ItemPrice = ({price, currencyCode}: ItemPriceType) => {
    const currency = {
      'USD': '$',
      'EUR': '€'
    }[currencyCode || ''] || '';
  
    return (
      <p className="item-price">{currency}{price} {currency ? '' : currencyCode}</p>
    )
}
