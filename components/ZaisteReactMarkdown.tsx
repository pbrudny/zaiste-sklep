import Link from "next/link";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../utils";

const isExternalURL = (url:string) => {
  if (process?.title === 'browser') {
    return new URL(url).origin !== location.origin;
  }

  return false;
}

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
