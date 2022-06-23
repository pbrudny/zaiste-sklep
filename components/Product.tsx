import {Rating} from "./Rating";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
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
    <img src={data.thumbnailUrl} alt={data.thumbnailUrl}/>
    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    <p className="p-4">
      {data.description}
    </p>
    <Rating rating={data.rating}/>
  </>;
}

