import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateTimePicker.module.scss";
import Subheading from "../Subheading/Subheading";
import Button from "../Button/Button";
import { StepProps } from "../../pages/CreateEventPage/CreateEventPage";
import DisplayDates from "../DisplayDates/DisplayDates";

function DateTimePicker({ nextStep, prevStep }: StepProps) {
  const [date, setDate] = useState<Date>(new Date());

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const onClickSelect = () => {
    setSelectedDates([...selectedDates, date]);
    //console.log(selectedDates);
  };

  const onClickNext = () => {
    localStorage.setItem("dates", JSON.stringify(selectedDates));
    nextStep();
  };

  return (
    <div className={styles.dateTimeMain}>
      <h2 className={styles.dateTimeHeading}>
        Select a date and time for your event
      </h2>
      {/* <Subheading
        className={styles.subheading}
        text={"Select a date and time for your event"}
      /> */}
      <div className={styles.dateTimeDiv}>
        <DatePicker
          selected={date}
          onChange={(date) => date && setDate(date)}
          inline
          showTimeSelect
          //timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
        />
      </div>
      <Button label={"Back"} className={styles.buttonPrev} onClick={prevStep} />

      <Button
        label={"Select"}
        className={styles.buttonSelect}
        onClick={onClickSelect}
      />

      <Button
        label={"Next"}
        className={styles.buttonNext}
        onClick={onClickNext}
      />

      <DisplayDates selectedDates={selectedDates} />
    </div>
  );
}

export default DateTimePicker;
