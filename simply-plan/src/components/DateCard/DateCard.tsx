import { useEffect, useState } from "react";

interface DateCardProps {
  date: Date;
}

function DateCard({ date }: DateCardProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [selectedTime, setSelectedTime] = useState<string>("");

  useEffect(() => {
    console.log("in use effect");
    const options = {
      weekday: "short" as const,
      // year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };

    const newDate = date.toLocaleString("en-AU", options);

    setSelectedDate(newDate);
    console.log("After setting date ", selectedDate);

    setSelectedTime(
      date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );

    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();

    // console.log(selectedDate);
    // console.log(selectedTime);
  }, [date, selectedDate, selectedTime]);

  return (
    <tbody>
      <tr>
        <td>{selectedDate}</td>
        <td>{selectedTime}</td>
        <td>test</td>
      </tr>
    </tbody>
  );
}

export default DateCard;
