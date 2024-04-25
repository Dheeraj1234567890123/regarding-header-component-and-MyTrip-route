import './index.css'

const Step = props => {
  const {stepDetails} = props
  const {displayText, stepId, completed} = stepDetails

  return (
    <li className="step-list">
      <img
        src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
        className="image-icon"
        alt="success"
      />

      <p className="step-button">{displayText}</p>
    </li>
  )
}

export default Step
