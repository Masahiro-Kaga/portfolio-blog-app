import React from "react";
import PostsGrid from "./posts-grid";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const AllPosts = (props) => {
  return (
    <section css={all_posts}>
      <h2 >AllPosts</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
};

const all_posts = css`
    margin: 4rem auto;
    text-align: center;
    width:90%;
    font-family: "Dosis", sans-serif;
    > h2{
        font-size:2.5rem
    }
`

export default AllPosts;
