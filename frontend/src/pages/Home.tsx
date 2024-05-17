import Call from "../components/CTA/Call";
import CTA from "../components/CTA/CTA";

import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Project />
      <CTA />
      <Call />
    </>
  );
};

export default Home;
