import React, { useState } from "react";
import Input from "../common/Input";
import { css } from "@emotion/css";
import { Button, SubmitButton } from "../common/Button";
import Selection from "../common/Selection";

type Props = {};

const AddMusic: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [releaseDate, setReleaseDate] = useState("");

  const inputStyles = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    height: "36px",
    width: "20rem",
    backgroundColor: "transparent",
    color: "white",
  };

  const handleSelectionAlbum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlbum(e.target.value);
  };
  const handleSelectionArtist = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArtist(e.target.value);
  };

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Artist:", selectedArtist);
    console.log("Album:", selectedAlbum);
    console.log("Genre:", genre);
    console.log("Cover Image:", coverImage);
    console.log("Release Date:", releaseDate);
    console.log("select:", selectedAlbum);
  };

  const clearHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setSelectedArtist("");
    setSelectedAlbum("");
    setCoverImage(null);
    setGenre("");
    setReleaseDate("");
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
          <h1>Add Music</h1>
          <Input
            inputProps={{
              name: "Title",
              type: "text",
              required: true,
              customStyles: inputStyles,
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Selection
            selectionProps={{
              name: "Artist",
              required: false,
              customStyles: {
                ...inputStyles,
                color: "black",
              },
            }}
            value={selectedArtist}
            onChange={handleSelectionArtist}
            options={options}
          />

          <Selection
            selectionProps={{
              name: "Album",
              required: false,
              customStyles: {
                ...inputStyles,
                color: "black",
              },
            }}
            value={selectedAlbum}
            onChange={handleSelectionAlbum}
            options={options}
          />
          <Input
            inputProps={{
              name: "Genre",
              type: "text",
              required: true,
              customStyles: inputStyles,
            }}
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
            `}
          >
            <label htmlFor="coverImage">
              Cover Image
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
              id="coverImage"
              type="file"
              onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
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
          <Input
            inputProps={{
              name: "Release Date",
              type: "date",
              required: true,
              customStyles: inputStyles,
            }}
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />

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

export default AddMusic;
