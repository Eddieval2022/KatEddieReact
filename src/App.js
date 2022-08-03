import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { TheApp, Content } from "./styles/appstyled";
// import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import Navbar from "./components/navbar";


const App = () => {
  const [user, setUser] = useState();

  return (
    <TheApp>
      
      <BrowserRouter>
      <Header/>
      {/* {user && <Navbar />} */}

      <Content>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/home" element={<Home user={user} setter={setUser} />} />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/contact"element={<Contact user={user} />} />
         
        </Routes>
       </Content>
      </BrowserRouter>
       <Footer/>
    </TheApp>
  );
};

export default App;