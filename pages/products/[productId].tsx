import {InferGetStaticPropsType} from "next";
import {ProductDetails} from "../../components/Product";
import Link from "next/link";
import {serialize} from "next-mdx-remote/serialize";
import {apolloClient} from "../../graphql/apolloClient";
import {gql} from "@apollo/client";
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables, GetProductsSlugsDocument, GetProductsSlugsQuery
} from "../../generated/graphql";

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
      thumbnailUrl: data.images[0].url,
      description: data.description,
      longDescription: data.longDescription,
      rating: 0,
    }}
    />
  </div>
}

export default ProductIdPage;

export const getStaticPaths = async () => {
  const {data} = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug
        }
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


  const {data} = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
    >({
    variables: {
      slug: params.productId
    },
    query: GetProductDetailsBySlugDocument
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
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
