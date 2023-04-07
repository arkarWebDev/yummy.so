import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./layouts/Main";
import Index from "./pages/Index";
import Details from "./pages/Details";
import Category from "./pages/Category";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeContext";
import Searched from "./pages/Searched";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Main />}>
            <Route index element={<Index />} />
            <Route element={<Details />} path="/details/:key" />
            <Route element={<Category />} path="/category/:key" />
            <Route element={<Searched />} path="/search/:searchKey" />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
