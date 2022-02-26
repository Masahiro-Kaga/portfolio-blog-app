import React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Hero = () => {
  return (
    <div css={container}>
      <section css={title}>
        <p>THIS IS ME</p>
        <h1>MASAHIRO KAGA</h1>
        <p>
          You will begin to realise why I am here in Vancouver, Canada.<br></br>
          I am happy to show my precious experience.
        </p>
      </section>
      <section css={image}>
        <Image src={"/images/profile.jpg"} width={300} height={300}></Image>
      </section>
    </div>
  );
};

const container = css`
  font-family: "Dosis", sans-serif;
  text-align: center;
  margin: 4rem auto;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const title = css`
h1{font-size:2rem}
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const image = css`
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 4rem auto;
  border-radius: 30%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 600px) {
    margin: 0;
  }
`;

export default Hero;

//----------------Object description on Emotion css------------------

// const container = css({
//   display: "flex",
//   flexDirection:"row",
//   justifyContent:"space-around",
//   '@media(min-width:420px)':{
//     color: "orange"
//   }
// })

//-----------------Reference of this page-----------------
// https://preview.colorlib.com/#personal
// https://maku.blog/p/fw7gpx7/