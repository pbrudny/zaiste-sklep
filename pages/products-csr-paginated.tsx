import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";
import {ProductDetails} from "../components/Product";
import {useQuery} from "react-query";
import Pagination from "../components/Pagination";

const getProducts = async () => {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products?take=25&offset=0')
  const data: StoreApiResponse[] = await res.json();
  return data;
}

export default function ProductsCSRPage() {
  const {data, error, isLoading} = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data || error) {
    return <div>Coś poszło nie tak</div>
  }

  return <Layout>
    <Header/>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return <li key={product.id} className="shadow-xl border-2">
          <ProductDetails data={
            {
              id: product.id,
              title: product.title,
              description: product.description,
              thumbnailUrl: product.image,
              thumbnailAlt: product.title,
              rating: product.rating.rate,
            }
          }
          />
        </li>;
      })}
    </ul>
    <div className="max-w-md mx-auto p-5">
      <Pagination totalPages={10} current={1}/>
    </div>
    <Footer/>
  </Layout>;
}

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
