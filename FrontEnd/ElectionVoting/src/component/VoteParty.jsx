import React, { useEffect, useState } from "react";
import "../assets/styles/VoteParty.css";


const VoteParty = () => {
  let [data , setData] = useState([])
  async function fetchData(){
    let res = await fetch("https://election-management-system-44zy.onrender.com/get-party-data")
    let res2 = await (res.json())
    setData(res2);
  }
  useEffect(()=>{
    fetchData()
  },[])
  const handleCardClick = (item) => {
    const userInput = window.prompt(
      `Please type 'CONFIRM' to select ${item.name}:`
    );
    if (userInput === "CONFIRM") {
      alert(`You have selected ${item.name}`);
    } else {
      alert(
        `You canceled the selection of ${item.name} or entered an incorrect confirmation.`
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card" onClick={() => handleCardClick(item)}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>Leader:</strong> {item.leader}
                </p>
                <p className="card-text">
                  <strong>Symbol:</strong> {item.symbol}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteParty;
