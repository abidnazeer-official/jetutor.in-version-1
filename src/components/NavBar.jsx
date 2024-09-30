import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const jetutorinlogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/jetutorin.appspot.com/o/jetutor.in%2Findex.html%2Fimages%2FActive%20Learner's%20Ranking%2FTop%20image%20for%20all%2FJava%20Expert%20Tutor_20240909_065344_0000.png?alt=media&token=ba7003cd-6921-4768-888a-98793564bc37";

  return (
    <nav>
      <table>
        <tr>
          <td>
            <div style={{ marginLeft: "50px" }}>
              <img
                src={jetutorinlogoUrl}
                alt="Remote Image"
                height="50px"
                width="50px"
              ></img>
            </div>
          </td>
          <td>
            <div>
              <Link to={"/"}>Home</Link>
            </div>
          </td>
          <td>
            <div>
              <Link to={"/MRS"}>Monday Results Day [MRD]</Link>
            </div>
          </td>
          <td>
            <div>
              <Link to={"/CurrentMondayResults"}>Current Monday Results</Link>
              <div align ="center">30-09-24</div>
            </div>
          </td>
        </tr>
      </table>
    </nav>
  );
};
