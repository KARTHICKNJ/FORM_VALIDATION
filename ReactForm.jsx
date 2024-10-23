import React, { useState } from 'react';
import './Form.css';

const ReactForm = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    course: '',
  });
  const [errors, setErrors] = useState({});

  function validate() {
    let validationErrors = {};

    if (!data.username) {
      validationErrors.username = 'Username is required';
    } else if (data.username.length < 3) {
      validationErrors.username = 'Username must be at least 3 characters long';
    }

    if (!data.password) {
      validationErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (!data.course) {
      validationErrors.course = 'Course selection is required';
    }

    return validationErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const jsonConvert = JSON.stringify(data);
      alert(jsonConvert);
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="container">
      <h1 className="text-primary">REACT FORM HANDLING</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label>USERNAME :</label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={data.username}
          />
          {errors.username && (
            <span style={{ color: 'red' }}>{errors.username}</span>
          )}
        </div>
        <div className="my-3">
          <label>PASSWORD :</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={data.password}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password}</span>
          )}
        </div>
        <div className="my-3">
          <label>SELECT COURSE :</label>
          <select name="course" onChange={handleChange} value={data.course}>
            <option value="">--Select a course--</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="REACT">REACT</option>
          </select>
          {errors.course && (
            <span style={{ color: 'red' }}>{errors.course}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default ReactForm;
