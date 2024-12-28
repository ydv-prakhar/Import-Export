import Card from "./Card"

export const ProductCategories = () => {
  return (
    <div className="bg-gray-400 p-5">
      <div className="text-[32px] text-center font-[600] underline underline-offset-[20px] decoration-orange-300">
        Our Product Categories
      </div>

      <div className="flex flex-wrap mt-5 gap-[10%]">
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
        <Card
          image="public\agro-1-e1599633611610.jpg"
          text="AGRO-COMMODITIES"
        />
      </div>
    </div>
  );
}
