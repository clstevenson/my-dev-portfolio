/* 
 A spinning circle meant to convey "busy." It will display in the middle of the viewport.
 It is up to the dev to tie the display of this component to some state.

 Adapted from JWC's CSS Course.
 */
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <Image alt="Busy..." src="./assets/loader.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 50%;
  padding: 1px;
  z-index: 999;

  /* backdrop doesn't seem to work... */
  /* &::backdrop {
    background-color: grey;
  } */
`;

const spinning = keyframes`
  from {transform: rotate(0turn)};
  to {transform: rotate(1turn);}
`;

const Image = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  animation: ${spinning} 1000ms linear infinite;
`;

export default Spinner;
