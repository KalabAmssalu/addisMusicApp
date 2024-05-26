import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { SubmitButton } from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/slices/authSlice";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../state/slices/usersApiSlice";

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

const SignUp = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setconfpassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkPassword()) {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(
          (err as any)?.data?.message ||
            (err as any)?.message ||
            (err as any)?.error ||
            "An error occurred"
        );
      }
    } else {
      toast.error("Passwords do not match");
    }
  };

  const checkPassword = () => {
    if (password === confpassword) {
      return true;
    } else {
      return false;
    }
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
          height: 37rem;
          background-color: #2a9d8f;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          @media (max-width: 768px) {
            width: 23rem;
          }
        `}
      >
        <div
          className={css`
            border-radius: 30px;
            width: 30rem;
            height: 36rem;
            background-color: #2a9d8f;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 25px;
            gap: 1rem;
            padding-top: 2rem;
            @media (max-width: 768px) {
              width: 22rem;
              padding: 22px;
            }
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
            <label htmlFor="Confpassword"> Confirm Password </label>
            <input
              type="password"
              name="Confpassword"
              value={confpassword}
              onChange={(e) => setconfpassword(e.target.value)}
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
              disabled={isLoading ? true : false}
            >
              Subscribe
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
            I Already have an account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
