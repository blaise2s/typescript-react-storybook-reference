// src/components/app/app-view.tsx

import React from "react";
import "./app-view.scss";
import { Header } from "../";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
