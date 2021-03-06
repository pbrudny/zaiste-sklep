import {InferGetStaticPropsType} from "next";
import {ProductDetails} from "../../components/Product";
import Link from "next/link";
import {serialize} from "next-mdx-remote/serialize";

const ProductIdPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return <div>
    <Link href="/products/page/1">
      <a>Wróć na stronę główną</a>
    </Link>
    <ProductDetails data={{
      id: data.id,
      title: data.title,
      thumbnailAlt: data.title,
      thumbnailUrl: data.image,
      description: data.description,
      longDescription: data.longDescription,
      rating: data.rating.rate,
    }}
     />
  </div>
}

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`)
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      }
    }),
    fallback: "blocking",
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

  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`)
  const data: StoreApiResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      data: {
        ...data,
        longDescription: await serialize(data.longDescription),
      }
    },
  }
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
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
