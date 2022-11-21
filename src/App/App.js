import Header from "../components/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";

import Styles from "./App.module.scss";

function App() {
  return (
    <div div className={Styles.App}>
      <Header />
      <main>
        <Video />
      </main>
      <Footer />
    </div>
  );
}

export default App;
