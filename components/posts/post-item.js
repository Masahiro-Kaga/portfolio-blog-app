import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { slug, title, image, excerpt, date } = props.post;
  const linkPath = `/posts/${slug}`;
  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleDateString('en-US',{
      day:'numeric',
      month:'long',
      year:'numeric'
  })
  return (
    <li css={feature_list}>
      <Link href={linkPath}>
        <a>
          <figure css={postimage}>
            <Image src={imagePath} width={300} height={200} layout='responsive'></Image>
          </figure>
          <div css={feature_text}>
            <h2>{title}</h2>
            <p>{formattedDate}</p>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

const feature_list = css`
  list-style: none;
  background-color: rgba(130,130,130,0.5);
  border-radius: 10%;
  overflow: hidden;
  a {
      text-decoration: none;
    }
    `;

const postimage = css`
    /* width:100%;
    max-height:20rem; */
    margin:0;
    img{
        object-fit: cover;
    }
    `;

const feature_text = css`
padding:0 2rem;
  color: black;
  h2{
      margin:0.5rem
  }
  h2 + p{
    font-style:italic;
    color:gray;
  }
`;

export default PostItem;
