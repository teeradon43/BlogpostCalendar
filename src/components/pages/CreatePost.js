import React, { Component } from "react";

class CreatePost extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>CreatePost</h1>

        <form>
          <div>
            <label>Post Title</label>
            <input />
          </div>
          <div>
            <label>Content</label>
            <input />
          </div>
          <div>
            <label>Place</label>
            <input />
          </div>
          <button>Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
