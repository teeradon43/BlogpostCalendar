import React, { Component } from "react";
import { firestore } from "../modules/firebase";

class PostDetails extends Component {
  state = {
    posts: {},
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    firestore
      .collection("posts")
      .doc(params.postId)
      .get()
      .then((snapshot) => {
        this.setState({
          post: snapshot.data(),
        });
      });
  }
  render() {
    const { post } = this.state;
    let head, content;
    if (post) {
      head = <>{post.title}</>;
      content = <>{post.content}</>;
    }
    console.log(post);
    return (
      <div className="post-detail">
        <h1>{head}</h1>

        <p>{content}</p>
      </div>
    );
  }
}

export default PostDetails;
