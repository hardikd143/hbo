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
  Login,Error,SupportHelp
} from "./Pages/index";

function App() {
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
          <Route path="/support/home" element={<SupportHelp />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
