/* eslint-disable linebreak-style */
import { createGetInitialProps, ServerStyles, createStylesServer } from '@mantine/next';
import Document, { DocumentContext } from 'next/document';

const getInitialProps = createGetInitialProps();
const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx);

    return {
...initialProps,
styles: [
  ...initialProps.styles,
  <ServerStyles html={initialProps.html} server={stylesServer} key="server-styles" />,
]
    };
  }
  }
