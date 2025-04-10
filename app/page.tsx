import React from "react";
import styles from "@/app/ui/home.module.css";
import { bebas } from "./ui/fonts";
import { FaReact } from "react-icons/fa";
import { FlaskConical } from "lucide-react";
import { FaSprayCan } from "react-icons/fa";
import Header from "./components/Header";
import { BsArrowRight } from "react-icons/bs";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
    </main>
  );
};

export default Home;
