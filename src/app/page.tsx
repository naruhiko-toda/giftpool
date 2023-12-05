import { PostRepository } from "@/app/_repository/postRepository";
import { Post } from "@/app/_type/post";
import { PostCard } from "@components/postCard";
import Link from "next/link";
import React from "react";

const Home = async (): Promise<JSX.Element> => {
  const posts: Post[] = await new PostRepository().getPosts();
  return (
    <>
      <h1>共感しよう</h1>
      {posts.map((post: Post) => (
        <PostCard key={post.id} id={post.id} body={post.body} />
      ))}
      <Link href={"/post/new"}>投稿する</Link>
    </>
  );
};
export default Home;
