import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

// Toastify
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;