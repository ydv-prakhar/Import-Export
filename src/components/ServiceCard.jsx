/* eslint-disable react/prop-types */

const ServiceCard = (props) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[23%] bg-gray-200 p-8 py-[8%]">
        <img src="" alt="" />
        <div className="text-[20px] font-[600] ">{props.heading}</div>
        <div className="mt-[15px] text-[17px] text-[#747474]">
            {props.text}
        </div>
    </div>
  )
}

export default ServiceCard