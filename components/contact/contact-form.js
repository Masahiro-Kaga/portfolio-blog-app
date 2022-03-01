import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ContactForm = () => {
  return (
    <section css={contact}>
      <h1>How can I help you?</h1>
      <form css={form}>
        <div css={controls}>
          <div css={control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div css={control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
        </div>
        <div css={control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>

        <div css={actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

const contact = css`
  margin: 3rem auto;
  border-radius: 10px;
  background-color: var(--color-grey-100);
  width: 90%;
  max-width: 50rem;
  padding: 2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  font-size:1.5rem;
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
    border: 1px solid hsl(265, 4%, 70%);
    resize: none;
  }
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
  button:hover {
    background-color: #0055ff;
    border-color: #0044ff;
  }
`;

const controls = css`
  display: flex;
  column-gap: 1.5rem;
  flex-wrap: wrap;
  margin:2rem 0;
`;

const control = css`
  flex: 1;
  min-width: 10rem;
`;

const actions = css`
  margin-top: 1rem;
  text-align: right;
`;

export default ContactForm;