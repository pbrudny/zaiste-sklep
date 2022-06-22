import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {Main} from "../components/Main";
import {Product} from "../components/Product";
import {Layout} from "../components/Layout";

const DATA = {
  title: 'siemka',
  description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Maecenas condimentum gravida libero sit amet eleifend.
        Donec ut ornare libero. Donec egestas metus vitae mauris tempus,
        a mollis erat dictum. Morbi quis elit nec tortor varius
        scelerisque eget eget velit. Donec et faucibus mauris,
        in ultricies lacus. Integer sit amet elementum sapien.
        Sed lacinia erat neque, ut tincidunt metus ullamcorper ut.
        Morbi ornare ante sed bibendum rhoncus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin porta a erat ornare sollicitudin.
        Phasellus pulvinar tincidunt purus non commodo. Morbi
        nisi nisl, malesuada quis tincidunt mollis, euismod ac
        neque. Ut a pharetra nisl. Proin ut congue turpis.
        Donec mollis turpis vel ligula lobortis tristique.`,
  thumbnailUrl: `https://picsum.photos/1060/536`,
  thumbnailAlt: `przykładowy obrazek 1`,
  rating: 4.5,
}

const Home = () => {
  return <Layout>
    <Header/>
    <Main>
      <Product data={DATA} />
    </Main>
    <Footer/>
  </Layout>;
}

export default Home;

