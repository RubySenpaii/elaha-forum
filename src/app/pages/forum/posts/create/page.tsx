"use client";
import { ReactNode } from "react";
import ForumLayout from "../../layout";

const handleCreateForum = () => {};

const doSomething = () => {};

const Create = () => {
  return (
    <>
      <div className="create-post-container">
        <h1 className="create-post-title">Create New Blog Post</h1>

        <form className="create-post-form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter post title"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your post content here..."
              required
              className="form-control"
            ></textarea>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              onClick={handleCreateForum}
            >
              Publish Post
            </button>
            <button type="button" className="cancel-btn" onClick={doSomething}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Create.getLayout = function getLayout(page: ReactNode) {
  return <ForumLayout>{page}</ForumLayout>;
};

export default Create;
