import "./App.css";
import BlobComponent2 from "./Components/BlobComponent2";
import BlogAppBar from "./Components/BlogAppBar";
import BlogComponent from "./Components/BlogComponent";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <div className="App">
      <BlogAppBar />
      <BlogPage />
    </div>
  );
}

export default App;
