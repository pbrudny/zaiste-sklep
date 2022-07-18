import {Main} from "../components/Main";
import {useQuery, gql} from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
  query getProductsList {
  products {
    id
    slug
    name
    price
  }
}
`);

  if (loading) {
    return <Main>Ładowanie...</Main>
  }

  if (error) {
    return <Main>{JSON.stringify(error)}</Main>
  }

  return <Main>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    </Main>
}

export default Home;

