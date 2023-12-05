import { PostForm } from "@components/postForm";
import React, { Suspense } from "react";

const PostNew = () => {
  return (
    <>
      <h1>投稿画面</h1>
      <Suspense>
        <PostForm />
      </Suspense>
    </>
  );
};
export default PostNew;
