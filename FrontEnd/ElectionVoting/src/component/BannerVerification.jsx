import React, { useRef, useState } from "react";

const BannerVerification = () => {
  let banners = [1, 2, 3, 4];
  let [inputVal, setInputVal] = useState("");
  function handleOnChange(e) {
    setInputVal(e.target.value);
  }
  function handleApprove() {
    console.log(`approved and input msg is ${inputVal}`);
    setInputVal("");
  }
  function handleReject() {
    console.log(`rejected and input msg is ${inputVal}`);
    setInputVal("");
  }
  return (
    <div>
      {banners.map((e) => {
        return (
          <>
            <div>
              <h1>banner {e}</h1>
              <input type="text" onChange={handleOnChange} />
              <button onClick={handleApprove}>approve</button>
              <button onClick={handleReject}>Rejected</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BannerVerification;
