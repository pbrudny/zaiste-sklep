import Link from "next/link";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../utils";
import {NextRouter, useRouter} from "next/router";

const isExternalURL = (url: string, router: NextRouter) =>{
  console.log('router: ', router);
  console.log('origin: ',(new URL(url).origin) );
  return new URL(url).origin !== router?.pathname;
}

const ZaisteReactMarkdown = ({ children }: { children: MarkdownResult }) => {
  const router = useRouter();

  return <MDXRemote
    {...children}
    components={{
    a:({href, ...props}) => {
      if (!href) {
        return <a {...props}></a>
      }

      if (isExternalURL(href, router)) {
        return <a {...props} rel="noopener noreferrer"></a>
      }

      return <Link href={href}>
        <a {...props}></a>
      </Link>
    }}}
  />;
}

export default ZaisteReactMarkdown;
