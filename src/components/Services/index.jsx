import ServiceCard from './components/ServiceCard';

const Services = () => {
  return (
    <div className="m-12 mx-[6%]">
      <div className="text-center text-[20px] my-[20px] font-[400] underline underline-offset-[20px] decoration-orange-500">
        Mundra Global Services{' '}
      </div>

      <div className="flex gap-[2.5%] flex-wrap mt-12">
        <ServiceCard
          heading="Import Export"
          text="Mudra Global is involved in the import export of variety of food and commodity around the world."
        />
        <ServiceCard
          heading="Import Export"
          text="Mudra Global is involved in the import export of variety of food and commodity around the world."
        />
        <ServiceCard
          heading="Import Export"
          text="Mudra Global is involved in the import export of variety of food and commodity around the world."
        />
        <ServiceCard
          heading="Import Export"
          text="Mudra Global is involved in the import export of variety of food and commodity around the world."
        />
      </div>
    </div>
  );
};

export default Services;
