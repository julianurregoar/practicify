import React, { Fragment, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownText({ text }) {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(text)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => console.log(err));
  });

  return (
    <Fragment>
      <ReactMarkdown>{post}</ReactMarkdown>
    </Fragment>
  );
}
