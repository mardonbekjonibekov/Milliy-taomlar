import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./i18n/i18next.js";
import "./main.css";
import "./assets/Css/fonts.css";
import "./assets/Css/style.css";
import "./assets/Css/tailwind.css";

import { router } from "./router";
import { RouterProvider } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> ni o'chirib, o'rniga buni yozamiz: */}
    <RouterProvider router={router} />
  </StrictMode>
);
