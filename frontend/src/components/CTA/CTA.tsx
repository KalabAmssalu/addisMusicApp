import React from "react";
import { css } from "@emotion/css";
import { Section } from "../common/Section";

type Props = {};

const CTA = (props: Props) => {
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
        `}
      >
        <h1 className="big-text">Ready to Transform Your Music Experience?</h1>
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
      </div>
    </Section>
  );
};

export default CTA;
