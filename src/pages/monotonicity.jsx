import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import styled from "styled-components";
import Nav from "../components/nav.jsx";
import Chart from "../components/Chart.png";
import handChart from "../components/handChart.png";

function Monotonicity() {
  return (
    <Home>
      {Nav("monotonicity", "$f(x)=\\frac{x^2 + 4x + 3}{x^2 + x}$")}
      <LatexSegment>
        1. Dziedzina
        <Latex>{"$\\frac{(x+3)(x+1)}{x(x+1)}$"}</Latex>
        <Latex>{"$x \\in \\reals \\backslash \\lbrace -1, 0 \\rbrace$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        2. Miejsca zerowe
        <Latex>{"$x + 3 = 0$"}</Latex>
        <Latex>{"$x = -3$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        3. Przecięcie z osią Y
        <Latex>{"$\\text{dziedzina} \\implies \\text{brak}$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        4. Parzystość
        <Latex>{"$f(x) \\ne f(-x)$"}</Latex>
        <Latex>{"$f(-x) \\ne -f(x)$"}</Latex>
        <Latex>
          {"$\\text{Funkcja nie jest ani parzysta ani nieparzysta}$"}
        </Latex>
      </LatexSegment>
      <LatexSegment>
        5. Granice
        <Latex>{"$\\lim\\limits_{x \\to \\pm \\infin}f(x) = 1$"}</Latex>
        <Latex>{"$\\lim\\limits_{x \\to 0^-}f(x) = -\\infin$"}</Latex>
        <Latex>{"$\\lim\\limits_{x \\to 0^+}f(x) = \\infin$"}</Latex>
        <Latex>{"$\\lim\\limits_{x \\to -1}f(x) = -2$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        6. Asymptoty
        <Latex>{"$\\text{pozioma: y = 1}$"}</Latex>
        <Latex>{"$\\text{pionowa: x = 0}$"}</Latex>
        <Latex>{"$\\text{ukośna: brak}$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        7. Monotoniczność
        <Latex>{"$f'(x)=-\\frac{3}{x^2}$"}</Latex>
        <Latex>{"$f\\searrow(-\\infin,-1),(-1,0),(0,\\infin)$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        8. Ekstrema
        <Latex>{"$\\text{brak}$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        9. Tabelka
        <StyledTable>
          <tr>
            <th>
              <Latex>{"$x$"}</Latex>
            </th>
            <th>
              <Latex>{"$(-\\infin, -1)$"}</Latex>
            </th>
            <th>
              <Latex>{"$-1$"}</Latex>
            </th>
            <th>
              <Latex>{"$(-1, 0)$"}</Latex>
            </th>
            <th>
              <Latex>{"$0$"}</Latex>
            </th>
            <th>
              <Latex>{"$(0, \\infin)$"}</Latex>
            </th>
          </tr>
          <tr>
            <td>
              <Latex>{"$f'(x)$"}</Latex>
            </td>
            <td>
              <Latex>{"$-$"}</Latex>
            </td>
            <td>X</td>
            <td>
              <Latex>{"$-$"}</Latex>
            </td>
            <td>X</td>
            <td>
              <Latex>{"$-$"}</Latex>
            </td>
          </tr>
          <tr>
            <td>
              <Latex>{"$f(x)$"}</Latex>
            </td>
            <td>
              <Latex>{"$\\searrow$"}</Latex>
            </td>
            <td>X</td>
            <td>
              <Latex>{"$\\searrow$"}</Latex>
            </td>
            <td>X</td>
            <td>
              <Latex>{"$\\searrow$"}</Latex>
            </td>
          </tr>
        </StyledTable>
      </LatexSegment>
      <ChartSegment src={Chart} />
      <ChartSegment src={handChart} />
    </Home>
  );
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

const ChartSegment = styled.img`
  border: 1px solid white;
  font-weight: 500;
  margin: 10px auto;
  width: 100%;
  max-width: 600px;
  background-color: #232323;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 22px;
  font-size: 16px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  th,
  td {
    text-align: center;
    border: 1px solid;
    min-width: 25px;
  }
`;

export default Monotonicity;
