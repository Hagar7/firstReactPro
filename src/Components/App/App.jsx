import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Portofolio from '../Portofolio/Portofolio'
import MasterLayout from '../MasterLayout/MasterLayout';
import NotFound from '../NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from '../Movies/Movies';


function App() {
  const routes = createBrowserRouter([
    {path:"/", element:<MasterLayout/>,errorElement:<NotFound/> ,children:[
      {index:true, element:<Home/>},
      {path:'about', element:<About/>},
      {path:'movies', element:<Movies/>},
      {path:'portofolio', element:<Portofolio/>},
      {path:'contact', element:<Contact/>},
    ] }
  ])
  return (
<>
<RouterProvider router={routes} />
</>
  );
}

export default App;
