export type ItemImageType = {
    itemRef: string | undefined;
    imageSrc: string | undefined;
}
  
export const ItemImage = ({itemRef, imageSrc}: ItemImageType) => {
    return (
      <div className="item-image">
        <a href={itemRef}>
          <img src={imageSrc} />
        </a>
      </div>
    )
}
