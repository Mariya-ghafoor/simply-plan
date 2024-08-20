import DateCard from "../DateCard/DateCard";
import styles from "./DisplayDates.module.scss";

interface DisplayDatesProps {
  selectedDates: Date[];
}

const DisplayDates = ({ selectedDates }: DisplayDatesProps) => {
  //console.log(selectedDates);

  // useEffect(() => {
  //   console.log("in use effect");
  //   const dates = selectedDates.map((date) => {
  //     //console.log(date.toString());
  //     console.log(date.toLocaleString("en-AU"));
  //   });
  // }, [selectedDates]);

  // useEffect(() => {
  //   console.log("in use effect of display dates");
  //   console.log("selected date is ", selectedDates);
  // }, [selectedDates]);

  return (
    <>
      <table className={styles.table}>
        <caption>Your selected dates and times</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Participants</th>
          </tr>
        </thead>
        {selectedDates &&
          selectedDates.map((date, index) => (
            <DateCard date={date} key={index} />
          ))}
      </table>
    </>
  );
};

export default DisplayDates;
