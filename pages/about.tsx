import Head from "next/head";

import Test from "../components/test";

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/node_modules/quill/dist/quill.core.css" rel="stylesheet" />
      <link href="/node_modules/quill/dist/quill.bubble.css" rel="stylesheet" />
      <link href="/node_modules/quill/dist/quill.snow.css" rel="stylesheet" />
    </Head>
    <Test></Test>
  </div>
)