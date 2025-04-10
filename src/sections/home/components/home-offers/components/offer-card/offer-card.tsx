import Image from "next/image";
import React from "react";
import { Offer } from "../../home-offers";

interface Props {
  offer: Offer;
}

export default function OfferCard({ offer }: Props) {
  return (
    <div>
      <Image
        className="aspect-square object-cover"
        src={offer.image}
        alt={offer.id.toString()}
        width={400}
        height={400}
      />
    </div>
  );
}
