import styled from "styled-components";

const CardContainer = styled.div`
  width: calc((100% / 2) - 6vw);
  height: auto;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 0.5px #d3d3d3 solid;
  border-radius: 16px;
  box-shadow: 2px 2px 6px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  @media (min-width: 1280px) {
    width: 535.6px;
  }
  @media (max-width: 768px) {
    width: calc((100%));
  }
`;

export default CardContainer;
