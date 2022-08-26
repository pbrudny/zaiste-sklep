import {InferGetStaticPropsType} from "next";
import Pagination from "../../../components/Pagination";
import {ProductListItem} from "../../../components/ProductListItem";
import {apolloClient} from "../../../graphql/apolloClient";
import {GetProductsListDocument, GetProductsListQuery} from "../../../generated/graphql";

const PRODUCTS_PER_PAGE = 25;

const PaginatedProductsPage = ({data, pageId, totalProducts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  const totalPages = Math.floor(totalProducts / PRODUCTS_PER_PAGE);

  return <>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.products.map((product:any) => {
        return <li key={product.slug} className="shadow-xl border-2">
          <ProductListItem data={
            {
              id: product.slug,
              title: product.name,
              thumbnailUrl: product.images[0].url,
              thumbnailAlt: product.name,
            }
          }
          />
        </li>;
      })}
    </ul>
    <div className="max-w-md mx-auto p-5">
      <Pagination totalPages={totalPages} current={pageId}/>
    </div>
  </>;
}

export default PaginatedProductsPage;

export const getStaticPaths = async () => {
  return {
    paths: [...Array(10).keys()].map((page) => {
      return {
        params: {
          pageId: (page + 1).toString(),
        },
      }
    }),
    fallback: "blocking",
  }
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument
  });

  return {
    props: {
      data: data,
      pageId: 1,
      totalProducts: 1000,
    },
  }
};

export type InferGetStaticPaths<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
  ? { params?: R }
  : never;
