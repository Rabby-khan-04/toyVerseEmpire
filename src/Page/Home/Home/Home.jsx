import React from "react";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import { useTitle } from "../../../hooks/useTitle";
import Spinner from "../../../components/Spinner/Spinner";
import { useNavigation } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import AvengersStation from "../AvengersStation/AvengersStation";
import Games from "../Games/Games";

const Home = () => {
  useTitle("Home");
  // Loading State Condition
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }
  return (
    <div>
      <Banner />
      <Gallery />
      <CategoryTab />
      <AvengersStation />
      <Games />
    </div>
  );
};

export default Home;
