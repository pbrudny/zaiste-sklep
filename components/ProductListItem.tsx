import Link from "next/link";

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

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return <>
    <img src={data.thumbnailUrl} alt={data.thumbnailUrl}/>
    <Link href={`/products/${data.id}`}>
      <a>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </a>
    </Link>
  </>;
}

