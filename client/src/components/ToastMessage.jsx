import styled from "styled-components";
import * as Toast from "@radix-ui/react-toast";
import { COLORS } from "../util/constants";

const ToastMessage = ({
  duration = 3000,
  title = "",
  message,
  toastCloseEffect,
}) => {
  const closeHandler = () => {
    if (!open) toastCloseEffect();
  };

  return (
    <Toast.Provider>
      <ToastRoot duration={duration} onOpenChange={toastCloseEffect}>
        {title && <Toast.Title> {title} </Toast.Title>}
        <Toast.Description>{message}</Toast.Description>
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  );
};

const ToastViewport = styled(Toast.Viewport)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 24px;
  list-style: none;
`;

const ToastRoot = styled(Toast.Root)`
  display: block;
  background-color: ${COLORS.primary_light};
  color: ${COLORS.white};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 2px 4px 8px ${COLORS.gray[700]};
  border: 1px solid black;
  font-size: 1.2rem;
`;

export default ToastMessage;
