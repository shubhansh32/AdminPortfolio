import Home from "./Frontend/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import View from "./Frontend/View";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/view" element={<View/>}/>
</Routes>

</BrowserRouter>
   
  );
}

export default App;
