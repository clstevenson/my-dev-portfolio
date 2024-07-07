/*
 * Contact Me form for users to send me an email, with some validation of inputs
 */

import { useState } from "react";
import styled from "styled-components";
import * as Label from "@radix-ui/react-label";
import axios from "axios";

import { COLORS, WEIGHTS } from "../util/constants";
import Notify from "../components/Notification";
import Card from "../components/Card";
import PushButton from "../components/PushButton";
import { Title } from "../components/MyStyles";
import ToastMessage from "../components/ToastMessage";
import Spinner from "../components/Spinner";

export default function Contact() {
  // states and setters
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // options for mail status: none, pending, sent
  const [mailStatus, setMailStatus] = useState("none");

  // email validation; this is the regex the HTML form uses for validation
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const handleSubmit = (e) => {
    // prevent re-render; but validate inputs
    e.preventDefault();

    setMailStatus("pending");

    // send email data to server
    // need to have some indicator of send progress
    axios
      .post("/api/mail", {
        name: name,
        address: email,
        message: message,
      })
      .then((res) => {
        // need to replace line below with a Toast
        setMailStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log({ err });
        setError(`Error: ${err}`);
      });
  };

  // function called when Toast is dismissed
  const toastCloseEffect = () => {
    setMailStatus("none");
  };

  // each input form is tied to React (the value displays the state, onChange updates state)
  return (
    <Wrapper>
      <Card>
        <Title>Contact Me</Title>

        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <NameWrapper>
              <Label.Root htmlFor="name-field">Your name:</Label.Root>
              <Input
                type="text"
                required
                id="name-field"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  /* once user enters data, get rid of any notifications */
                  if (e.target.value) setError("");
                }}
                onBlur={() => {
                  if (name === "") setError("Name cannot be empty");
                }}
              />
            </NameWrapper>

            <EmailWrapper>
              <Label.Root htmlFor="email-field">Your email:</Label.Root>
              <Input
                type="email"
                required
                id="email-field"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  /* once user enters data, get rid of any notifications */
                  if (e.target.value) setError("");
                }}
                onBlur={() => {
                  if (email === "") setError("Email cannot be empty");
                  else if (!emailRegex.test(email))
                    setError("Please enter valid email address");
                }}
              />
            </EmailWrapper>
          </InputWrapper>

          <MessageWrapper>
            <Label.Root htmlFor="message-field">Message:</Label.Root>
            <Message
              required
              id="message-field"
              rows="15"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                /* once user enters data, get rid of any notifications */
                if (e.target.value) setError("");
              }}
              onBlur={() => {
                if (message === "") setError("Message cannot be empty.");
              }}
            ></Message>
          </MessageWrapper>

          {/* display error notification when triggered */}
          {error && <Notify message={error} />}

          {/* temporary message displaying success of mail send */}
          {mailStatus === "sent" && (
            <ToastMessage
              message="Success! Email has been sent"
              toastCloseEffect={toastCloseEffect}
            />
          )}

          {/* display spinner while email is sending */}
          {mailStatus === "pending" && <Spinner />}

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: min(var(--max-prose-width), 100%);
  margin: 24px auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
  padding: 16px 0;
`;

const NameWrapper = styled.div`
  display: flex;
  flex: 1 1 200px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const EmailWrapper = styled.div`
  display: flex;
  flex: 1 1 260px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid ${COLORS.gray[700]};
`;

const MessageWrapper = styled(InputWrapper)`
  flex-direction: column;
`;

const Message = styled.textarea`
  padding: 8px;
  min-width: 100%;
  max-width: 100%;
`;

const Button = styled(PushButton)`
  display: block;
  margin: 0 auto;
  font-weight: ${WEIGHTS.medium};
`;
