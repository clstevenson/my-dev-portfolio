/* 
 A spinning circle meant to convey "busy." It will display in the middle of the viewport.

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
  padding: 2px;
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
