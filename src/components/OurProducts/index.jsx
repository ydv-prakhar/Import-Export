import ProductCard from './ProductCard';
// import almonds from '../../../public/Almonds.webp';

const OurProducts = () => {
  return (
    <div className="m-12 mx-[6%]">
      <div className="text-center text-[20px] my-[20px] font-[400] underline underline-offset-[20px] decoration-orange-500">
        Our Products{' '}
        <div className="flex flex-wrap mt-8">
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />
          <ProductCard image="assets/Almonds.webp" text="Almonds" />          
          <ProductCard image="assets/Almonds.webp" text="Almonds" />          
          <ProductCard image="assets/Almonds.webp" text="Almonds" />          
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
