import Todos from "./components/Todos";
import { Toaster } from 'react-hot-toast';
import { TodoContextProvider } from "./context/TodoContext";
import "./index.css";

function App() {
  return (
    <TodoContextProvider>
      <Toaster />
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
