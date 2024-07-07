import styled, { keyframes } from "styled-components";
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

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const appear = keyframes`
  from { transform: translateX(calc(100% + var(--viewport-padding)));}
  to { transform: translateX(0);}
`;

const ToastViewport = styled(Toast.Viewport)`
  --viewport-padding: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: var(--viewport-padding);
  list-style: none;
  overflow: hidden;
  z-index: 100;
`;

const ToastRoot = styled(Toast.Root)`
  display: block;
  background-color: ${COLORS.primary_light};
  color: ${COLORS.white};
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 2px 4px 8px ${COLORS.gray[700]};
  border: 1px solid black;
  font-size: 1.2rem;

  &[data-state="open"] {
    animation: ${appear} 200ms;
  }

  &[data-state="closed"] {
    animation: ${fade} 200ms ease-in;
  }
`;

export default ToastMessage;
