import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* content */}
      <HomePage />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
