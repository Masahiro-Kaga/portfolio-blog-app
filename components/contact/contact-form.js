import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if(requestStatus === 'Success' || requestStatus === 'Error'){
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 8000);
      return ()=>clearTimeout(timer);
    }
  }, [requestStatus]);
  

  async function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus("Pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "something went wrong!");
      }
      setRequestStatus("Success");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
    } catch (error) {
      setRequestStatus("Error");
    }
  }

  return (
    <section css={contact}>
      <h1>How can I help you?</h1>
      <form css={form} onSubmit={sendMessageHandler}>
        <div css={controls}>
          <div css={control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div css={control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
        </div>
        <div css={control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div css={actions}>
          <p>{requestStatus}</p>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

const contact = css`
  margin: 3rem auto;
  border-radius: 10px;
  width: 90%;
  max-width: 50rem;
  padding: 2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-family: "Dosis", sans-serif;
  h1 {
    font-size: 3rem;
    margin: 1rem 0 3rem;
    text-align: center;
  }
`;

const form = css`
  label {
    display: block;
    font-weight: bold;
    margin: 0.5rem 0 0.25rem 0;
  }
  input,
  textarea {
    font: inherit;
    padding: 0.25rem;
    border-radius: 10px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    resize: none;
  }
  button:hover {
    background-color: #0055ff;
    border-color: #0044ff;
  }
`;

const controls = css`
  display: flex;
  column-gap: 1.5rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const control = css`
  flex: 1;
  min-width: 10rem;
`;

const actions = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 100%;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #007bff;
    border: 1px solid #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  p {
    margin: auto 0;
    animation: fadeinout 1s infinite alternate;
    @keyframes fadeinout {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default ContactForm;
