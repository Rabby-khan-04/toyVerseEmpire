import React from "react";
import { useLottie } from "lottie-react";
import loadingAnimation from "../../../public/Loading.json";

const Spinner = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-[768px]">{View}</div>
    </section>
  );
};

export default Spinner;
