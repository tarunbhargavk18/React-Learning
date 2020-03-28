import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalBox from "./ApprovalBox";
import faker from "faker";

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalBox>Are you sure?</ApprovalBox>
      <ApprovalBox>
        <CommentDetail author="John" content="Nice" time="Today" />
      </ApprovalBox>
      <CommentDetail author="Matt" content="Good" time="Yesterday" />
      <CommentDetail author="Clarke" content="Great" time="Just Now" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
