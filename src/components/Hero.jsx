import React from "react";
import Card from "./Card";

const Hero = (props) => {

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 py-[20px] bg-[#101010] min-h-[90vh]">
      {props.cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Hero;
