import "./index.css";
import Step from "./components/step";

import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
} from "./components/coc";

const componentList = [
  <Component1 key="component1" />,
  <Component2 key="component2" />,
  <Component3 key="component3" />,
  <Component4 key="component4" />,
  <Component5 key="component5" />,
];

export default function App() {
  return (
    <div className="App">
      <h1>React Stepper</h1>
      <Step componentList={componentList} />
    </div>
  );
}
