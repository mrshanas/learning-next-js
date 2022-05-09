import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return {
    paths: data.map((post: any) => ({
      params: {
        postId: `${post.id}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params = {} } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};

interface Props {
  post: any;
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>
        <small>{post.id}</small> {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
