import React from "react";
import { Button } from "../common/Button";
import { HomeImg } from "../../assets/image";
import { Section } from "../common/Section";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import SearchInput from "../common/SearchInput";

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

const Hero = (props: Props) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <Section>
      {/* left side */}
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          text-align: center;
          width: 50%;
          margin: 5rem;
          @media (max-width: 768px) {
            width: 100%;
            margin: 0rem;
          }
        `}
      >
        <h1
          className={css`
            font-size: 7rem;
            @media (max-width: 768px) {
              font-size: 4rem;
              margin-top: 4rem;
            }
          `}
        >
          Addis <span style={{ backgroundColor: "#c33727" }}>Music</span>
        </h1>
        <br />
        <br />
        <br />
        {userInfo ? (
          <>
            <h3
              className={css`
                margin: 2rem 1rem;
                @media (max-width: 768px) {
                  margin: 1rem 0.5rem;
                }
              `}
            >
              Search music using name of the music, artists, albums, genres,
              songs per genre,
            </h3>

            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                @media (max-width: 768px) {
                  flex-direction: column;
                  gap: 20px;
                }
              `}
            >
              <label htmlFor="search"> Search: </label>
              <SearchInput />
            </div>
          </>
        ) : (
          <>
            <p className="center">
              Welcome to Addis Music Web Application, the ultimate destination
              for music lovers! Dive into a world where melodies meet
              innovation, offering you a seamless and immersive musical
              experience. Whether you're a casual listener or a dedicated
              audiophile, our app is designed to cater to your every need.
              Discover new artists, create personalized playlists, and enjoy
              high-quality streaming anytime, anywhere. Join our vibrant
              community of music enthusiasts and let the rhythm of Addis Music
              be the soundtrack to your life.
            </p>
            <br />
            <div className="center">
              <Button
                variant="filled"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Start Here
              </Button>
            </div>
          </>
        )}
      </div>

      {/* right */}
      <div
        className={css`
          @media (max-width: 768px) {
            width: 100%;
            display: none;
          }
        `}
      >
        <img
          src={HomeImg}
          alt="Addis"
          className={css`
            width: 600px;
            height: 600px;
            @media (max-width: 768px) {
              width: 80%;
              height: auto;
              display: none;
            }
          `}
        />
      </div>
    </Section>
  );
};

export default Hero;
