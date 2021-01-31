import styled from "styled-components";

const CardContainer = styled.div`
  width: 434px;
  height: auto;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 0.5px #d3d3d3 solid;
  border-radius: 16px;
  box-shadow: 2px 2px 6px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding-top: 20px;
  @media (max-width: 434px) {
    width: calc((100%));
  }
`;

export default CardContainer;
