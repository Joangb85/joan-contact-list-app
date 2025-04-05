import "./App.css";
import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import routerConfig from "./routing/routerConfig.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {routerConfig.map((route) => (
          <Route path={route.path} key={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
