import Layout from "./components/layout/Layout";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <Layout />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
