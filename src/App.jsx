import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <div>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
