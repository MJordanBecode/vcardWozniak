// pages/index.js
import HeaderVcard from "./components/shared/header";
import MainVcard from "./components/shared/main";
import FooterVcard from "./components/shared/footer";
export default function Home() {
  return (<>
    
      <header>
        <HeaderVcard />
      </header>
      <main>
        <MainVcard />
      </main>
      <footer>
        <FooterVcard />
      </footer>
  </>

  );
}
