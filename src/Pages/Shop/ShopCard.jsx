const ShopCard = ({ items }) => {
  const { image, name, price, recipe } = items;
  return (
    <div className="card w-full max-w-[350px] h-[485px] bg-[#F3F3F3] mx-auto shadow-xl relative">
      <figure>
        <img src={image} alt="Shoes" />
        <div className="absolute text-center bg-black w-[60px] h-[25px] text-white top-[12px] right-[12px]">
          ${price}
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black font-semibold text-2xl">{name}</h2>
        <p className="text-black font-normal text-base">{recipe}</p>
        <div className="card-actions">
          <button className="px-6 py-2 rounded-sm uppercase border border-b-2 border-b-gray-700 bg-[#E8E8E8] text-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
