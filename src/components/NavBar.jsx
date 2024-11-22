import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const jetutorinlogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  return (
    <nav>
      <table cellPadding={12} width={250}>
        <tr>
          <td>
            <div>
              <img
                src={jetutorinlogoUrl}
                alt="Remote Image"
                height="50px"
                width="50px"
              ></img>
                <Link to={"/"}><h4>Home</h4> </Link>
            </div>
          </td>
          {/* <td>
            <div>
              <Link to={"/"}><h4>Home</h4> </Link>
            </div>
          </td> */}
          <td>
            <div>
              <Link to={"/MRS"}><h4>Monday Results Day [History]</h4></Link>
            </div>
          </td>
          <td>
            <div>
              <Link to={"/CurrentMondayResults"}><h4>Current Monday Results<div>18-11-24</div></h4></Link>
            </div>
          </td>
          <td>
            <div>
              <Link to={"/Days100LearningPlan"}><h4>100 Days Java Learning Plan</h4></Link>
            </div>
          </td>
        </tr>
      </table>
    </nav>
  );
};
