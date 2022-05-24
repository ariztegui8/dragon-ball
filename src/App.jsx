import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}/>
            <Route path="blog" element={<Blog />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>

            <Route path="*" element={<Navigate replace to="/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
