"use client";
import { ReactNode } from "react";
import ForumLayout from "../../layout";
import PostForm from "../../_components/PostForm";

const View = () => {
  return (
    <>
      <div className="create-post-container">
        <h1 className="create-post-title">View Blog Post</h1>
        <PostForm />
      </div>
    </>
  );
};

View.getLayout = function getLayout(page: ReactNode) {
  return <ForumLayout>{page}</ForumLayout>;
};

export default View;
