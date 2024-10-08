export type ItemQuantityType = {
    quantity: number | undefined;
}
  
export const ItemQuantity = ({quantity}: ItemQuantityType) => {
    const className = (quantity === undefined) ?
    'level-high': (quantity <= 10) ?
    'level-low' : (quantity <= 20) ?
    'level-medium': 'level-high';

    return (
      <p className={"item-quantity " + className}>{quantity}</p>
    )
}
