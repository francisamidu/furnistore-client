import type { NextComponentType } from "next";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../components/Home";
import { extractAuthData } from "../helpers";
import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const auth = useAppSelector((state) => extractAuthData(state.auth.mutations));
  console.log(auth);
  return <Home />;
};

Dashboard.getLayout = (page: NextComponentType) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;
