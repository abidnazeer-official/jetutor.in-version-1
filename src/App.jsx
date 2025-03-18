import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MRS } from "./components/MondayResultsDay";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { MRD200524 } from "./components/2024/Year/May 2024/MRD200524";
import { MRD270524 } from "./components/2024/Year/May 2024/MRD270524";
import { MRD030624 } from "./components/2024/Year/June 2024/MRD030624";
import { MRD100624 } from "./components/2024/Year/June 2024/MRD100624";
import { MRD170624 } from "./components/2024/Year/June 2024/MRD170624";
import { MRD240624 } from "./components/2024/Year/June 2024/MRD240624";
import { MRD010724 } from "./components/2024/Year/July 2024/MRD010724";
import { MRD080724 } from "./components/2024/Year/July 2024/MRD080724";
import { MRD150724 } from "./components/2024/Year/July 2024/MRD150724";
import { MRD220724 } from "./components/2024/Year/July 2024/MRD220724";
import { MRD290724 } from "./components/2024/Year/July 2024/MRD290724";
import { MRD050824 } from "./components/2024/Year/August 2024/MRD050824";
import { MRD120824 } from "./components/2024/Year/August 2024/MRD120824";
import { MRD190824 } from "./components/2024/Year/August 2024/MRD190824";
import { MRD260824 } from "./components/2024/Year/August 2024/MRD260824";
import { MRD020924 } from "./components/2024/Year/September 2024/MRD020924";
import { MRD090924 } from "./components/2024/Year/September 2024/MRD090924";
import { MRD160924 } from "./components/2024/Year/September 2024/MRD160924";
import { MRD230924 } from "./components/2024/Year/September 2024/MRD230924";
import { MRD300924 } from "./components/2024/Year/September 2024/MRD300924";
import { MRD071024 } from "./components/2024/Year/October 2024/MRD071024";
import { MRD141024 } from "./components/2024/Year/October 2024/MRD141024";
import { MRD211024 } from "./components/2024/Year/October 2024/MRD211024";
import { CurrentMondayResults } from "./components/CurrentMondayResults";
import { Days100JavaLearningPlan } from "./components/Days100JavaLearningPlan";
import { MRD281024 } from "./components/2024/Year/October 2024/MRD281024";
import { MRD041124 } from "./components/2024/Year/November 2024/MRD041124";
import { MRD111124 } from "./components/2024/Year/November 2024/MRD111124";
import { MRD181124 } from "./components/2024/Year/November 2024/MRD181124";
import { MRD251124 } from "./components/2024/Year/November 2024/MRD251124";
import { MSearchedQ } from "./components/mostsearchedquestions/MSearchedQ";
import { CoreJavaQ } from "./components/mostsearchedquestions/CoreJavaQ";
import { AdvancedJavaQ } from "./components/mostsearchedquestions/AdvancedJavaQ";
import { MRD021224 } from "./components/2024/Year/December 2024/MRD021224";
import { MRD091224 } from "./components/2024/Year/December 2024/MRD091224";
import { MRD161224 } from "./components/2024/Year/December 2024/MRD161224";
import { MRD231224 } from "./components/2024/Year/December 2024/MRD231224";
import { MRD301224 } from "./components/2024/Year/December 2024/MRD301224";
import FreshersIQ from "./components/javaInterviewPreparation/FreshersIQ";
import OneYearExperienceIQ from "./components/javaInterviewPreparation/OneYearExperienceIQ";
import TwoYearExperienceIQ from "./components/javaInterviewPreparation/TwoYearExperienceIQ";
import ThreeYearExperienceIQ from "./components/javaInterviewPreparation/ThreeYearExperienceIQ";
import { MRD060125 } from "./components/2025 Months/January 2025/MRD060125";
import BrotherlyAdviceForFirstYearStudents from "./components/adviceforbtechstudents/BrotherlyAdviceForFirstYearStudents";
import BrotherlyAdviceForSecondYearStudents from "./components/adviceforbtechstudents/BrotherlyAdviceForSecondYearStudents";
import BrotherlyAdviceForThirdYearStudents from "./components/adviceforbtechstudents/BrotherlyAdviceForThirdYearStudents";
import BrotherlyAdviceForFourthYearStudents from "./components/adviceforbtechstudents/BrotherlyAdviceForFourthYearStudents";
import { MRD130125 } from "./components/2025 Months/January 2025/MRD130125";
import { MRD200125 } from "./components/2025 Months/January 2025/MRD200125";
import { MRD270125 } from "./components/2025 Months/January 2025/MRD270125";
import { MRD030225 } from "./components/2025 Months/February 2025/MRD030225";
import { MRD100225 } from "./components/2025 Months/February 2025/MRD100225";
import { MRD170225 } from "./components/2025 Months/February 2025/MRD170225";
import { MRD240225 } from "./components/2025 Months/February 2025/MRD240225";
import { MRD030325 } from "./components/2025 Months/March2025/MRD030325";
import { MRD100325 } from "./components/2025 Months/March2025/MRD100325";
import { MRD170325 } from "./components/2025 Months/March2025/MRD170325";
import { MRD240325 } from "./components/2025 Months/March2025/MRD240325";
import { MRD310325 } from "./components/2025 Months/March2025/MRD310325";
import { Disclaimer } from "./components/disclaimerprivacypolicyterms&condition/Disclaimer";
import { PrivacyPolicy } from "./components/disclaimerprivacypolicyterms&condition/PrivacyPolicy";
import { TermsConditions } from "./components/disclaimerprivacypolicyterms&condition/TermsConditions";

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
          <Route path="/MRD041124" element={<MRD041124/>}/>
          <Route path="/MRS/MRD111124" element={<MRD111124/>}/>
          <Route path="/MRD181124" element={<MRD181124/>}/>
          <Route path="/MRD251124" element={<MRD251124/>}/>
          <Route path="/MSearchedQ" element={<MSearchedQ/>}/>
          <Route path="/CoreJavaQ" element={<CoreJavaQ/>}/>
          <Route path="/AdvancedJavaQ" element={<AdvancedJavaQ/>}/>
          <Route path="/MRD021224" element={<MRD021224/>}/>
          <Route path="/MRS/MRD091224" element={<MRD091224/>}/>
          <Route path="/MRD161224" element={<MRD161224/>}/>
          <Route path="/MRD231224" element={<MRD231224/>}/>
          <Route path="/FreshersIQ" element={<FreshersIQ/>}/>
          <Route path="/MRD301224" element={<MRD301224/>}/>
          <Route path="/OneYearExperienceIQ" element={<OneYearExperienceIQ/>}/>
          <Route path="/TwoYearExperienceIQ" element={<TwoYearExperienceIQ/>}/>
          <Route path="/ThreeYearExperienceIQ" element={<ThreeYearExperienceIQ/>}/>
          <Route path="/MRD060125" element={<MRD060125/>}/>
          <Route path="/BrotherlyAdviceForFirstYearStudents" element={<BrotherlyAdviceForFirstYearStudents/>}/>
          <Route path="/BrotherlyAdviceForSecondYearStudents" element={<BrotherlyAdviceForSecondYearStudents/>}/>
          <Route path="/BrotherlyAdviceForThirdYearStudents" element={<BrotherlyAdviceForThirdYearStudents/>}/>
          <Route path="/BrotherlyAdviceForFourthYearStudents" element={<BrotherlyAdviceForFourthYearStudents/>}/>
          <Route path="/MRD130125" element={<MRD130125/>}/>
          <Route path="/MRD200125" element={<MRD200125/>}/>    
          <Route path="/MRD270125" element={<MRD270125/>}/>  
          <Route path="/MRD030225" element={<MRD030225/>}/> 
          <Route path="/MRD100225" element={<MRD100225/>}/>
          <Route path="/MRD170225" element={<MRD170225/>}/>
          <Route path="/MRD240225" element={<MRD240225/>}/>
          <Route path="/MRD030325" element={<MRD030325/>}/>
          <Route path="/MRD100325" element={<MRD100325/>}/>
          <Route path="/MRD170325" element={<MRD170325/>}/>
          <Route path="/MRD240325" element={<MRD240325/>}/>
          <Route path="/MRD310325" element={<MRD310325/>}/>
          <Route path="/Disclaimer" element={<Disclaimer/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/TermsConditions" element={<TermsConditions/>}/>

        </Routes>
      </div>
      </>
  );
};
export default App;
