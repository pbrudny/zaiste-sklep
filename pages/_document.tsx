import { Html, Head, Main, NextScript } from 'next/document'
import {Layout} from "../components/Layout";

export default function Document() {
  return (
    <Html>
      <Head lang="pl"/>
      <body className="bg-gray-100 antialiased">
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  )
}
