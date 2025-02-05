// IT will accept a list of components
// based on the size of the list
// it will generate steps

import React, { useState } from "react";
import "./../style/step.css";

const Stepper = ({ componentList }) => {
  const n = componentList.length;
  const [step, setStep] = useState(0);

  const onPreviousClick = () => {
    if (step > 0) setStep(step - 1);
  };

  const onNextClick = () => {
    if (step < n - 1) setStep(step + 1);
  };

  const StepElements = ({ currentStep }) => {
    const elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(
        <span id="step" className={currentStep >= i ? "active" : ""}>
          {i + 1}
        </span>
      );
    }
    return elements;
  };

  return (
    <div>
      <div id="step-wrapper">
        <StepElements currentStep={step} />
        <div
          id="progress"
          style={{ width: `${(step / (n - 1)) * 100}%` }}
        ></div>
      </div>
      <div>{componentList[step]}</div>
      <div>
        <button onClick={onPreviousClick}>Previous </button>
        <button onClick={onNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
