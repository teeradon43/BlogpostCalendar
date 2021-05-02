import { firestore } from "../modules/firebase";
import { useState } from "react";

const Search = (params) => {
  var events = [];
  const [filterEvent, setEvent] = useState([]);

  firestore
    .collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });
      console.log("fetched!");
      console.log("events =", events);
    });

  function handleChange(e) {
    e.preventDefault();
    setEvent([]); //clear event
    var pattern = e.target.value.toLowerCase();
    // console.log(pattern);
    events.forEach((post) => {
      var title = post.title.toLowerCase();
      var content = post.content.toLowerCase();
      console.log(pattern, "->", content);
      if (content.includes(pattern) || title.includes(pattern)) {
        setEvent((filterEvent) => [...filterEvent, post]);
      }
    });
  }

  return (
    <div>
      <h1>Search Component</h1>
      <div className="search-form">
        <form>
          <h3>Evnter text here</h3>
          <input
            type="text"
            name="input"
            placeholder="search"
            value={onchange}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="search-result">
        {filterEvent.map((post) => (
          <div className="post">
            <h3>{post.title}</h3>

            <p>{post["content"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
