import styled from "styled-components";
import { width, space, color, height } from "styled-system";

const Box = styled.div(
  [],
  {
    flex: "none"
  },
  props => props.css,
  width,
  space,
  color,
  height
);

export default Box;
