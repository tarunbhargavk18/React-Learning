import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">{props.time}</div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
