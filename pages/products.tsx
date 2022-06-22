import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Main} from "../components/Main";
import {Layout} from "../components/Layout";
import {InferGetStaticPropsType} from "next";

export default function ProductsPage({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Layout>
    <Header/>
    <Main>{data[0].title}</Main>
    <Footer/>
  </Layout>;
}


export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  }
};

export interface StoreApiResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      {
    rate:  number;
    count: number;
  }
}
