import React, { useState } from "react";
import SingleHousemate from "./SingleHousemate";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HouseMatesContext } from "./HousematesProvider";

function Housemates() {
  const initialvote = 0;
  const initialMaxVote = 10;
  const width = 100;
  const value = useContext(HouseMatesContext);
  const { houseMate } = value;
  const [maxVote, setMaxVote] = useState(initialMaxVote);
  const [votes, setVotes] = useState(initialvote);
  const [progress, setProgress] = useState(width);
  const [error, setError] = useState("");

  const increment = (id) => {
    const housemateClone = [...houseMate];
    if (votes >= 10 && maxVote <= initialvote) {
      return;
    }
    setVotes((votes) => {
      return (votes = votes + 1);
    });
    setMaxVote((maxVote) => {
      return (maxVote = maxVote - 1);
    });
    setProgress((progress) => {
      return progress - 10;
    });
    housemateClone.map((hm) => {
      if (hm.id === id) {
        return (hm.vote = hm.vote + 1);
      }
      return hm
    }); 
  };

  const decrement = (id) => {
    const housemateClone = [...houseMate];
    if (votes <= initialvote && maxVote >= initialvote) {
      return;
    }
    housemateClone.map((hm) => {
      if (hm.id === id) {
        if (hm.vote === 0) {
          return hm;
        } else {
          setVotes((votes) => {
            return (votes = votes - 1);
          });
          setMaxVote((maxVote) => {
            return (maxVote = maxVote + 1);
          });
          setProgress((progress) => {
            return progress + 10;
          });
          return (hm.vote = hm.vote - 1);
        }
      }
      return hm;
    });
  };

  const handleChange = () => {
    return;
  };

  const checkVote = (votes) => {
    if (votes !== initialMaxVote) {
      setError(() => {
        return "Please, finish the votes";
      });
      setTimeout(() => {
        return setError("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-body">
            <h3 className="bbhead">BBNaija2020 Top 5 Housemates</h3>
            <div className="vote-bar text-center">
              <h5 className="vote-head mt-3">My Available Votes</h5>
              <h1 id="voteNumber" className="vote-number mt-3">
                {maxVote}
              </h1>
              <ProgressBar progress={progress} />
            </div>

            <div>
              <div className="row mt-5">
                {houseMate.map((hm) => {
                  return (
                    <SingleHousemate
                      increment={increment}
                      decrement={decrement}
                      handleChange={handleChange}
                      key={hm.id}
                      hm={hm}
                    />
                  );
                })}
              </div>
            </div>

            <div
              id="finishNotice"
              className="text-center text-danger mt-3 font-weight-bold"
            >
              {error}
            </div>

            <div className="text-center d-flex justify-content-center">
              <button className="btn2">
                {votes === initialMaxVote ? (
                  <Link to="/leader"> View Leaderboard</Link>
                ) : (
                  <Link onClick={checkVote} to="/">
                    {" "}
                    View Leaderboard
                  </Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Housemates;
