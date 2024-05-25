import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    userInfo: UserInfoType;
  };
}
interface UserInfoType {
  name: string;
  email: string;
  id: string;
}

type Props = {};

const PrivateRoutes = (props: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
