import Routers from './Rourets/Routers'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routers/>
    </>
  );
}

export default App;

// import React from 'react';
 
//   import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
  
//   export default function App(){
//     const notify = () => toast("Wow so easy!");
 
//     return (
//       <div>
//         <button onClick={notify}>Notify!</button>
//         <ToastContainer />
//       </div>
//     );
//   }
