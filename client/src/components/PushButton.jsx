/* 
This is a 3D button adapted from Josh W Comeau:
https://www.joshwcomeau.com/animation/3d-button/
*/
import styled from "styled-components";
import { COLORS } from "../util/constants";

export default function PushButton({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Shadow></Shadow>
      <Front>{children}</Front>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }
  /* don't show the outline when clicking w/ a pointer device */
  /* doesn't seem to have an effect... */
  /* &:focus:not(:focus-visible) {
    outline: none;
  } */
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: ${COLORS.gray[300]};
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Wrapper}:hover & {
    transform: translateY(2px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Wrapper}:active & {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: ${COLORS.white};
  background: ${COLORS.secondary};
  will-change: transform;
  transform: translateY(-2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Wrapper}:hover & {
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Wrapper}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`;
