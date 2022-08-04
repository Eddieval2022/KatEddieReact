import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { TheApp, Content, Background } from "./styles/appstyled";
// import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Eddie from "./pages/eddie";
import Kat from "./pages/kat";
// import Navbar from "./components/navbar";


const App = () => {
  const [user, setUser] = useState();

  return (
    <TheApp>
      <Background>
      <BrowserRouter>
      <Header/>
      {/* {user && <Navbar />} */}

      <Content>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/home" element={<Home user={user} setter={setUser} />} />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/contact"element={<Contact user={user} />} />
         <Route path="/eddie" element={<Eddie user = {user} />} />
         <Route path="/kat" element={<Kat user = {user} />} />
        </Routes>

       </Content>
      </BrowserRouter>
       <Footer/>
       </Background>
    </TheApp>
  );
};

export default App;