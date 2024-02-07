import React from "react";
import Bike from "../../assets/bike.png";
import Card from "./Card";

const Hero = () => {
  return (
    <div>
      <div className="container pt-12 md:pt-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[520px] place-items-center">
          {/* Main text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold">N-SERIES</h1>
              <p className="text-2xl font-bold text-primary">smart escooter</p>
            </div>
            <div className="border-l-4 border-black p-3">
              <p>70km</p>
              <p>EXTENDED URBAN RANGE LITHIUM-ION REVOLUTION</p>
            </div>
          </div>

          {/* image section */}
          <div>
            <img src={Bike} alt="" className="md:scale-150" />
          </div>

          {/* secondary text content */}
          <div>
            <Card number="29" numberText="AH" title="Compact Capacity" />
            <Card number="10" numberText="kg" title="Impossible Light" />
            <Card number="06" numberText="hrs" title="Recharging Time" />
            <Card number="02" numberText="yr" title="Gurantee" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <p className="uppercase">Pre</p>
        <p className="uppercase">Next</p>
      </div>
    </div>
  );
};

export default Hero;
