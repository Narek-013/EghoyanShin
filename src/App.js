import AppRouter from "./Routes/AppRouter";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>eghoyanshin.am</title>
        <meta name="description" content="eghoyanshin.am" />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
