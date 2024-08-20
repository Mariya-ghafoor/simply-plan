import EventName from "../../components/EventName/EventName";
import { useState } from "react";
import UserName from "../../components/UserName/UserName";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import SaveEvent from "../../components/SaveEvent/SaveEvent";

export interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
}

function CreateEventPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      {step === 1 && <EventName nextStep={nextStep} prevStep={prevStep} />}
      {step === 2 && <UserName nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <DateTimePicker nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <SaveEvent />}
    </>
  );
}

export default CreateEventPage;
