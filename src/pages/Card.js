import React from "react";
const card = [
  {
    name: "John",
    account: "111",
  },
  {
    name: "Ly",
    account: "122",
  },
  {
    name: "Rick",
    account: "124",
  },
  {
    name: "Loan",
    account: "125",
  },
  {
    name: "Robert",
    account: "126",
  },
  {
    name: "Hoa",
    account: "128",
  },
];

function Card() {
  return (
    <> <div style={{float: 'right'}}>
      <ol>
        {card.map(function cards(c) {
          return <li>{c.name}</li>;
        })}

        <button> Click here to see</button>
      </ol>
      </div>
    </>
  );
}

export default Card;
