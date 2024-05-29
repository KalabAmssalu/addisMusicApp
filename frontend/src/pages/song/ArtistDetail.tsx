import React from "react";
import { avatar, website } from "../../assets/image";
import { css } from "@emotion/css";
import { Section } from "../../components/common/Section";
import { Button } from "../../components/common/Button";
import { Trash2 } from "lucide-react";

type Props = {};

const ArtistDetail = (props: Props) => {
  return (
    <Section>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          @media (max-width: 768px) {
            padding-top: 4rem;
            margin-bottom: 10rem;
          }
        `}
      >
        <img
          src="https://picsum.photos/150/150?music?9"
          alt="newone"
          className={css`
            border-radius: 20px;
            height: 200px;
            width: 200px;
          `}
        />
        <h2
          className={css`
            color: #fff200;
            font-style: italic;
          `}
        >
          Artist Name:
        </h2>
        <h1>Kalab Amssalu Bezabeh</h1>

        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
          `}
        >
          <Button
            variant="filled"
            customStyles={{
              fontSize: "18px",
              padding: "5px 20px",
              borderRadius: "10px",
              borderColor: "blue",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Delete This Artist <Trash2 />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ArtistDetail;
