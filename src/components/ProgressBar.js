import React from 'react'

function ProgressBar(props){
    const {progress} = props
    return(
        <div className="progress">
        <div style={{width: `${progress}%`}}
          id="myBar"
          className="progress-bar bg-warning"
          role="progressbar"
        ></div>
      </div>
    )
}

export default ProgressBar