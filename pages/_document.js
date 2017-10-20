import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import * as GlobalStyles from '../common/global-styles';

export default class WebDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Glossary of Typography Terms</title>
          <meta
            name="description"
            content="An example of an Expo + NextJS codebase that shares files to render a list of tyographic terms."
          />
          <style dangerouslySetInnerHTML={{ __html: GlobalStyles.reset }} />
          <style
            data-glamor
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="sourceApp" content="mobileWeb" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
