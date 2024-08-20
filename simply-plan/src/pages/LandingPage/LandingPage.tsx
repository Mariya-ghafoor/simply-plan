import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Subheading from "../../components/Subheading/Subheading";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  const navigator = useNavigate();
  const onButtonClick = () => {
    navigator("./create");
  };

  return (
    <>
      <Heading text={"Simply Plan"} />
      <Subheading text={"Plan your next big meetup here"} />
      <Button
        label={"Let's go"}
        className={styles.button}
        onClick={onButtonClick}
      />
    </>
  );
}

export default LandingPage;
