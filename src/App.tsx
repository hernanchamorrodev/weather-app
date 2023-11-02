import React from "react";
import { Layout } from "./layouts/Layout";
import Index from "./pages/Index";

function App(): JSX.Element {
  return (
    <Layout>
      <Index />
    </Layout>
  );
}

export default App;
