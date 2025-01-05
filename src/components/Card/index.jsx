/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <div className="flex w-[80%] md:w-[45%] lg:w-[25%] flex-col text-center text-[18px] font-[600] m-2">
      <div className="w-full h-full">
        <img src={props.image} alt="" className="w-full h-[200px]" />
      </div>
      <div className="my-[24px]">{props.text}</div>
    </div>
  );
};

export default Card;
