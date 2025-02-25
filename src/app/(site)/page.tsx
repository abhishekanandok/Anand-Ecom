import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anand-Ecom | Abhishek Anand",
  description: "This is Anand-Ecom made by Abhishek Anand",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
