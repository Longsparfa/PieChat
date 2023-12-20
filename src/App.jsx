import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LoginPage, MyProfile, ChatLanding, Chating } from "./routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/chat" element={<ChatLanding />} />
          <Route path="/chating" element={<Chating />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
