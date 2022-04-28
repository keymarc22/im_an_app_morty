import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { Episodes } from "../pages/Episodes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"  exact element={<Characters />}/>
          <Route path="/locations" exact element={<Locations />}/>
          <Route path="/episodes" exact element={<Episodes />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
