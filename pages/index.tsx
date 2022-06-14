import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return <div className="flex flex-col bg-teal-100 min-h-screen">
    <Header/>
    <main className="flex-grow max-w-md mx-auto w-full">
      Właściwa zawartość
    </main>
    <Footer/>
  </div>;
}

export default Home;

