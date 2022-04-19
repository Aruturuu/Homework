import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav(active) {
  return (
    <Wrapper>
      {active === "monotonicity" ? (
        <>
          <DisabledLink to="/monotonicity">Monotonicity</DisabledLink>
          <ActiveLink to="/trigonometry">Trigonometry</ActiveLink>
        </>
      ) : (
        <>
          <ActiveLink to="/monotonicity">Monotonicity</ActiveLink>
          <DisabledLink to="/trigonometry">Trigonometry</DisabledLink>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #232323;
  padding: 10px 0px;
  margin: 10px auto;
  border-radius: 5px;
`;

const ActiveLink = styled(Link)`
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 16px;
  margin: 5px;
  color: white;
  background-color: #232323;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
`;
const DisabledLink = styled(ActiveLink)`
  border: 1px solid white;
  pointer-events: none;
`;

export default Nav;
