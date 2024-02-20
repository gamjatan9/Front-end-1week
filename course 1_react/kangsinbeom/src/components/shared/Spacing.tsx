import styled from "styled-components";

interface SpacingProps {
  backgroundColor?: string;
  size: number;
  direction?: "vertical" | "horizontal";
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical" ? `height: ${size}px;` : `width: ${size}px;`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;
export default Spacing;
