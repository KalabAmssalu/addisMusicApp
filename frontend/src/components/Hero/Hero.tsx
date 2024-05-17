import { Button } from "../common/Button";
import { HomeImg } from "../../assets/image";
import { Section } from "../common/Section";
import { useNavigate } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Section>
      {/* left side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "50%",
          margin: "5rem",
        }}
      >
        <h1 className="big-text">
          Addis <span style={{ backgroundColor: "#c33727" }}>Music </span>
        </h1>
        <br />
        <br />
        <br />
        <p className="center">
          Welcome to Addis Music Web Application, the ultimate destination for
          music lovers! Dive into a world where melodies meet innovation,
          offering you a seamless and immersive musical experience. Whether
          you're a casual listener or a dedicated audiophile, our app is
          designed to cater to your every need. Discover new artists, create
          personalized playlists, and enjoy high-quality streaming anytime,
          anywhere. Join our vibrant community of music enthusiasts and let the
          rhythm of Addis Music be the soundtrack to your life.
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
      </div>

      {/* right */}
      <div>
        <img
          src={HomeImg}
          alt="Addis"
          style={{ width: "600px", height: "600px" }}
        />
      </div>
    </Section>
  );
};

export default Hero;
