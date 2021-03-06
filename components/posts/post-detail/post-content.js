/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostHeader from './post-header';
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('js', js);

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
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js =>need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
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
