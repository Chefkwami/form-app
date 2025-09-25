import HomePage from "./pages/HomePage";
import {Toaster} from "react-hot-toast";


function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <HomePage/>
    </div>
  );
}

export default App;
