import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { SubmitButton } from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/slices/authSlice";
import { toast } from "react-toastify";

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

const SignUp = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={css`
        width: 100%;
        height: 100vh;
        padding: 0px;
        margin: 0px;
        background-color: #264653;
        color: #fefae0;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
          background-image: linear-gradient(to bottom, #c33727, #e9c46a);
          border-radius: 30px;
          width: 31rem;
          height: 31rem;
          background-color: #2a9d8f;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        `}
      >
        <div
          className={css`
            border-radius: 30px;
            width: 30rem;
            height: 30rem;
            background-color: #2a9d8f;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; //have to be edited
            padding: 25px;
            gap: 1rem;
            padding-top: 2rem;
          `}
        >
          <h1
            className={css`
              font-size: xxx-large;
              text-align: center;
            `}
          >
            Register
          </h1>
          <form
            onSubmit={submitHandler}
            className={css`
              display: flex;
              flex-direction: column;
              gap: 1rem;
            `}
          >
            <label htmlFor="name"> Fullname </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={css`
                height: 40px;
                font-size: large;
                border-radius: 15px;
                padding-left: 10px;
                border: 0px;
                background-color: #84e2d7;
              `}
            />
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={css`
                height: 40px;
                font-size: large;
                border-radius: 15px;
                padding-left: 10px;
                border: 0px;
                background-color: #84e2d7;
              `}
            />
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={css`
                height: 40px;
                font-size: large;
                border-radius: 15px;
                padding-left: 10px;
                border: 0px;
                background-color: #84e2d7;
              `}
            />
            <SubmitButton
              variant="filled"
              className={css`
                margin-top: 1rem;
              `}
            >
              Login
            </SubmitButton>
          </form>
          <p
            className={css`
              color: #d5dbe0;
              cursor: pointer;
              text-align: center;
            `}
            onClick={() => {
              navigate("/login");
            }}
          >
            I have Already have an account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
