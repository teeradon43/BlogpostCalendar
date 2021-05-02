import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../modules/firebase";

class Home extends Component {
  state = { posts: [] };
  componentDidMount() {
    firestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        this.setState({
          posts,
        });
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="home">
        <h1>BlogPost Calendar</h1>
        {posts.map((post) => (
          <div className="post">
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post["content"]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
