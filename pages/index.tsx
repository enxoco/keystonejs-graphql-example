import React from 'react'
import { GetStaticPropsContext } from 'next';

import { fetchGraphQL, gql} from '../utils'
  
export default function Index({posts}: any) {
    return (
        <>
        <h1>Posts</h1>
        <ul>
        {posts.map(post => (
            <li>{post.title}</li>
        ))
        }
        </ul>
        </>
    )
}

export async function getStaticProps() {
  const data = await fetchGraphQL(
    gql`
      query {
        posts {
          id
          title
        }
      }
    `,
  );

  return { props: { posts: data.posts }, revalidate: 60 };
}