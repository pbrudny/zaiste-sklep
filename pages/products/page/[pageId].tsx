import {InferGetStaticPropsType} from "next";
import Pagination from "../../../components/Pagination";
import {ProductListItem} from "../../../components/ProductListItem";

const PRODUCTS_PER_PAGE = 25;

const PaginatedProductsPage = ({data, pageId, totalProducts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  const totalPages = Math.floor(totalProducts / PRODUCTS_PER_PAGE);

  return <>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return <li key={product.id} className="shadow-xl border-2">
          <ProductListItem data={
            {
              id: product.id,
              title: product.title,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
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

const getProducts = async (pageNumber: number) => {
  const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE;
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`)
  const data: StoreApiResponse[] = await res.json();
  return data;
}

// Count all the products
const getTotalProducts = async () => {
  let total = 0;
  let offset = 0;
  let data: StoreApiResponse[];

  do {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=1000&offset=${offset}`)
    data = await res.json();
    total += data.length;
    offset += 1000;
  } while (data.length > 0)
  return total;
}

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.pageId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const pageNumber = parseInt(params.pageId);
  const data = await getProducts(pageNumber);
  const totalProducts = await getTotalProducts();

  return {
    props: {
      data: data,
      pageId: pageNumber,
      totalProducts: totalProducts,
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
