import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MRS } from "./components/MondayResultsDay";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { MRD200524 } from "./components/MRD200524";
import { MRD270524 } from "./components/MRD270524";
import { MRD030624 } from "./components/MRD030624";
import { MRD100624 } from "./components/MRD100624";
import { MRD170624 } from "./components/MRD170624";
import { MRD240624 } from "./components/MRD240624";
import { MRD010724 } from "./components/MRD010724";
import { MRD080724 } from "./components/MRD080724";
import { MRD150724 } from "./components/MRD150724";
import { MRD220724 } from "./components/MRD220724";
import { MRD290724 } from "./components/MRD290724";
import { MRD050824 } from "./components/MRD050824";
import { MRD120824 } from "./components/MRD120824";
import { MRD190824 } from "./components/MRD190824";
import { MRD260824 } from "./components/MRD260824";
import { MRD020924 } from "./components/MRD020924";
import { MRD090924 } from "./components/MRD090924";
import { MRD160924 } from "./components/MRD160924";
import { MRD230924 } from "./components/MRD230924";
import { MRD300924 } from "./components/MRD300924";
import { MRD071024 } from "./components/MRD071024";
import { MRD141024 } from "./components/MRD141024";
import { MRD211024 } from "./components/MRD211024";
import { CurrentMondayResults } from "./components/CurrentMondayResults";
import { Days100JavaLearningPlan } from "./components/Days100JavaLearningPlan";
import { MRD281024 } from "./components/MRD281024";

const App = () => {
  
    return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MRS" element={<MRS/>}/>
          <Route path="/CurrentMondayResults" element={<CurrentMondayResults/>}/>
          <Route path="/MRD200524" element={<MRD200524/>}/>
          <Route path="/MRD270524" element={<MRD270524/>}/>
          <Route path="/MRD030624" element={<MRD030624/>}/>
          <Route path="/MRD100624" element={<MRD100624/>}/>
          <Route path="/MRD170624" element={<MRD170624/>}/>
          <Route path="/MRD240624" element={<MRD240624/>}/>
          <Route path="/MRD010724" element={<MRD010724/>}/>
          <Route path="/MRD080724" element={<MRD080724/>}/>
          <Route path="/MRD150724" element={<MRD150724/>}/>
          <Route path="/MRD220724" element={<MRD220724/>}/>
          <Route path="/MRD290724" element={<MRD290724/>}/>
          <Route path="/MRD050824" element={<MRD050824/>}/>
          <Route path="/MRD120824" element={<MRD120824/>}/>
          <Route path="/MRD190824" element={<MRD190824/>}/>
          <Route path="/MRD260824" element={<MRD260824/>}/>
          <Route path="/MRD020924" element={<MRD020924/>}/>
          <Route path="/MRD090924" element={<MRD090924/>}/>
          <Route path="/MRD160924" element={<MRD160924/>}/>
          <Route path="/MRD230924" element={<MRD230924/>}/>
          <Route path="/MRD300924" element={<MRD300924/>}/>
          <Route path="/MRD071024" element={<MRD071024/>}/>
          <Route path="/MRD141024" element={<MRD141024/>}/>
          <Route path="/MRD211024" element={<MRD211024/>}/>
          <Route path="/CurrentMondayResults" element={<CurrentMondayResults/>}/>
          <Route path="/Days100LearningPlan" element={<Days100JavaLearningPlan/>}/>
          <Route path="/MRD281024" element={<MRD281024/>}/>
        </Routes>
      </div>
      </>
  );
};
export default App;
