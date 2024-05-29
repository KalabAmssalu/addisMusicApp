import React, { useState } from "react";
import Input from "../common/Input";
import { css } from "@emotion/css";
import { Button, SubmitButton } from "../common/Button";
import Selection from "../common/Selection";

type Props = {};

const AddArtist: React.FC<Props> = () => {
  const [name, setName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [artistUrl, setArtistUrl] = useState<File | null>(null);

  const inputStyles = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    height: "36px",
    width: "20rem",
    backgroundColor: "transparent",
    color: "white",
  };

  const handleSelectionGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  const Genreoptions = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Genre:", selectedGenre);
    console.log("Artist Picture:", artistUrl);
  };

  const clearHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setArtistUrl(null);
    setSelectedGenre("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
          `}
        >
          <h1>Add Artist</h1>
          <Input
            inputProps={{
              name: "Name",
              type: "text",
              required: true,
              customStyles: inputStyles,
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Selection
            selectionProps={{
              name: "Genre",
              required: true,
              customStyles: {
                ...inputStyles,
                color: "black",
                fontWeight: "bold",
              },
            }}
            value={selectedGenre}
            onChange={handleSelectionGenre}
            options={Genreoptions}
          />
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
              @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                padding-left: 1rem;
              }
            `}
          >
            <label htmlFor="artistUrl">
              Artist photo
              <span
                className={css`
                  color: red;
                  text-align: center;
                `}
              >
                *
              </span>
            </label>

            <input
              id="artistUrl"
              type="file"
              onChange={(e) => setArtistUrl(e.target.files?.[0] || null)}
              className={css`
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 4px;
                height: 36px;
                width: 20rem;
                background-color: transparent;
                color: white;
              `}
            />
          </div>

          <div
            className={css`
              margin-top: 2rem;
              display: flex;
              justify-content: space-between;
            `}
          >
            <Button
              variant="outline"
              customStyles={{
                fontSize: "18px",
                padding: "5px 20px",
              }}
              onClick={clearHandler}
            >
              Clear
            </Button>
            <SubmitButton
              variant="filled"
              customStyles={{
                fontSize: "18px",
                padding: "5px 20px",
                borderRadius: "10px",
                borderColor: "blue",
              }}
            >
              Save
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddArtist;
