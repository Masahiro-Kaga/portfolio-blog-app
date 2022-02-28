
import ReactMarkdown from "react-markdown";
import React, { Fragment } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostHeader from "./post-header";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article css={post_content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{post.content}</ReactMarkdown>
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
