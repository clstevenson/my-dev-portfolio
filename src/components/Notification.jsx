// Error component displays a notification message
// (if input field is empty or email is invalid)
import styled from "styled-components";
import { COLORS } from "../util/constants";

export default function Notification({ message }) {
  return (
    <Wrapper>
      <ErrorMessage> {message} </ErrorMessage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${COLORS.urgent};
  border-radius: 4px;
  margin: 16px 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.25em;
  color: ${COLORS.white};
  padding: 4px 16px;
`;
