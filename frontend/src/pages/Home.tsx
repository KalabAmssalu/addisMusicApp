import Call from "../components/CTA/Call";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import { useDispatch, useSelector } from "react-redux";

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
      <CTA />
      {!userInfo && <Call />}
    </>
  );
};

export default Home;
