import { css } from "@emotion/css";
import { AdissLogo } from "../../assets/image";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../state/slices/usersApiSlice";
import { logout } from "../../state/slices/authSlice";
import { toast } from "react-toastify";
import SubHeader from "./SubHeader";

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

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("User Logout");
    } catch (err) {
      toast.error(
        (err as any)?.data?.message ||
          (err as any)?.message ||
          (err as any)?.error ||
          "An error occurred"
      );
    }
  };

  return (
    <>
      <div
        className={css`
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #c33727;
          background-image: linear-gradient(to right, #c33727, #e9c46a);
          height: 50px;
          width: 100%;
          @media (max-width: 768px) {
            padding: 2px;
          }
        `}
      >
        {/* Left */}

        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          `}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={AdissLogo}
            alt="Logo"
            className={css`
              width: 40px;
              height: 40px;
              margin-left: 2rem;
              margin-right: 2rem;
            `}
          />
          <span
            className={css`
              color: #264653;
              font-size: xx-large;
              @media (max-width: 768px) {
                width: 100%;
                display: none;
              }
            `}
          >
            Adiss Music
          </span>
        </div>
        {/* Right */}
        {userInfo ? (
          <>
            <div
              className={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                margin-right: 2rem;
              `}
            >
              <h3
                className={css`
                  @media (max-width: 768px) {
                    display: none;
                  }
                `}
              >
                Welcome {userInfo.name}!
              </h3>

              <Button
                variant="filled"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
              </Button>
              <Button variant="filled" onClick={logoutHandler}>
                logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              className={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                margin-right: 2rem;
              `}
            >
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Subcribe
              </Button>
            </div>
          </>
        )}
      </div>
      {userInfo && (
        <div
          className={css`
            position: sticky;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <SubHeader />
        </div>
      )}
    </>
  );
};

export default Header;
