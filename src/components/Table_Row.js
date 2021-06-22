import React from "react";

const Table_Row = ({ name, salary, age, profile }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{salary}</td>
      <td>{age}</td>
      <td>{profile}</td>
    </tr>
  );
};

export default Table_Row;
