import Call from "../components/CTA/Call";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import { useSelector } from "react-redux";
import Feature from "../components/feature/Feature";

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
      {userInfo && <Feature />}
      <CTA />
      {!userInfo && <Call />}
    </>
  );
};

export default Home;
