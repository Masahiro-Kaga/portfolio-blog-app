import React from "react";
import Link from "next/link";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MainNavigation = () => {
  return (
    <header css={header}>
      <Link href="/">
        <a style={{ textDecoration: "none", color: "black" }}>
          <div css={logo_container}>
            <figure>
              <Image
                src="/images/onlyLogo.png"
                width={500}
                height={500}
              ></Image>
            </figure>
            <div>
              <h2>Masa's Blog</h2>
              <p>Look back my day!</p>
            </div>
          </div>
        </a>
      </Link>
      <nav css={right_nav}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const header = css`
  font-family: "Dosis", sans-serif;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logo_container = css`
  height: 100%;
  display: flex;
  align-items: center;
  figure {
    width: 50px;
    height: 50px;
    margin: auto 20px;
  }
  div {
    display: none;
    height: 100%;
  }
  @media (min-width: 600px) {
    div {
      display: block;
      text-align: center;
      h2,
      p {
        margin: 0;
      }
    }
  }
`;

const right_nav = css`
  ul {
    margin-right: 10px;
    display: flex;
    list-style: none;
    li {
        margin: auto 10px;
      a {
        color: black;
        text-decoration: none;
        font-size:1.5rem;
      }
    }
  }
`;

export default MainNavigation;
