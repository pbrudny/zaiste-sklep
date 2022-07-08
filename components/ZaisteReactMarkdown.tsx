import Link from "next/link";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../utils";

const isExternalURL = (url: string) => {
  return url[0] !== '/';
}

const ZaisteReactMarkdown = ({children}: { children: MarkdownResult }) => {
  return <MDXRemote
    {...children}
    components={{
      a: ({href, ...props}) => {
        if (!href) {
          return <a {...props}/>
        }

        if (isExternalURL(href)) {
          return <a {...props} href={href} rel={"noopener noreferrer"}/>
        }

        return <Link href={href}>
          <a {...props}/>
        </Link>
      }
    }}
  />;
}

export default ZaisteReactMarkdown;
