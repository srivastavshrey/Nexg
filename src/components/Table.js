import React, { useState } from "react";
import Form from "./Form";
import Table_Row from "./Table_Row";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");

  const addData = (data) => {
    const newData = [data, ...tableData];
    setTableData(newData);
    console.log(...tableData);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = tableData.filter((data) => {
    return data.employee_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h3 className="crypto-text">Search a Employee</h3>
      <form>
        <input
          className="crypto-input"
          placeholder="Search"
          type="text"
          onChange={handleSearch}
        />
      </form>
      <br />
      <br />
      <h3>Add a employee</h3>
      <Form onSubmit={addData} />
      <br />
      <br />
      <h3>Employee Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => {
            return (
              <Table_Row
                key={data.id}
                name={data.employee_name}
                salary={data.employee_salary}
                age={data.employee_age}
                profile={data.profile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
