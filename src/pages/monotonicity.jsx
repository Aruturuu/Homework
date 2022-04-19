import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import styled from "styled-components";
import Nav from "../components/nav.jsx";

function Monotonicity() {
  return <Home>{Nav("monotonicity")}</Home>;
}

const Home = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
`;

const Title = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 20px;
  font-weight: bold;
`;

const LatexSegment = styled.div`
  border: 1px solid white;
  font-weight: 500;
  margin: 10px auto;
  width: 100%;
  max-width: 500px;
  background-color: #232323;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 22px;
  font-size: 16px;
`;

export default Monotonicity;
