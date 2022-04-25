import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import styled from "styled-components";
import Nav from "../components/nav.jsx";

function Trigonometry() {
  return (
    <Home>
      {Nav("trigonometry", "$\\cos x + \\sin x = 0$")}
      <LatexSegment>
        Sposób 1.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\sin^2 x + \\cos^2 x + 2\\sin x \\cos x = 0$"}</Latex>
        <Latex>{"$1 + \\sin 2x = 0$"}</Latex>
        <Latex>{"$\\sin 2x = -1$"}</Latex>
        <Latex>{"$2x = -\\frac{\\pi}{2} + 2k\\pi$"}</Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        Sposób 2.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\cos x = -\\sin x$"}</Latex>
        <Latex>{"$\\sin(\\frac{\\pi}{2}-x) = \\sin -x$"}</Latex>
        <Latex>
          {
            "$\\frac{\\pi}{2}-x = -x + 2k\\pi$ $\\lor \\newline$ $\\frac{\\pi}{2}-x = \\pi + x + 2k\\pi$ $\\lor \\newline$ $-x = \\pi - \\frac{\\pi}{2} + x + 2k\\pi$"
          }
        </Latex>
        <Latex>
          {
            "$\\frac{\\pi}{2} = 2k\\pi$ sprzeczne $\\lor \\newline$ $-2x = \\frac{\\pi}{2} + 2k\\pi$ $\\lor \\newline$ $-2x = \\frac{\\pi}{2} + 2k\\pi$"
          }
        </Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        Sposób 3.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\cos x + \\cos (\\frac{\\pi}{2} - x) = 0$"}</Latex>
        <Latex>
          {"$2 \\cos (\\frac{\\pi}{4}) \\cos (x - \\frac{\\pi}{4}) = 0$"}
        </Latex>
        <Latex>{"$x - \\frac{\\pi}{4} = -\\frac{\\pi}{2} + k\\pi$"}</Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        Sposób 4.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\cos x = -\\sin x$ $/\\cos x; \\cos x \\not = 0$"}</Latex>
        <Latex>{"$-\\tan x = 1$"}</Latex>
        <Latex>{"$\\tan x = -1$"}</Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        Sposób 5.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\cos x = -\\sin x $"}</Latex>
        <Latex>{"$\\cos x = \\cos(\\frac{\\pi}{2} + x)$"}</Latex>
        <Latex>
          {
            "$x = \\frac{\\pi}{2} + x + 2k\\pi$ $\\lor$ $x = -\\frac{\\pi}{2} -x + 2k\\pi$"
          }
        </Latex>
        <Latex>
          {
            "$0 = \\frac{\\pi}{2} + 2k\\pi$ sprzeczne $\\lor$ $2x = -\\frac{\\pi}{2} + 2k\\pi$"
          }
        </Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>
        Sposób 6.
        <Latex>{"$\\cos x + \\sin x = 0$"}</Latex>
        <Latex>{"$\\sin x = -\\cos x$ $/\\sin x; \\sin x \\not = 0$"}</Latex>
        <Latex>{"$-\\cot x = 1$"}</Latex>
        <Latex>{"$\\cot x = -1$"}</Latex>
        <Latex>{"$x = -\\frac{\\pi}{4} + k\\pi$"}</Latex>
      </LatexSegment>
      <LatexSegment>Sposób 7. Wyczytaj z wykresu</LatexSegment>
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

export default Trigonometry;
