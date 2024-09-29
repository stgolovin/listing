export type ItemQuantityType = {
    quantity: number | undefined;
}
  
export const ItemQuantity = ({quantity}: ItemQuantityType) => {
    const className = (
      // eslint-disable-next-line no-constant-binary-expression
      (quantity === undefined) ? 'level-high' : null ||
      // eslint-disable-next-line no-constant-binary-expression
      (quantity <= 10) ? 'level-low' : null ||
      // eslint-disable-next-line no-constant-binary-expression
      (quantity <= 20) ? 'level-medium' : null ||
      'level-high'
    );
  
    return (
      <p className={"item-quantity " + className}>{quantity}</p>
    )
  }