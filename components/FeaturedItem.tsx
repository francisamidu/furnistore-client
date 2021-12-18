import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const FeaturedItem = (props: any) => {
  const { item } = props;
  const { title, number, percentile, trending } = item;
  return (
    <div className="flex flex-1 flex-col mr-2 bg-white py-4 px-8 rounded-md shadow">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-3xl">
          {title === "Revenue" || (title === "Sales" && "$")}
          {number}
        </h2>
        <div className="flex flex-row items-center justify-between my-4">
          {trending ? (
            <div className="flex flex-row items-center">
              <span>-{percentile}</span>
              <MdArrowDownward className="text-red-700 ml-4" />
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <span>+{percentile}</span>
              <MdArrowUpward className="text-green-700 ml-4" />
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-500">Compared to last month</p>
    </div>
  );
};

export default FeaturedItem;
