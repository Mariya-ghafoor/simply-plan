import { useEffect } from "react";
import { createEvent } from "../../services/eventService.js";

function SaveEvent() {
  createEvent()
    .then(() => createEvent())
    .then((result) => {
      console.log("Receieved from db ", result);
    });

  // const saveEventDetails = () => {
  //   createEvent()
  //     .then(() => createEvent())
  //     .then((result) => {
  //       console.log("Receieved from db ", result);
  //     });
  // };

  // useEffect(() => {
  //   saveEventDetails();
  // }, []);

  return <div></div>;
}

export default SaveEvent;
