import AboutSquadLog from "@/components/Home/AboutSquadLog";
import Banner from "@/components/Home/Banner";
import Comparison from "@/components/Home/Comparison";
import Faq from "@/components/Home/Faq";
import Innovation from "@/components/Home/Innovation";
import Integration from "@/components/Home/Integration";
import LaunchYourSite from "@/components/Home/LaunchYourSite";
import OurProcess from "@/components/Home/OurProcess";
import OurTeam from "@/components/Home/OurTeam";
// import PartOfUs from "@/components/Home/PartOfus";
import Pricing from "@/components/Home/Pricing";
// import Service from "@/components/Home/Service";
import Support from "@/components/Home/Support";
import Testimonial from "@/components/Home/Testimonial";
import CosmicBackground from "@/components/Home/CosmicBackground";
import PortfolioCard from "@/components/case-studies/PortfolioCard";

const TestPages = () => {
  return (
    <div className="">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative z-10">
        <section>
          <Banner />
        </section>

        <section>
          <Innovation />
        </section>

{/* grid-cols-1 lg:grid-cols-12 gap-6 */}
        <section>  
          <PortfolioCard />
        </section>
        <section>
          <Support />
        </section>
        <section>
          <AboutSquadLog />
        </section>
        <section>
          <Integration />
        </section>

        <section>
          <Pricing />
        </section>
        <section>
          <OurProcess />
        </section>
        <section>
          <LaunchYourSite />
        </section>

        <section>
          <OurTeam />
        </section>
        <section>
          <Comparison />
        </section>

        <section>
          <Testimonial />
        </section>

        <section>
          <Faq />
        </section>

        {/* <section>
        <PartOfUs />
      </section> */}
      </div>
    </div>
  );
};

export default TestPages;
