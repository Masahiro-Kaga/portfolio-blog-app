/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div css={markdown_image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={500}
              height={300}
              // layout={"responsive"}
              // objectFit="cover"
              objectFit="contain"
              />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article css={post_content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <section css={markdown}>
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </section>
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
    padding-top: 2rem;
  }
`;

const markdown = css`
  margin: auto 1rem;
  h1 {
    text-align: center;
    font-size: 30px;
  }
`;

const markdown_image = css`
  text-align: center;
`

export default PostContent;
