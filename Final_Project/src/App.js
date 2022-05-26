import { UserContextProvider } from "./context/UserContext";
import RoutesLib from "./Routes";

function App() {
  return (
    <>
      <UserContextProvider>
        <RoutesLib />
      </UserContextProvider>
    </>
  );
}

export default App;
