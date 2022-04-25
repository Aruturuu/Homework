import { Link } from "react-router-dom";
import styled from "styled-components";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

function Nav(active, text) {
  return (
    <Wrapper>
      {active === "monotonicity" ? (
        <Buttons>
          <DisabledLink to="/monotonicity">Monotonicity</DisabledLink>
          <ActiveLink to="/trigonometry">Trigonometry</ActiveLink>
        </Buttons>
      ) : (
        <Buttons>
          <ActiveLink to="/monotonicity">Monotonicity</ActiveLink>
          <DisabledLink to="/trigonometry">Trigonometry</DisabledLink>
        </Buttons>
      )}
      <Latex>{text}</Latex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid white;
  background-color: #232323;
  position: sticky;
  top: 10px;
  margin: 10px auto;
  border-radius: 5px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  padding: 0 0 5px 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActiveLink = styled(Link)`
  width: 50%;
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
  background-color: #323232;
  pointer-events: none;
`;

export default Nav;
