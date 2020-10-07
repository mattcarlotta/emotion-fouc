import { Fragment } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const UserName = styled.div`
  font-size: 40px;
  color: red;
`;

const Email = styled.p`
  color: blue;
`;

const Home = ({ users }) => (
  <div style={{ padding: 20 }}>
    {users.map(({ id, username, email }) => (
      <Fragment key={id}>
        <UserName>{username}</UserName>
        <Email>{email}</Email>
      </Fragment>
    ))}
  </div>
);

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;

  return {
    props: { users },
    revalidate: 1,
  };
};

export default Home;
