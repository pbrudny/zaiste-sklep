import {InferGetStaticPropsType} from "next";
import {ProductDetails} from "../../components/Product";
import Link from "next/link";

const ProductIdPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return <div>
    <Link href="/paginated-products/1">
      <a>Wróć na stronę główną</a>
    </Link>
    <ProductDetails data={{
      id: data.id,
      title: data.title,
      thumbnailAlt: data.title,
      thumbnailUrl: data.image,
      description: data.description,
      rating: data.rating.rate,
    }}
     />
  </div>
}

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  }
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type InferGetStaticPaths<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
  ? { params?: R }
  : never;
