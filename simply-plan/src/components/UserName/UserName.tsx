import { FormEvent, useEffect } from "react";
import Subheading from "../Subheading/Subheading";
import TextInputField from "../TextInputField/TextInputField";
import Button from "../Button/Button";
import styles from "./UserName.module.scss";
import { StepProps } from "../../pages/CreateEventPage/CreateEventPage";
import { useState } from "react";

function UserName({ nextStep, prevStep }: StepProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("username") || "");
  }, []);

  const onInputFieldChange = (e: FormEvent<HTMLInputElement>) => {
    //event.target here is an HTMLElement which is the parent of all HTML elements, but isn't guaranteed to have the property value. TypeScript detects this and throws the error. Cast event.target to the appropriate HTML element to ensure it is HTMLInputElement which does have a value property:

    setValue((e.target as HTMLInputElement).value);
    console.log("value on change: ", value);
  };

  const onClickNext = () => {
    console.log("value on clicking next ", value);
    localStorage.setItem("username", value);
    nextStep();
  };
  return (
    <>
      <Subheading text={"What is your name?"} />
      <TextInputField
        handleChange={onInputFieldChange}
        value={value}
        onSubmit={onClickNext}
      />
      <Button label={"Back"} className={styles.buttonPrev} onClick={prevStep} />

      <Button
        label={"Next"}
        className={styles.buttonNext}
        onClick={onClickNext}
      />
    </>
  );
}

export default UserName;
