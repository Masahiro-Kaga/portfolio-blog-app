import React, { Fragment } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article css={post_content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}></PostHeader>
      <p>{DUMMY_POST.content}</p>
    </article>
  );
};

const post_content = css`
  border: solid rgba(0, 0, 0, 0.1) 1px;
  border-top: solid black 5px;
  border-radius: 10px;
  width: 90%;
  max-width: 50rem;
  margin: 4rem auto;
  padding: 2rem 1rem 2rem;
  box-shadow: 2px 4px rgba(0, 0, 0, 0.1);
  p {
    border-top: solid rgba(0, 0, 0, 0.1) 1px;
    padding-top:2rem
  }
`;

export default PostContent;
