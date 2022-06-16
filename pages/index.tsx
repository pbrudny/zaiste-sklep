import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return <div className="flex flex-col bg-teal-100 min-h-screen">
    <Header/>
    <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
      <img src="https://picsum.photos/1060/536" alt="przykładowy obrazek 1"/>
      <p>
        Lorem ipsum dolor sit amet,
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
        Donec mollis turpis vel ligula lobortis tristique.
      </p>
    </main>
    <Footer/>
  </div>;
}

export default Home;

