import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";
import {Product} from "../components/Product";
import {useQuery} from "react-query";

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
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
          <Product data={
            {
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
