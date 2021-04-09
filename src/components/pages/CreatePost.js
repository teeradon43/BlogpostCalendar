import React, { Component } from "react";
import { firestore } from "../modules/firebase";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    place: "",
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    firestore.collection("posts").add({
      ...this.state,
      createdAt: new Date(),
    });
  };

  render() {
    const { title, content, place } = this.state;
    return (
      <div>
        <h1>CreatePost</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Post Title</label>
            <input
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <div>
            <label>Place</label>
            <input
              value={place}
              onChange={(e) => this.setState({ place: e.target.value })}
            />
          </div>
          <button>Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
