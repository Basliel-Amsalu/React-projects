import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({percentage}) => {
  return (
    <div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-success" style={{width: `${percentage}%`}}>{percentage}%</div>
    </div>
  )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress