import {Rating} from "./Rating";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string,
  thumbnailAlt: string,
  rating: number,
}

type ProductListItem = Pick<ProductDetails,
  "id" | "title" | "thumbnailAlt" | "thumbnailUrl">;

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return <>
    <div className={"bg-white p-4"}>
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
      <ReactMarkdown>{data.longDescription}</ReactMarkdown>
    </article>
    <Rating rating={data.rating}/>
  </>;
}

