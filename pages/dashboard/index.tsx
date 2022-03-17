import React, { useEffect } from "react";
import { NextComponentType } from "next";
import {
  DashboardLayout,
  Chart,
  FeaturedInfo,
  LatestTransactions,
  NewUsers,
} from "../../components";
import { extractAuthData } from "../../helpers";
import { useAppSelector } from "../../hooks";
import {
  useGetOrdersQuery,
  useGetProductsQuery,
  useGetUsersQuery,
} from "../../services";
const data = [
  {
    name: "Zenitsu",
    speed: 800,
    agility: 750,
    strength: 820,
  },
  {
    name: "Inosuke",
    speed: 650,
    agility: 900,
    strength: 800,
  },
  {
    name: "Tanjiro",
    speed: 900,
    agility: 700,
    strength: 7840,
  },
  {
    name: "Tengen",
    speed: 3500,
    agility: 1500,
    strength: 4840,
  },
  {
    name: "Giyu",
    speed: 3505,
    agility: 1505,
    strength: 4830,
  },
  {
    name: "Shinobu",
    speed: 3900,
    agility: 1005,
    strength: 4800,
  },
];

const Dashboard = () => {
  const { data: productsData, isError: isProductsError } = useGetProductsQuery(
    {}
  );
  useEffect(() => {
    console.log(productsData);
  }, [productsData, isProductsError]);
  return (
    <section className="dashboard-content bg-gray-100 py-4 px-4 max-w-fit overflow-x-hidden overflow-y-auto">
      <FeaturedInfo />
      <Chart
        data={data}
        grid={true}
        xDataKey="strength"
        yDataKey="name"
        title="Demon Slayer Stats"
      />
      <div className="flex flex-row justify-items-stretch mt-4">
        <NewUsers />
        <LatestTransactions />
      </div>
    </section>
  );
};

Dashboard.getLayout = (page: NextComponentType) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;
