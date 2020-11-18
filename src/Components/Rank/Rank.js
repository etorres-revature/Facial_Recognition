import React from "react";

const Rank = ({firstname, lastname, entries}) => {
  return (
    <div>
      <div className="white f3">{`${firstname} ${lastname}, your current  number of entries is ...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
