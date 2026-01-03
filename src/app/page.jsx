import Banner from "@/components/home/Banner";
import Innovation from "@/components/home/Innovation";
import Service from "@/components/home/Service";
import Packed from "@/components/home/Packed";
import AboutSquadLog from "@/components/home/AboutSquadLog";
import Portfolio from "@/components/home/Protfolio";
import Support from "@/components/home/Support";
import Intregration from "@/components/home/Intregration";
import React from "react";

const TestPages = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Packed />
      </section>


      <section >
        <Innovation />
      </section>


      <section>
        <Service />
      </section>


      <section>
        <Portfolio />
      </section>

      <section>
        <Support />
      </section>

      <section>
        <AboutSquadLog />
      </section>

      <section>
        <Intregration />
      </section>

    </div>
  );
};

export default TestPages;
