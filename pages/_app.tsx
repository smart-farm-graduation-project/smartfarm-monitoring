import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import '../styles/globals.css'
import Footer from "@/components/Footer";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <Footer/>
    </RecoilRoot>
  );
};

export default App;