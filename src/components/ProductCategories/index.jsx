import Card from '../Card';
import image1 from '../../../public/image1.jpg';

const ProductCategories = () => {
  return (
    <div className="bg-gray-400 p-5">
      <div className="text-[32px] text-center font-[600] underline underline-offset-[20px] decoration-orange-300">
        Our Product Categories
      </div>

      <div className="flex flex-wrap mt-5 gap-[10%]">
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
        <Card image={image1} text="AGRO-COMMODITIES" />
      </div>
    </div>
  );
};

export default ProductCategories;
