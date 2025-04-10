import PerfurmCard from "@/src/components/perfum-card/perfum-card";
import React from "react";

export default function TestCard() {
  return (
    <div className="">
      <PerfurmCard
        perfum={{
          name: "asdw",
          brand: "adwd",
          description: "asdsd",
          price: 100,
          image: "/images/place-holder.jpg",
        }}
      />
    </div>
  );
}
