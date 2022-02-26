import Image from "next/image";
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header css={header}>
      <h1>{title}</h1>
      <figure css={image_box}>
        <Image src={image} width={3} height={2} layout="responsive"></Image>
      </figure>
    </header>
  );
};

const header = css`
  h1 {
    text-align: center;
    font-family: "Dosis", sans-serif;
  }
  @media (min-width: 600px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1{
          font-size: 300%;
          text-align:left;
      }
  }
`;

const image_box = css`
  @media (min-width: 600px) {
      width: 30%;
  }
`;

export default PostHeader;
