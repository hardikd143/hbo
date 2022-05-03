import "./index.scss";
import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BikeInsurance,
  ArogyaSanjeevani,
  HealthInsurance,
  CarInsurance,
  Articles,
  Guides,
  Resources,
  Home,
  Login,
  Error,
  HelpIndex,
  SingleHelpArticle,
  HelpLayout
} from "./Pages/index";
import { useGlobalContext } from "./context";
function App() {
  const {darkTheme}= useGlobalContext()
  let htmDoc = document.querySelector('html')
  let theme = darkTheme?'dark':'light'
  htmDoc.setAttribute('data-theme',theme)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bike-insurance" element={<BikeInsurance />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="car-insurance" element={<CarInsurance />} />
          <Route path="arogya-sanjeevani" element={<ArogyaSanjeevani />} />
          <Route path="articles" element={<Articles />} />
          <Route path="resources" element={<Resources />} />
          <Route path="guides" element={<Guides />} />
        </Route>
        <Route path="/support/home" element={<HelpLayout/>}>
          <Route index element={<HelpIndex />}/>
          {/* <Route path="article/:id-:name" element={<SingleHelpArticle />}/> */}
          <Route path="article/:id" element={<SingleHelpArticle />}/>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
