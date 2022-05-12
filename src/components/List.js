import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// styles
const StyleSelect = styled.select`
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
`;

const StyledWrapper = styled.div`
  margin-bottom: 12px;
  padding: 4px 12px;
  border: 1px solid #f66b0e;
`;

function List() {
  // state
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("active");

  // make a fetch request on status change
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`/users/?status=${status}`).then((res) =>
          res.json()
        );
        setUsers(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, [status]);

  return (
    <div>
      <Link to="/" className="back-button">
        Back
      </Link>
      <StyleSelect onChange={(event) => setStatus(event.target.value)}>
        <option defaultValue value="active">
          Active
        </option>
        <option value="inactive">Inactive</option>
      </StyleSelect>
      <div>
        {users.map((user) => (
          <StyledWrapper key={user.email}>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Status: {user.status}</div>
          </StyledWrapper>
        ))}
      </div>
    </div>
  );
}

export default List;
