import React from 'react'

function SingleHousemate(props){
  const {hm, increment, decrement, handleChange} = props
  const {id, name, img, vote} = hm


    return(
      
        <div className=" col-12 col-md-6 col-sm-9 box mt-4">
          <div className="card leader--card py-2">
            <div className="card-image">
              <img src={img} alt={name}/>
            </div>
            <div className="card-info">
             <p className="vote-name">{name}</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button onClick={() => decrement(id)}
                    id="nengiMinus"
                    className="btn btn-outline-secondary"
                    type="button"
                  >
                    -
                  </button>
                </div>
                <input min="5" max="8" value={vote} name="inputVote" onChange={handleChange}
                  id="nengiInput"
                  type="number"
                  className="form-control inputt"
                />
                <div className="input-group-append">
                  <button onClick={() => increment(id)}
                    id="nengiPlus"
                    className="btn btn-outline-secondary"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
}

export default SingleHousemate