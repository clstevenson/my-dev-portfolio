import styled from "styled-components";
import { COLORS } from "../util/constants";

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.article`
  padding: 20px;
  margin: 24px 12px;
  border-radius: 12px;
  box-shadow: 2px 4px 8px ${COLORS.gray[700]};
  background-color: ${COLORS.white};
`;
