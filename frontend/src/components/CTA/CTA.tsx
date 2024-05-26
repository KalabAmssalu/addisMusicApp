import React from "react";
import { css } from "@emotion/css";
import { Section } from "../common/Section";
import { UseSelector, useSelector } from "react-redux";
import { person1 } from "../../assets/image";
type Props = {};

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

const CTA = (props: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <Section>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10rem;
          margin-right: 2rem;
          margin: auto;
          padding: 4rem;
          @media (max-width: 768px) {
            align-items: flex-start;
            justify-content: center;
            padding: 0rem;
            flex-direction: column;
          }
        `}
      >
        {userInfo ? (
          <>
            <div>
              <img
                src={person1}
                alt="person"
                className={css`
                  width: 25rem;
                  height: 30rem;
                `}
              />
            </div>
          </>
        ) : (
          <h1
            className={css`
              font-size: 7rem;
              @media (max-width: 768px) {
                font-size: 4rem;
              }
            `}
          >
            Ready to Transform Your Music Experience?
          </h1>
        )}
        {userInfo ? (
          <>
            <h1
              className={css`
                font-size: 7rem;
                @media (max-width: 768px) {
                  display: none;
                }
              `}
            >
              Ready to Transform Your Music Experience?
            </h1>
          </>
        ) : (
          <div>
            <p
              className={css`
                font-size: large;
              `}
            >
              Join the Addis Music community today and unlock a world of endless
              musical possibilities. Whether you're looking to discover new
              artists, create the perfect playlist, or enjoy seamless,
              high-quality streaming, Addis Music is here to elevate your
              listening experience.
            </p>
            <br />
            <ul>
              <li>
                <span
                  className={css`
                    font-weight: bold;
                    color: #c33727;
                    font-size: x-large;
                  `}
                >
                  Discover:
                </span>{" "}
                Explore a vast library of songs from all genres and find new
                favorites.
              </li>
              <li>
                <span
                  className={css`
                    font-weight: bold;
                    color: #c33727;
                    font-size: x-large;
                  `}
                >
                  Personalize:
                </span>{" "}
                Create and share playlists that match your unique taste.
              </li>
              <li>
                <span
                  className={css`
                    font-weight: bold;
                    color: #c33727;
                    font-size: x-large;
                  `}
                >
                  Enjoy:
                </span>{" "}
                Experience high-fidelity audio anytime, anywhere.
              </li>
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
};

export default CTA;
