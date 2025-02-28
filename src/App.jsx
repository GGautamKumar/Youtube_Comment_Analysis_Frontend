
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/home';
import AnalysisResults from './Components/Analyze';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
//import dotenv from "dotenv";

function App() {
  
  const router=createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
{
  path:"/result",
  element:<AnalysisResults/>
}])

  return (
   <RouterProvider router={router}>

   </RouterProvider>
  )
}

export default App
