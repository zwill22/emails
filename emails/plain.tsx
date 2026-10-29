import { Html, Head, Body, Container, Preview, Markdown } from "react-email";
import * as React from "react";
import { previewData } from "../preview/preview";
import { EmailProps } from "../types/types";

function Content(props: EmailProps) {
  const content = props.content ?? previewData.content!;

  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
}

export default function PlainEmail(props: EmailProps): React.ReactNode {
  const preview = props.previewText ?? previewData.previewText!;
  const title = props.title ?? previewData.title;

  return (
    <Html>
      <Head>
        <title>{title}</title>
      </Head>
      <Body>
        <Preview>{preview}</Preview>
        <Content {...props} />
      </Body>
    </Html>
  );
}
