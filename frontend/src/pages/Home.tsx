import Call from "../components/CTA/Call";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import { useSelector } from "react-redux";
import Feature from "../components/feature/Feature";
import RecentMusic from "../components/Project/RecentMusic";
import PopularArtist from "../components/Project/PopularArtist";
import Banner from "../components/feature/Banner";
import { css } from "@emotion/css";

interface RootState {
  auth: {
    userInfo: UserInfoType;
  };
}

interface UserInfoType {
  name: string;
  email: string;
  _id: string;
}

type Props = {};

const Home = (props: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Hero />
      <Project />
      <Feature />
      <CTA />
      {!userInfo && <Call />}
      <div
        className={css`
          padding-bottom: 6rem;
          padding-top: 4rem;
          background-color: #264653;
        `}
      >
        <RecentMusic />
      </div>
      <PopularArtist />
      <Banner />
    </>
  );
};

export default Home;
