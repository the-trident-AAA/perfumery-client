"use client";
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context";
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel";
import React from "react";
import OfferCard from "./components/offer-card/offer-card";

export interface Offer {
  id: number;
  image: string;
}

const offers = [
  {
    id: 1,
    image: "/images/place-holder.jpg",
  },
  {
    id: 2,
    image: "/images/place-holder.jpg",
  },
  {
    id: 3,
    image: "/images/place-holder.jpg",
  },
  {
    id: 4,
    image: "/images/place-holder.jpg",
  },
  {
    id: 5,
    image: "/images/place-holder.jpg",
  },
  {
    id: 6,
    image: "/images/place-holder.jpg",
  },
];

export default function HomeOffers() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl">Ofertas</p>
      <StandardCarouselProvider>
        <StandardCarousel
          items={offers}
          dimension="100vw"
          className="pl-4"
          itemsStyles="basis-1/2 xs:basis-1/3 md:basis-1/3 lg:basis-1/3"
          renderCard={(item) => <OfferCard offer={item} />}
        />
      </StandardCarouselProvider>
    </div>
  );
}
