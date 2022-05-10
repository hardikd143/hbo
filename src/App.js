import "./index.scss";
import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BikeInsurance,
  GroupHealthInsurance,
  HealthInsurance,
  CarInsurance,
  Resources,
  SingleResource,
  // Articles,
  // Guides,
  // Ebooks,
  Home,
  Login,
  Error,
  HelpIndex,
  SingleHelpArticle,
  SingleArticlePage,
  HelpLayout,
  TermsConditions
} from "./Pages/index";
import { useGlobalContext } from "./context";

function App() {
  const { darkTheme } = useGlobalContext();
  let htmDoc = document.querySelector("html");
  let theme = darkTheme ? "dark" : "light";
  htmDoc.setAttribute("data-theme", theme);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="two-wheeler-insurance" element={<BikeInsurance />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="car-insurance" element={<CarInsurance />} />
          <Route
            path="group-health-insurance"
            element={<GroupHealthInsurance />}
          />

          <Route
            path="resources"
            element={<Resources resourceType="resources" />}
          />
          <Route path=":url" element={<SingleResource />}>
            <Route path=":category" element={<SingleResource />}></Route>
          </Route>
          <Route path="article/:article_url" element={<SingleArticlePage />} />
          <Route path="terms-and-conditions" element={<TermsConditions/>}/>
          {/* <Route
            path="articles"
            element={<SingleResource resourceType="articles" />}
          />
          <Route
            path="guides"
            element={<SingleResource resourceType="guides" />}
          />
          <Route
            path="ebooks"
            element={<SingleResource resourceType="ebooks" />}
          /> */}
        </Route>
        <Route path="/support/home" element={<HelpLayout />}>
          <Route index element={<HelpIndex />} />
          {/* <Route path="article/:id-:name" element={<SingleHelpArticle />}/> */}
          <Route path="article/:id" element={<SingleHelpArticle />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
