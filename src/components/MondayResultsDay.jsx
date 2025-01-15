import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./MRS.css"; // External CSS for better styling

export const MRS = () => {
  return (
    <>
      <div className="header">Monday Results Day [MRD]</div>
      <div className="container">
        <div className="title">
          <h1>Monday Results Day [History]</h1>
        </div>
        <table className="results-table">
          <thead>
            <tr>
              <th>May 2024</th>
              <th>June 2024</th>
              <th>July 2024</th>
              <th>August 2024</th>
              <th>September 2024</th>
              <th>October 2024</th>
              <th>November 2024</th>
              <th>December 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Row-1 */}
              <td>------------</td>
              <td>
                <Link to="/MRD030624">03-06-24</Link>
              </td>
              <td>
                <Link to="/MRD010724">01-07-24</Link>
              </td>
              <td>
                <Link to="/MRD050824">05-08-24</Link>
              </td>

              <td>
                <Link to="/MRD020924">02-09-24</Link>
              </td>
              <td>
                <Link to="/MRD071024">07-10-24</Link>
              </td>
              <td>
                <Link to="/MRD041124">04-11-24</Link>
              </td>
              <td>
                <Link to="/MRD021224">02-12-24</Link>
              </td>
            </tr>
            <tr>
              {/* Row-2 */}
              <td>------------</td>
              <td>
                <Link to="/MRD100624">10-06-24</Link>
              </td>
              <td>
                <Link to="/MRD080724">08-07-24</Link>
              </td>
              <td>
                <Link to="/MRD120824">12-08-24</Link>
              </td>
              <td>
                <Link to="/MRD090924">09-09-24</Link>
              </td>
              <td>
                <Link to="/MRD141024">14-10-24</Link>
              </td>
              <td>
                <Link to="/MRD111124">11-11-24</Link>
              </td>
              <td>
                <Link to="/MRD091224">09-12-24</Link>
              </td>
            </tr>
            <tr>
              {/* Row-3 */}
              <td>
                <Link to="/MRD200524">20-05-24</Link>
              </td>
              <td>
                <Link to="/MRD170624">17-06-24</Link>
              </td>
              <td>
                <Link to="/MRD150724">15-07-24</Link>
              </td>
              <td>
                <Link to="/MRD190824">19-08-24</Link>
              </td>
              <td>
                <Link to="/MRD160924">16-09-24</Link>
              </td>
              <td>
                <Link to="/MRD211024">21-10-24</Link>
              </td>
              <td>
                <Link to="/MRD181124">18-11-24</Link>
              </td>
              <td>
                <Link to="/MRD161224">16-12-24</Link>
              </td>
            </tr>
            <tr>
              {/* Row-4 */}
              <td>
                <Link to="/MRD270524">27-05-24</Link>
              </td>
              <td>
                <Link to="/MRD240624">24-06-24</Link>
              </td>
              <td>
                <Link to="/MRD220724">22-07-24</Link>
              </td>
              <td>
                <Link to="/MRD260824">26-08-24</Link>
              </td>
              <td>
                <Link to="/MRD230924">23-09-24</Link>
              </td>
              <td>
                <Link to="/MRD281024">28-10-24</Link>
              </td>
              <td>
                <Link to="/MRD251124">25-11-24</Link>
              </td>
              <td>
                <Link to="/MRD231224">23-12-24</Link>
              </td>
            </tr>
            <tr>
              {/* Row-5 */}
              <td></td>
              <td></td>
              <td>
                <Link to="/MRD290724">29-07-24</Link>
              </td>
              <td></td>
              <td>
                <Link to="/MRD300924">30-09-24</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link to="/MRD301224">30-12-24</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2025 months */}
      <div className="container">
        <div className="title">
          <table className="results-table">
            <thead>
              <tr>
                <th>January 2025</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Row-1 */}
                <td>
                  <Link to="/MRD060125">06-01-25</Link>
                </td>
              </tr>
              <tr>
                {/* Row-2 */}
                <td>
                  <Link to="/MRD130125">13-01-25</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
