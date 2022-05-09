import type { NextPage, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

interface Props {
  data: any;
}

const Posts: NextPage<Props> = ({ data }) => {
  return (
    <>
      <h1>Posts</h1>
      {data.map((post: any) => (
        <div key={post.id}>
          <h2>
            <small>{post.id}</small> {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
