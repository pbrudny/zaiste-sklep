import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/products/${data.id}`}>
      <a>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </a>
    </Link>
  </>;
}

