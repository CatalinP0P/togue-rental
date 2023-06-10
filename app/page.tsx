import Image from "next/image";
import Layout from "./layout";
import LandingPage from "./pages/LandingPage";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Layout>
      <Header/>
      <LandingPage></LandingPage>
      <Footer/>
    </Layout>
  );
}
