import Head from 'next/head'

export default ({
  children,
  title = 'My super title'
}: { children: any, title?: string }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    { children }

    <footer>
      {'Your Company'}
    </footer>
  </div>
)