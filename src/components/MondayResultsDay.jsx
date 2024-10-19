import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { MRD200524 } from "./MRD200524";
import { MRD270524 } from "./MRD270524"; 
import { MRD030624 } from "./MRD030624";

export const MRS = () => {
  return (
  <>
        <div>Monday Results Day [MRD]</div>
        <div style={{marginTop: '50px', marginLeft:'50px'}}>
        <div align= "center"><h1>Monday Results Day [History]</h1></div>
        <table border={2} cellPadding={15} align="center" height={100} width={800}>  
          {/* Row Heading */}
          <tr>
              <th>May 2024</th>  
              <th>June 2024</th>
              <th>July 2024</th>
              <th>August 2024</th>
              <th>September 2024</th>
              <th>October 2024</th>
          </tr>
          
           {/* row-1 */}
          <tr>
            <td>------------</td>
            <td><Link to="/MRD030624">03-06-24</Link></td>
            <td><Link to="/MRD010724">01-07-24</Link></td>
            {/*column-4*/}
            <td><Link to="/MRD050824">05-08-24</Link></td>
            {/*column-5*/}
            <td><Link to="/MRD020924">02-09-24</Link></td>
            {/*column-6*/}
            <td><Link to="/MRD071024">07-10-24</Link></td>
          </tr>

          {/* row-2 */}
          <tr>
            <td>------------</td>
            <td><Link to="/MRD100624">10-06-24</Link></td>
            <td><Link to="/MRD080724">08-07-24</Link></td>
            {/*column-4*/}
            <td><Link to="/MRD120824">12-08-24</Link></td>
            {/*column-5*/}
            <td><Link to="/MRD090924">09-09-24</Link></td>
            {/*column-6*/}
            <td><Link to="/MRD141024">14-10-24</Link></td>
          </tr>

          {/* row-3 */}
          <tr>
            <td><Link to="/MRD200524">20-05-24</Link></td>  
            <td><Link to="/MRD170624">17-06-24</Link></td>
            <td><Link to="/MRD150724">15-07-24</Link></td>
            {/*column-4*/}
            <td><Link to="/MRD190824">19-08-24</Link></td>
            {/*column-5*/}
            <td><Link to="/MRD160924">16-09-24</Link></td>
            {/*column-6*/}
            <td><Link to="/MRD211024">21-10-24 [Results Pending]</Link></td>
          </tr>
          
          {/* row-4 */}
          <tr>
             <td><Link to="/MRD270524">27-05-24</Link></td>
             <td><Link to="/MRD240624">24-06-24</Link></td>
             {/* column-3 */}
             <td><Link to="/MRD220724">22-07-24</Link></td>
             {/* column-4 */}
             <td><Link to="/MRD260824">26-08-24</Link></td>
             {/* column-5*/}
             <td><Link to="/MRD230924">23-09-24</Link></td>
             {/*column-6*/}
            <td><Link to="/MRD281024">28-10-24 [Results Pending]</Link></td> 
          </tr>

          {/*row-5*/}
          <tr>
              <td></td>
              <td></td>
              {/*column-3*/}
              <td><Link to="/MRD290724">29-07-24</Link></td>
              <td></td>
              <td><Link to="/MRD300924">30-09-24</Link></td>
          </tr>

                  

        </table>
        </div>

  </>
  
  );
};


