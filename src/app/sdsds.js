import NewButton from "@/Shaire/NewButton";
import SmoothButton from "@/Shaire/SmoothButton";
import Image from "next/image";
import React from "react";
import { FaMendeley } from "react-icons/fa";

const About = () => {
  return (
    <div className="  bg-black text-white overflow-hidden cursor-none">
      <div className=" max-w-10/12  mx-auto flex flex-col space-y-8 justify-center items-center">
          <NewButton>About Us</NewButton>
          <h1>
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </h1>
          <SmoothButton>Book an Appointment</SmoothButton>
          <div className="bg-black/60">
              <div>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
                <Image src="/about/about.png" height={70} width={60}></Image>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
