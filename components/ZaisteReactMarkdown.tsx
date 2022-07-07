import Link from "next/link";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../utils";

const isExternalURL = (url:string) => new URL(url).origin !== location.origin;

const ZaisteReactMarkdown = ({ children }: { children: MarkdownResult }) => {
  return <MDXRemote
    {...children}
    components={{
    a:({href, ...props}) => {
      if (!href) {
        return <a {...props}></a>
      }

      if (isExternalURL(href)) {
        return <a {...props} rel="noopener noreferrer"></a>
      }

      return <Link href={href}>
        <a {...props}></a>
      </Link>
    }}}
  />;
}

export default ZaisteReactMarkdown;
