export type ItemQuantityType = {
    quantity: number | undefined;
}
  
export const ItemQuantity = ({quantity}: ItemQuantityType) => {
    const className = (
      (quantity === undefined) ? 'level-high' : null ||
      (quantity <= 10) ? 'level-low' : null ||
      (quantity <= 20) ? 'level-medium' : null ||
      'level-high'
    );
  
    return (
      <p className={"item-quantity " + className}>{quantity}</p>
    )
}