import React from "react";
import "../assets/styles/VoteParty.css";

const data = [
  {
    name: "Democracy First",
    leader: "Michael Brown",
    symbol: "Dove",
    establishedYear: 1950,
    address: "789 Maple Street, Capital City",
    status: "Approved",
    createdAt: "2024-12-14T08:30:00Z",
    updatedAt: "2024-12-15T10:00:00Z",
    
  },
  {
    name: "Unity Party",
    leader: "Sophia Carter",
    symbol: "Handshake",
    establishedYear: 1975,
    address: "123 Elm Avenue, Greenfield",
    status: "Pending",
    createdAt: "2024-12-10T09:00:00Z",
    updatedAt: "2024-12-11T11:00:00Z",
  },
  {
    name: "Progress Alliance",
    leader: "Daniel Lee",
    symbol: "Arrow",
    establishedYear: 1980,
    address: "456 Oak Lane, Metro City",
    status: "Approved",
    createdAt: "2024-12-01T12:30:00Z",
    updatedAt: "2024-12-02T14:00:00Z",
  },
  {
    name: "Freedom Voice",
    leader: "Emily White",
    symbol: "Flag",
    establishedYear: 1990,
    address: "321 Pine Road, Freedom Town",
    status: "Rejected",
    createdAt: "2024-12-05T10:00:00Z",
    updatedAt: "2024-12-06T12:30:00Z",
  },
  {
    name: "Justice League",
    leader: "Christopher Johnson",
    symbol: "Scale",
    establishedYear: 1965,
    address: "789 Birch Street, Liberty City",
    status: "Approved",
    createdAt: "2024-12-08T15:00:00Z",
    updatedAt: "2024-12-09T17:00:00Z",
  },
  {
    name: "People's Power",
    leader: "Olivia Martinez",
    symbol: "Fist",
    establishedYear: 2000,
    address: "987 Cedar Avenue, Unity Town",
    status: "Pending",
    createdAt: "2024-12-03T13:00:00Z",
    updatedAt: "2024-12-04T15:30:00Z",
  },
  {
    name: "Green Future",
    leader: "Benjamin Harris",
    symbol: "Leaf",
    establishedYear: 2010,
    address: "654 Spruce Drive, Eco City",
    status: "Approved",
    createdAt: "2024-12-02T14:30:00Z",
    updatedAt: "2024-12-03T16:00:00Z",
  },
  {
    name: "Equality Front",
    leader: "Charlotte Garcia",
    symbol: "Balance",
    establishedYear: 1995,
    address: "123 Maple Way, Equality City",
    status: "Rejected",
    createdAt: "2024-12-07T11:00:00Z",
    updatedAt: "2024-12-08T13:30:00Z",
  },
  {
    name: "Hope Coalition",
    leader: "Alexander Wilson",
    symbol: "Sunrise",
    establishedYear: 1985,
    address: "321 Willow Lane, Hope Town",
    status: "Approved",
    createdAt: "2024-12-06T09:30:00Z",
    updatedAt: "2024-12-07T11:00:00Z",
  },
  {
    name: "Unity Builders",
    leader: "Ava Lopez",
    symbol: "Bridge",
    establishedYear: 1970,
    address: "456 River Road, Harmony City",
    status: "Pending",
    createdAt: "2024-12-04T10:30:00Z",
    updatedAt: "2024-12-05T12:00:00Z",
  },
  {
    name: "Bright Tomorrow",
    leader: "Liam Walker",
    symbol: "Star",
    establishedYear: 2015,
    address: "789 Sun Street, Vision City",
    status: "Approved",
    createdAt: "2024-12-09T08:00:00Z",
    updatedAt: "2024-12-10T09:30:00Z",
  },
  {
    name: "Progressive Unity",
    leader: "Isabella Young",
    symbol: "Circle",
    establishedYear: 2005,
    address: "123 Moon Avenue, Crescent City",
    status: "Rejected",
    createdAt: "2024-12-11T07:30:00Z",
    updatedAt: "2024-12-12T08:30:00Z",
  },
  {
    name: "Liberty Party",
    leader: "James King",
    symbol: "Torch",
    establishedYear: 1960,
    address: "321 Beacon Road, Liberty Town",
    status: "Approved",
    createdAt: "2024-12-12T09:00:00Z",
    updatedAt: "2024-12-13T10:30:00Z",
  },
  {
    name: "New Dawn",
    leader: "Amelia Scott",
    symbol: "Sun",
    establishedYear: 1998,
    address: "654 Horizon Drive, Sunrise City",
    status: "Pending",
    createdAt: "2024-12-13T08:30:00Z",
    updatedAt: "2024-12-14T09:30:00Z",
  },
  {
    name: "People's Voice",
    leader: "Elijah Adams",
    symbol: "Microphone",
    establishedYear: 1988,
    address: "987 Echo Lane, Sound City",
    status: "Rejected",
    createdAt: "2024-12-14T10:00:00Z",
    updatedAt: "2024-12-15T11:00:00Z",
  },
  {
    name: "Harmony Alliance",
    leader: "Mia Clark",
    symbol: "Olive Branch",
    establishedYear: 1972,
    address: "321 Peace Road, Harmony Town",
    status: "Approved",
    createdAt: "2024-12-15T08:00:00Z",
    updatedAt: "2024-12-16T09:00:00Z",
  },
  {
    name: "Future Vision",
    leader: "Ethan Wright",
    symbol: "Eye",
    establishedYear: 2002,
    address: "456 Insight Avenue, Vision Town",
    status: "Pending",
    createdAt: "2024-12-16T10:00:00Z",
    updatedAt: "2024-12-17T11:00:00Z",
  },
  {
    name: "Equal Rights Party",
    leader: "Abigail Baker",
    symbol: "Equality Sign",
    establishedYear: 1993,
    address: "654 Justice Street, Fair City",
    status: "Approved",
    createdAt: "2024-12-17T12:00:00Z",
    updatedAt: "2024-12-18T13:00:00Z",
  },
  {
    name: "Nation Builders",
    leader: "Lucas Hill",
    symbol: "Brick",
    establishedYear: 1983,
    address: "987 Construct Lane, Builder City",
    status: "Rejected",
    createdAt: "2024-12-18T14:00:00Z",
    updatedAt: "2024-12-19T15:00:00Z",
  },
  {
    name: "Rising Stars",
    leader: "Harper Green",
    symbol: "Shooting Star",
    establishedYear: 2018,
    address: "321 Galaxy Road, Stellar Town",
    status: "Pending",
    createdAt: "2024-12-19T08:00:00Z",
    updatedAt: "2024-12-20T09:00:00Z",
  },
];
const VoteParty = () => {
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
