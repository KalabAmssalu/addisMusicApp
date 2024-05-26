import { Button } from "../common/Button";
import { AdissLogo } from "../../assets/image";
import { Section } from "../common/Section";
import { useNavigate } from "react-router-dom";

type Props = {};

const Call = (props: Props) => {
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

        <br />

        <Button
          variant="filled"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Subscribe
        </Button>
      </div>

      {/* right */}
      <div>
        <img
          src={AdissLogo}
          alt="Addis"
          style={{
            width: "500px",
            height: "500px",
            padding: "2rem",
            marginRight: "2rem",
          }}
        />
      </div>
    </Section>
  );
};

export default Call;
