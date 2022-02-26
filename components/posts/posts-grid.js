import React, { Fragment } from "react";
import PostItem from "./post-item";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeaturedPosts from "../home-page/featured-posts";

const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <ul css={feature_unorder}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post}></PostItem>
        ))}
      </ul>
    </Fragment>
  );
};

const feature_unorder = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    padding: 0;
    gap: 1.5rem;
`

export default PostsGrid;
