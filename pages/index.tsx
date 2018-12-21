import Link from "next/link";

import Layout from "../components/layout";

export default () => (
  <Layout>
    Click{" "}
    <Link href="/about">
      <a>here</a>
    </Link>{" "}
    to read more
  </Layout>
);
