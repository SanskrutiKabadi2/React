import { useState } from "react";

function ToggleUI() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={toggle}>Show Text</button>

      {show && <h2>Hello, this is toggled content</h2>}
    </>
  );
}

export default ToggleUI;
