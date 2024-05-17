import { css } from "@emotion/css";
import { AdissLogo } from "../../assets/image";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
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
        `}
      >
        {/* Left */}
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
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
            `}
          >
            Adiss Music
          </span>
        </div>
        {/* Right */}
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
      </div>
    </>
  );
};

export default Header;
