import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
