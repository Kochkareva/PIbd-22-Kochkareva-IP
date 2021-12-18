import React from "react";

interface comment {
  text: any;
  name: any;
  avatarUrl: any;
}

function Comment(props: comment) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.avatarUrl} alt={props.name} />
        <div className="UserInfo-name">{props.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}
export default Comment;
