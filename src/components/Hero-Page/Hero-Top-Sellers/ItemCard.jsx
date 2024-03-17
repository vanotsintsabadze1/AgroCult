function ItemCard({ itemData: { imageUrl, id, name, description, price } }) {
  return (
    <div className="flex h-full w-full snap-center items-center justify-center ">
      <div className="lg:row-gap relative flex h-[48rem] w-[38rem] flex-col gap-[1rem] rounded-[1rem] bg-white shadow-blog-card xs:w-[32rem] md:w-[35rem] lg:w-[35rem]">
        <div className="flex h-[20rem] w-full items-center justify-center rounded-tl-[1rem] rounded-tr-[1rem] p-[1rem]">
          <img src={imageUrl} alt={`blog-${id}`} className="h-full max-w-full rounded-[1rem] object-fill" />
        </div>
        <div className="mt-[1rem] flex min-h-[10rem] w-full flex-col items-center gap-[1.5rem] text-center">
          <h1 className="w-[30rem] text-[2rem] font-bold">{name}</h1>
          <p className="line-clamp-3 w-[35rem] text-center text-[1.2rem] font-medium xs:w-[25rem] sm:w-[30rem] md:w-[30rem] lg:w-[30rem] lg:text-[1.1rem]">
            {description}...
          </p>
        </div>
        <div className="flex items-center justify-center p-[.5rem]">
          <p className="text-[1.5rem] font-bold">${price}</p>
        </div>
        <div className="flex h-[5rem] w-full items-center justify-center p-[1rem]">
          <button className="h-[4rem] w-[14rem] rounded-[.5rem] bg-footer text-[1.1rem] font-bold uppercase text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
