import { Provider } from "react-redux";
import "./App.css";
import Body from "./componets/Body";
import Head from "./componets/Head";
import Store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./componets/MainContainer";
import WatchPage from "./componets/WatchPage";



const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
     path:"watch",
     element:<WatchPage/>
    }
  ]

}])

function App() {
  return (
    <Provider store={Store}>
    <div >
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
  
export default App;
  