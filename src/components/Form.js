import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// styles
const StyledWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  color: #252a34;
  background: #efefef;
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 5px;
  margin-top: 8px;
  outline: none;
  box-sizing: border-box;
`;

const Submit = styled.button`
  width: 100%;
  height: 50px;
  color: #112b3c;
  background: ${(props) => props.submitButtonColor || "#efefef"};
  border: 1px solid #205375;
  border-radius: 5px;
  margin-top: 16px;
`;

function Form() {
  // state
  const [userData, setUserData] = useState({});
  const [randomColor, setRandomColor] = useState("#F66B0E");
  const [submitButtonColor, setSubmitButtonColor] = useState("");

  // generate random color
  const randomColorGenerator = () => {
    setRandomColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  // handling of events
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (res.status === 200) {
        setSubmitButtonColor("green");
      } else {
        setSubmitButtonColor("red");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">
        Back
      </Link>
      <form onSubmit={handleSubmit}>
        <StyledWrapper>
          <label htmlFor="fname">First name:</label>
          <Input
            type="text"
            name="fname"
            value={userData.fname || ""}
            borderColor={randomColor}
            onChange={handleChange}
            onBlur={randomColorGenerator}
          />
        </StyledWrapper>
        <StyledWrapper>
          <label htmlFor="lname">Last name:</label>
          <Input
            type="text"
            name="lname"
            value={userData.lname || ""}
            borderColor={randomColor}
            onChange={handleChange}
            onBlur={randomColorGenerator}
          />
        </StyledWrapper>

        <StyledWrapper>
          <label htmlFor="email">E-mail:</label>
          <Input
            type="email"
            name="email"
            value={userData.email || ""}
            borderColor={randomColor}
            onChange={handleChange}
            onBlur={randomColorGenerator}
          />
        </StyledWrapper>

        <Submit type="submit" submitButtonColor={submitButtonColor}>
          Submit
        </Submit>
      </form>
    </div>
  );
}

export default Form;
