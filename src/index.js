import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hooks from './NewComponents/Hooks';
// import App from './App';
// import All from './All';
// import UseStateComp from './Components/LetsReact/UseStateComp';
//import Main from './Components/Routing/Main';
//import Main from './Components/RoutingNew/Route'
import UseEffectComp from './Components/LetsReact/UseEffectComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UseEffectComp />
  </React.StrictMode>
);

