import Card from '../Card';
// import image1 from '../../../public/image1.jpg';

const ProductCategories = () => {
  return (
    <div className="bg-gray-400 p-5">
      <div className="text-[32px] text-center font-[600] underline underline-offset-[20px] decoration-orange-300">
        Our Product Categories
      </div>

      <div className="flex flex-wrap mt-5 gap-[10%]">
        <Card image="assets/image1.jpg" text="Agri & Food Products" />
        <Card image="assets/pexels-pixabay-264636.jpg" text="Green vegitables & Fruits" />
        <Card image="assets\premium_photo-1668487826871-2f2cac23ad56.avif" text="Medicine" />
        <Card image="assets/EngineeringnMachinery.jpeg" text="Engineering and Machinery" />
        <Card image="assets/Plastic Drums.jpg" text="Plastic Containers/Furniture" />
        <Card image="assets/Chemicals.jpg" text="Chemicals and Cleaning agents" />
        <Card image="assets/Jute bags.jpeg" text="Hand/Carry Bags" />
        <Card image="assets/footwear.jpeg" text="Footwear" />
        <Card image="assets/Bamboo furniture.jpeg" text="Furniture (Bamboo)" />
      </div>
    </div>
  );
};

export default ProductCategories;
