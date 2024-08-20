import { HeadingProps } from "../Heading/Heading";
import styles from "./Subheading.module.scss";

function Subheading({ text }: HeadingProps) {
  return <p className={styles.subheading}>{text}</p>;
}

export default Subheading;
