"use client";
import { ReactNode } from "react";
import ForumLayout from "../../layout";
import PostForm from "../../_components/PostForm";

const Edit = () => {
  return (
    <>
      <div className="create-post-container">
        <h1 className="create-post-title">Edit Blog Post</h1>
        <PostForm />
      </div>
    </>
  );
};

Edit.getLayout = function getLayout(page: ReactNode) {
  return <ForumLayout>{page}</ForumLayout>;
};

export default Edit;
