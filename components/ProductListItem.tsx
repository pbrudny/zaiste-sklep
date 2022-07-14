import Link from "next/link";
import Image from "next/image";
import {useCartState} from "./Cart/CartContext";

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
  const cartState = useCartState();

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
    <div className={"p-4"}>
    <Link href={`/products/${data.id}`}>
      <a>
        <h2 className="pb-4 text-3xl font-bold">{data.title}</h2>
      </a>
    </Link>
    <button
      onClick={() => cartState.addItemToCart({
        id: data.id,
        price: 10,
        title: data.title,
        count: 1,
      })}
      className={"text-white bg-gradient-to-r from-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}>Dodaj do koszyka</button>
    </div>
  </>;
}

