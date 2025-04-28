import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsSearch from "./components/newsSearch.jsx"; //路由名稱跟路徑
import Login from "./components/login.jsx"; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/newsSearch" element={<NewsSearch />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
