import React, { useState } from "react";

function TextField({ setFlag }) {
  const [value, setValue] = useState("");

  function handle(event) {
    const newValue = event.target.value;

    setValue(newValue);
    setFlag(newValue.length > 5);
  }

  return <input type="text" onInput={handle} value={value} />;
}

export default function () {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <TextField setFlag={setFlag} />

      {flag && <span style={{ color: "red" }}>error</span>}
    </div>
  );
}
