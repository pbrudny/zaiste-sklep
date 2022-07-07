import {Rating} from "./Rating";
import Image from "next/image";
import {NextSeo} from "next-seo";
import ZaisteReactMarkdown from "./ZaisteReactMarkdown";
import {MarkdownResult} from "../utils";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: MarkdownResult;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

type ProductListItem = Pick<ProductDetails,
  "id" | "title" | "thumbnailAlt" | "thumbnailUrl">;

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return <>
    <div className={"bg-white p-4"}>
      <NextSeo
        title={data.title}
        description={"Super produkt"}
        canonical={`https://zaiste-sklep-pbrudny.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://zaiste-sklep-pbrudny.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Nasz Sklep',
        }}
      />
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailUrl}
        layout={"responsive"}
        width={4}
        height={3}
        objectFit={"contain"}
      />
    </div>


    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    <p className="p-4">
      {data.description}
    </p>
    <article className="prose lg:prose-xl">
      <ZaisteReactMarkdown>{data.longDescription}</ZaisteReactMarkdown>
    </article>
    <Rating rating={data.rating}/>
  </>;
}

