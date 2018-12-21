import Head from 'next/head'

export default ({
  children,
  title = 'Gios Blog'
}: { children: any, title?: string }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="/static/quill-styles-v1.3.6/quill.core.css" rel="stylesheet" />
      <link href="/static/quill-styles-v1.3.6/quill.bubble.css" rel="stylesheet" />
      <link href="/static/quill-styles-v1.3.6/quill.snow.css" rel="stylesheet" />
    </Head>

    { children }

    <footer>
      {'Gios Entertainment'}
    </footer>
  </div>
)