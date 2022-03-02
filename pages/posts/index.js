import Head from 'next/head'
import React, { Fragment } from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming-related skills which I learned and adapted on my project.'></meta>
      </Head>
      <AllPosts posts={props.posts}></AllPosts>
    </Fragment>
    
  )
}

export function getStaticProps(){
  const allPosts = getAllPosts();
  return {
    props:{
      posts:allPosts
    }
  }
}

export default AllPostsPage