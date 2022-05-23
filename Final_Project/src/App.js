import { useContext } from "react";
import Header from "./components/header";
import { AuthContext } from "./context/AuthContext";
import RoutesLib from "./Routes";

function App() {
  return (
    <>
      <Header />
      <RoutesLib />
    </>
  );
}

export default App;
