import React from "react";
import { MarkdownText } from "../../components";
import terms from "./terms.md";
import { Container } from "reactstrap";

export default function Terms() {
  return (
    <div>
      <br />
      <div className='section mr4 '>
        <Container>
          <MarkdownText text={terms} title={"Terms of Service"} />
        </Container>
      </div>
    </div>
  );
}
