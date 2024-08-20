import styles from "./Heading.module.scss";

export interface HeadingProps {
  text: string;
}

function Heading({ text }: HeadingProps) {
  return (
    <>
      <h2 className={styles.heading}>{text}</h2>
    </>
  );
}

export default Heading;
