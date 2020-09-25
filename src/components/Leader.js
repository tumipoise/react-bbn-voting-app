import React from "react";
import { useContext } from "react";
import { HouseMatesContext } from "./HousematesProvider";
import { Link } from "react-router-dom";

function Leader() {
  const houseMate = useContext(HouseMatesContext);
  const sortHousemate = houseMate.houseMate.sort((vote1, vote2) => {
    return vote2.vote - vote1.vote;
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper-body">
          <div>
            <h1 className="result-header">Leaderboard</h1>
          </div>
          <div className="leader-board-wrapper">
            {sortHousemate.map((hm) => (
              <div key={hm.id} className="card leader--card2">
                <div className="card-image">
                  <img src={hm.img} alt={hm.name} />
                  <h4>{hm.name}</h4>
                </div>
                <button className="btn btn-primary leader--btn">
                  {hm.vote}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h4 className="evicted-name text-capitalize">
              {sortHousemate[0].name} won!
            </h4>
          </div>

          <div className="text-center d-flex justify-content-center">
            <button className="btn1">
              <Link to="/">Back to Vote</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leader;
