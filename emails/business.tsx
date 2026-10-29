import {
  Button,
  Html,
  Head,
  Body,
  Container,
  Row,
  Column,
  Img,
  Heading,
  Text,
  Link,
  Preview,
  Markdown,
  Tailwind,
} from "react-email";
import clsx from "clsx";
import { ReactNode } from "react";
import { previewData } from "@/preview/preview";
import { LinkProps, EmailProps } from "@/types/types";

function LinkRow({ href, text, img, alt }: LinkProps) {
  return (
    <Button
      href={href}
      className={clsx(
        "w-full min-w-fit my-1 text-right text-sm text-nowrap text-purple-white light:text-purple-white dark:text-purple-white p-0 m-0",
      )}
    >
      <Row cellSpacing={4} className="h-fit w-full">
        <Column>
          <Text className="block h-fit min-w-fit w-full text-nowrap m-0 p-0">
            {text}
          </Text>
        </Column>
        <Column>
          <Img src={img} width="14" height="14" alt={alt} className="my-auto" />
        </Column>
      </Row>
    </Button>
  );
}

function LinkColumn(props: EmailProps) {
  const links = props.links ?? previewData.links;

  if (links.length == 0) {
    return <></>;
  }

  return (
    <Column className="h-fit">
      {links.map((link, _) => (
        <LinkRow {...link} />
      ))}
    </Column>
  );
}

function Header(props: EmailProps) {
  const name = props.name ?? previewData.name;
  const info = props.info ?? previewData.info;

  return (
    <Container
      className={clsx(
        "w-full rounded-2xl border-2 border-purple-white/40 light:border-purple-white/40 dark:border-purple-white/40 max-w-2xl",
        "mx-auto my-3 px-2 text-purple-white light:text-purple-white dark:text-purple-white",
        "bg-purple-black light:bg-purple-black dark:bg-purple-black font-serif",
      )}
    >
      <Row cellSpacing={2}>
        <Column>
          <Heading className="m-0 p-0">{name}</Heading>
          {info.map((item, _) => (
            <Text className="m-0 p-0">{item}</Text>
          ))}
        </Column>
        <LinkColumn {...props} />
      </Row>
    </Container>
  );
}
function Content(props: EmailProps) {
  const content = props.content ?? previewData.content;

  return (
    <Container
      className={clsx(
        "w-full max-w-2xl min-h-full border-2 rounded-xl",
        "border-purple-black light:border-purple-black dark:border-purple-black",
        "bg-purple-bright text-purple-black mx-auto my-3 px-3",
      )}
    >
      <Markdown
        markdownContainerStyles={{ padding: 0 }}
        markdownCustomStyles={{
          h1: {
            marginBlock: 2,
          },
          h2: {
            marginBlock: 2,
          },
          h3: {
            marginBlock: 2,
          },
          h4: {
            marginBlock: 2,
          },
          h5: {
            marginBlock: 2,
          },
          h6: {
            marginBlock: 0,
          },
          p: {
            marginBlock: 2,
          },
        }}
      >
        {content}
      </Markdown>
    </Container>
  );
}

function PicLink({ href, img, alt }: LinkProps) {
  return (
    <Link href={href} className="h-fit p-0 m-0">
      <Img src={img} alt={alt} width={16} height={16} />
    </Link>
  );
}

function Footer(props: EmailProps) {
  const copyright = props.copyright ?? previewData.copyright;

  const pictureLinks = props.pictureLinks ?? [
    previewData.links[1],
    previewData.links[2],
    previewData.links[3],
  ];

  return (
    <Container className="p-0 font-serif">
      <Row className="w-fit p-0 my-2" cellSpacing={12}>
        {pictureLinks.map((link, _) => (
          <Column>
            <PicLink {...link} />
          </Column>
        ))}
        <Column>
          <Text className="block text-purple-white/50 light:text-purple-white/50 dark:text-purple-white/50 m-0">
            © {copyright}
          </Text>
        </Column>
      </Row>
    </Container>
  );
}
export default function BusinessEmail(props: EmailProps): ReactNode {
  const preview = props.previewText ?? previewData.preview;
  const title = props.title ?? previewData.title;
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "purple-white": "#f8f2ff",
                "purple-dark": "#190924",
                "purple-black": "#0e0518",
                "purple-bright": "#F1FAE7",
              },
            },
          },
        }}
      >
        <Head>
          <title>{title}</title>
          <style>{`:root { color-scheme: light dark; }`}</style>
        </Head>
        <Body className="mx-auto my-auto bg-purple-dark light:bg-purple-dark dark:bg-purple-dark font-sans">
          <Preview>{preview}</Preview>
          <Header {...props} />
          <Content {...props} />
          <Footer {...props} />
        </Body>
      </Tailwind>
    </Html>
  );
}
