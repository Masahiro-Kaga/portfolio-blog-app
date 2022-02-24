import React from "react";
import Image from 'next/image';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Hero = () => {
  return (
    <div css={container}>
      <section>
        <h1>kaga</h1>
      </section>
      <section>
        <Image src={"/images/profile.jpg"} width={300} height={300}></Image>
      </section>
    </div>
  );
};

const container = css({
  display: "flex",
  flexDirection:"row",
  justifyContent:"space-around",
  '@media(min-width:420px)':{
    color: "orange"
  }

})

// const container = css`
//   display: flex;
//   flex-direction: row;
// `

export default Hero;
