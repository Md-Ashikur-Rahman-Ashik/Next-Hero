import Meals from "@/components/Meals";

const Page = () => {
  return (
    <div className="card card-compact container rounded-xl mx-auto">
      <h2 className="text-6xl font-bold flex justify-center">
        Choose Your Meals
      </h2>
      <p className="flex justify-center text-3xl mt-4">
        Choose meals by searching with first letter...
      </p>
      <Meals></Meals>
    </div>
  );
};

export default Page;
