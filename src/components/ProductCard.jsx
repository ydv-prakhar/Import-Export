/* eslint-disable react/prop-types */

const ProductCard = (props) => {
  return (
    <div className="flex w-full md:w-[48%] lg:w-[32%] flex-col text-center text-[18px] font-[600] m-2">
      <div className="w-full relative">
        <img src={props.image} alt="" className="w-full" />
        <div className="flex items-center justify-center absolute inset-0 bg-white bg-opacity-40 pointer-events-none text-[36px] text-[#ffff] font-[600] ">{props.text}</div> 
      </div>
    </div>
  )
}

export default ProductCard