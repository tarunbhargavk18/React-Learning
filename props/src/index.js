import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

import faker from "faker";

const App = () => {
  return (
    <div className="ui comments">
      <CommentDetail author = "John" content="Nice" time="Today"/>
      <CommentDetail author="Matt" content="Good" time="Yesterday" />
      <CommentDetail author="Clarke" content="Great" time="Just Now"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
