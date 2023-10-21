import { useState } from "react";

// We define the object outside of the component so that it doesn't get redefined on every render (which would cause the component to re-render)
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/* The state in each of the child components is isolated. Changing the state in one component will not affect the state in the other component. This is because each component has its own state. */}
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // console.log(useState(1));
  // const step = 1;

  // useState returns an array with two elements:
  // 1. The current state value
  // 2. A function to update the state value

  // The setter is a function provided by React that allows us to update the state value without directly modifying it (which would cause the component to re-render) - this is called "immutability"

  // useState is a hook that allows us to add state to a functional component
  // You can't use a hook in an if statement, for loop, etc.
  // It must be used at the top level of the component function (i.e. not inside another function) and it must be used in the same order every time the component renders (i.e. you can't put it inside an if statement that might not run every time the component renders) - this is called the "Rules of Hooks"
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("Previous button clicked");
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handleNext() {
    // alert("Next button clicked");
    if (step < 3) {
      setStep((nextStep) => nextStep + 1);    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? <>📂</> : <>📁</>}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div> */}
            {messages.map((_, index) => (
              <div key={index} className={step >= index + 1 ? "active" : ""}>
                {index + 1}
              </div>
            ))}
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
