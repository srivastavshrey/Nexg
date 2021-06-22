import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [profile, setProfile] = useState("");

  function employee_name(e) {
    setName(e.target.value);
  }
  function employee_age(e) {
    setAge(e.target.value);
  }
  function employee_salary(e) {
    setSalary(e.target.value);
  }

  function set_user_data(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      profile_image: "",
    });

    setSalary("");
    setName("");
    setAge("");
    setProfile("");
  }

  return (
    <div className="input-form">
      <form onSubmit={set_user_data}>
        <label>Employee Name:</label>
        <br />
        <input
          type="text"
          name="employee_name"
          onChange={employee_name}
          value={name}
        />
        <br />
        <br />
        <label>Employee Salary:</label>
        <br />
        <input
          type="number"
          name="employee_salary"
          onChange={employee_salary}
          value={salary}
        />
        <br />
        <br />
        <label>Employee Age:</label>
        <br />
        <input
          type="number"
          name="employee_age"
          onChange={employee_age}
          value={age}
        />
        <br />
        <br />
        <label>Upload Profile Picture:</label>
        <br />
        <input type="file" value={profile} name="profile_image" />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
