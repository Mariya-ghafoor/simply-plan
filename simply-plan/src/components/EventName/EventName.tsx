import Subheading from "../Subheading/Subheading";
import TextInputField from "../TextInputField/TextInputField";
import Button from "../Button/Button";
import styles from "./EventName.module.scss";
import { StepProps } from "../../pages/CreateEventPage/CreateEventPage";
import { FormEvent } from "react";
import { useEffect, useState } from "react";

function EventName({ nextStep, prevStep }: StepProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("eventname") || "");
  }, []);

  const onInputFieldChange = (e: FormEvent<HTMLInputElement>) => {
    //event.target here is an HTMLElement which is the parent of all HTML elements, but isn't guaranteed to have the property value. TypeScript detects this and throws the error. Cast event.target to the appropriate HTML element to ensure it is HTMLInputElement which does have a value property:

    setValue((e.target as HTMLInputElement).value);
    console.log("value on change: ", value);
  };

  const onClickNext = () => {
    console.log("value on clicking next ", value);
    localStorage.setItem("eventname", value);
    nextStep();
  };
  return (
    <>
      <Subheading text={"What do you want to call your event?"} />
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

export default EventName;
