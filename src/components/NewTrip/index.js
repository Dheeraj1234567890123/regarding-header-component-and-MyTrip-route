import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import {Link} from 'react-router-dom'
import Step from '../Step'
import MyTripContext from '../../Context/MyTripContext'

import './index.css'
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details', completed: false},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection', completed: false},
  {stepId: 'GUESTS', displayText: 'Guests', completed: false},
  {
    stepId: 'TRAVEL_ASSISTANCE',
    displayText: 'Travel Assistance',
    completed: false,
  },
  {stepId: 'CONFIRMATION', displayText: 'Confirmation', completed: false},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class NewTrip extends Component {
  state = {
    activeId: stepsList[0].stepId,
    nameINput: '',
    startLocationInput: '',
    endLocationInput: '',
    nameError: false,
    errorStartLocation: false,
    errorSecondLocation: false,
    startDateInput: '',
    endDateInput: '',
    startDateError: false,
    endDateError: false,
    dateError: false,
    adultCount: 1,
    childCount: 0,
    infantsCount: 0,
    checkInput: false,
    selectId: travelAssistanceList[0].value,
    confirmationPage: false,
    tripData: {},
  }
  onSubmitform = (event, addTrip) => {
    event.preventDefault()

    const {endLocationInput, startDateInput, endDateInput, tripData} =
      this.state

    const newTrip = {
      id: uuidv4(),
      location: endLocationInput,
      startDate: startDateInput,
      endDate: endDateInput,
    }

    this.setState({
      activeId: '',
      confirmationPage: true,
      tripData: newTrip,
    })
    addTrip({...tripData})
  }

  onChangeNameInput = event => {
    this.setState({nameINput: event.target.value})
  }
  onChangeBlurName = () => {
    const {nameINput} = this.state
    if (nameINput === '') {
      this.setState({nameError: true})
    } else {
      this.setState({nameError: false})
    }
  }
  onChangeFirstLocationInput = event => {
    this.setState({startLocationInput: event.target.value})
  }
  onBlurFirstLocation = () => {
    const {startLocationInput} = this.state
    if (startLocationInput === '') {
      this.setState({errorStartLocation: true})
    } else {
      this.setState({errorStartLocation: false})
    }
  }

  onChangeSecondLocationInput = event => {
    this.setState({endLocationInput: event.target.value})
  }
  onBlurSecondLocation = () => {
    const {endLocationInput} = this.state
    if (endLocationInput === '') {
      this.setState({errorSecondLocation: true})
    } else {
      this.setState({errorSecondLocation: false})
    }
  }

  onClickYourDetails = () => {
    const {nameINput, startLocationInput, endLocationInput} = this.state
    if (nameINput === '') {
      this.setState({nameError: true})
    }
    if (startLocationInput === '') {
      this.setState({errorStartLocation: true})
    }
    if (endLocationInput === '') {
      this.setState({errorSecondLocation: true})
    } else {
      this.setState({activeId: stepsList[1].stepId})
    }
  }

  yourDetails = () => {
    const {
      nameINput,
      nameError,
      startLocationInput,
      errorStartLocation,
      endLocationInput,
      errorSecondLocation,
    } = this.state

    return (
      <>
        <h1 className="label">Travel Trip</h1>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="input"
          value={nameINput}
          id="name"
          onChange={this.onChangeNameInput}
          onBlur={this.onChangeBlurName}
          placeholder="Enter name"
        />
        {nameError === true && (
          <p className="error-paragraph">Enter your name</p>
        )}
        <label className="label" htmlFor="startLocation">
          Start Location
        </label>
        <input
          type="text"
          className="input"
          value={startLocationInput}
          id="startLocation"
          onChange={this.onChangeFirstLocationInput}
          onBlur={this.onBlurFirstLocation}
          placeholder="Enter start location"
        />
        {errorStartLocation === true && (
          <p className="error-paragraph">Enter your start location</p>
        )}
        <label className="label" htmlFor="endLocation">
          End Location
        </label>
        <input
          type="text"
          className="input"
          value={endLocationInput}
          id="endLocation"
          onChange={this.onChangeSecondLocationInput}
          onBlur={this.onBlurSecondLocation}
          placeholder="Enter start location"
        />
        {errorSecondLocation === true && (
          <p className="error-paragraph">Enter your end location</p>
        )}
        <button
          className="type-button"
          type="button"
          onClick={this.onClickYourDetails}
        >
          Next
        </button>
      </>
    )
  }

  onChangeFirstDateInput = event => {
    this.setState({startDateInput: event.target.value})
  }
  onBlurFirstDate = () => {
    const {startDateInput} = this.state
    if (startDateInput === '') {
      this.setState({startDateError: true})
    } else {
      this.setState({startDateError: false})
    }
  }
  onChangeSecondDateInput = event => {
    this.setState({endDateInput: event.target.value})
  }
  onBlurSecondDate = () => {
    const {endDateInput} = this.state
    if (endDateInput === '') {
      this.setState({endDateError: true})
    } else {
      this.setState({endDateError: false})
    }
  }

  onClickDateButton = () => {
    const {startDateInput, endDateInput} = this.state
    if (startDateInput === '') {
      this.setState({startDateError: true})
    }
    if (endDateInput === '') {
      this.setState({endDateError: true})
    }

    if (startDateInput > endDateInput) {
      this.setState({dateError: true})
    }
    if (
      startDateInput !== '' &&
      endDateInput !== '' &&
      endDateInput > startDateInput
    ) {
      this.setState({activeId: stepsList[2].stepId})
    }
  }
  onClickPreviousDateButton = () => {
    this.setState({activeId: stepsList[0].stepId})
  }

  dateSelection = () => {
    const {
      startDateInput,
      startDateError,
      endDateInput,
      endDateError,
      dateError,
    } = this.state
    return (
      <>
        <label className="label" htmlFor="startDate">
          Start Date
        </label>
        <input
          type="date"
          className="input"
          value={startDateInput}
          id="startDate"
          onChange={this.onChangeFirstDateInput}
          onBlur={this.onBlurFirstDate}
          placeholder="Enter start date"
        />
        {startDateError === true && (
          <p className="error-paragraph">Select start date</p>
        )}
        <label className="label" htmlFor="endDate">
          End Date
        </label>
        <input
          type="date"
          className="input"
          value={endDateInput}
          id="endDate"
          onChange={this.onChangeSecondDateInput}
          onBlur={this.onBlurSecondDate}
          placeholder="Enter end date"
        />
        {endDateError === true && (
          <p className="error-paragraph">Select end date</p>
        )}
        {dateError === true && (
          <p className="error-paragraph">
            The end date cannot be less than the start date
          </p>
        )}
        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={this.onClickPreviousDateButton}
          >
            Previous
          </button>
          <button
            type="button"
            className="next-button"
            onClick={this.onClickDateButton}
          >
            Next
          </button>
        </div>
      </>
    )
  }

  onIncrementAdults = () => {
    this.setState(prevState => ({adultCount: prevState.adultCount + 1}))
  }

  onDecrementAdults = () => {
    const {adultCount} = this.state
    if (adultCount > 1) {
      this.setState(prevState => ({adultCount: prevState.adultCount - 1}))
    }
  }

  onIncrementChildrens = () => {
    this.setState(prevState => ({childCount: prevState.childCount + 1}))
  }

  onDecrementChildrens = () => {
    const {childCount} = this.state
    if (childCount > 0) {
      this.setState(prevState => ({childCount: prevState.childCount - 1}))
    }
  }

  onIncrementInfants = () => {
    this.setState(prevState => ({infantsCount: prevState.infantsCount + 1}))
  }

  onDecrementInfants = () => {
    const {infantsCount} = this.state
    if (infantsCount > 0) {
      this.setState(prevState => ({infantsCount: prevState.infantsCount - 1}))
    }
  }
  onClickPreviousGuestsButton = () => {
    this.setState({activeId: stepsList[1].stepId})
  }
  onClickGuestsButton = () => {
    this.setState({activeId: stepsList[3].stepId})
  }

  renderGuests = () => {
    const {adultCount, childCount, infantsCount} = this.state
    return (
      <ol className="ordered-list-container">
        <li className="guest-list">
          <div className="guest-container">
            <p className="guest-heading">Adults</p>
            <p className="guest-paragraph">Age 13 or above</p>
          </div>
          <div className="increment-button-container">
            <button
              className="increment-button"
              type="button"
              onClick={this.onDecrementAdults}
            >
              -
            </button>
            <p className="count-paragraph">{adultCount}</p>
            <button
              className="increment-button"
              type="button"
              onClick={this.onIncrementAdults}
            >
              +
            </button>
          </div>
        </li>
        <hr />
        <li className="guest-list">
          <div className="guest-container">
            <p className="guest-heading">Children</p>
            <p className="guest-paragraph">Age 2-12</p>
          </div>
          <div className="increment-button-container">
            <button
              className="increment-button"
              type="button"
              onClick={this.onDecrementChildrens}
            >
              -
            </button>
            <p className="count-paragraph">{childCount}</p>
            <button
              className="increment-button"
              type="button"
              onClick={this.onIncrementChildrens}
            >
              +
            </button>
          </div>
        </li>
        <hr />
        <li className="guest-list">
          <div className="guest-container">
            <p className="guest-heading">Infants</p>
            <p className="guest-paragraph">Under 2</p>
          </div>
          <div className="increment-button-container">
            <button
              className="increment-button"
              type="button"
              onClick={this.onDecrementInfants}
            >
              -
            </button>
            <p className="count-paragraph">{infantsCount}</p>
            <button
              className="increment-button"
              type="button"
              onClick={this.onIncrementInfants}
            >
              +
            </button>
          </div>
        </li>
        <hr />
        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={this.onClickPreviousGuestsButton}
          >
            Previous
          </button>
          <button
            type="button"
            className="next-button"
            onClick={this.onClickGuestsButton}
          >
            Next
          </button>
        </div>
      </ol>
    )
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({checkInput: !prevState.checkInput}))
  }

  onChangeSelectOption = event => {
    this.setState({selectId: event.target.value})
  }

  onClickPreviousTravrlButton = () => {
    this.setState({activeId: stepsList[2].stepId})
  }
  onClickTravelButton = () => {
    this.setState({activeId: stepsList[4].stepId})
  }

  renderTravelAssistance = () => {
    const {selectId, checkInput} = this.state
    console.log(selectId)
    return (
      <div className="travel-container">
        <div className="check-box-container">
          <input type="checkbox" onClick={this.onClickCheckBox} id="check" />

          <label className="guest-heading" htmlFor="check">
            Travel Assistance Needed
          </label>
        </div>
        {checkInput === true && (
          <>
            <h1 className="guest-heading">Travel Assistance</h1>
            <select id={selectId} onChange={this.onChangeSelectOption}>
              {travelAssistanceList.map(item => (
                <option key={item.value} value={item.value}>
                  {item.displayText}
                </option>
              ))}
            </select>
          </>
        )}
        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={this.onClickPreviousTravrlButton}
          >
            Previous
          </button>
          <button
            type="button"
            className="next-button"
            onClick={this.onClickTravelButton}
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  onClickPreviousConfirmationButton = () => {
    this.setState({
      nameINput: '',
      startLocationInput: '',
      endLocationInput: '',
      startDateInput: '',
      endDateInput: '',
      infantsCount: 0,
      adultCount: 1,
      childCount: 0,
      activeId: travelAssistanceList[0].value,
      checkInput: false,
      activeId: stepsList[0].stepId,
      confirmationPage: false,
    })
    this.yourDetails()
  }

  renderConfirmation = addTrip => {
    const {
      nameINput,
      startLocationInput,
      endLocationInput,
      startDateInput,
      endDateInput,
      adultCount,
      childCount,
      infantsCount,
      selectId,

      tripData,
    } = this.state

    return (
      <div className="confirmation-container">
        <div className="paragraph-container">
          <p className="confirmation-paragraph">Name</p>
          <p className="span">{nameINput}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">Start Location</p>
          <p className="span">{startLocationInput}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">End Location</p>
          <p className="span">{endLocationInput}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">Start Date</p>
          <p className="span">{startDateInput}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">End Date</p>
          <p className="span">{endDateInput}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">Guests</p>
          <p className="span">{adultCount + childCount + infantsCount}</p>
        </div>
        <div className="paragraph-container">
          <p className="confirmation-paragraph">Travel Assistance</p>
          <p className="span">{selectId}</p>
        </div>
        <div className="buttons-container">
          <Link to="/book-a-new-trip" className="link">
            <button
              type="button"
              className="previous-button"
              onClick={this.onClickPreviousConfirmationButton}
            >
              Cancel
            </button>
          </Link>
          <button type="submit" className="next-button">
            Confirm
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {activeId, confirmationPage, tripData} = this.state
    const updatedStepsList = stepsList.map(step => {
      if (step.stepId === activeId) {
        return {...step, completed: true}
      }
      return step
    })
    console.log(tripData)
    return (
      <MyTripContext.Consumer>
        {value => {
          const {myTripList, addTrip} = value

          return (
            <div className="bg-container">
              <Header />
              <div className="new-trip-container">
                <div className="card-container">
                  <div className="details-container">
                    <div className="step-list-container">
                      {updatedStepsList.map((eachStep, index) => (
                        <Step key={eachStep.stepId} stepDetails={eachStep} />
                      ))}
                    </div>
                    <div className="your-details-container">
                      {activeId === 'YOUR_DETAILS' && (
                        <>
                          <h1 className="details-heading">Your Details</h1>
                          <p className="details-paragraph">
                            Enter your name and location details
                          </p>
                        </>
                      )}
                      {activeId === 'DATE_SELECTION' && (
                        <>
                          <h1 className="details-heading">Date Selection</h1>
                          <p className="details-paragraph">
                            Select your start and End date
                          </p>
                        </>
                      )}
                      {activeId === 'GUESTS' && (
                        <>
                          <h1 className="details-heading">Guests</h1>
                          <p className="details-paragraph">
                            Select Your Guests
                          </p>
                        </>
                      )}
                      {activeId === 'TRAVEL_ASSISTANCE' && (
                        <>
                          <h1 className="details-heading">Travel Assistance</h1>
                          <p className="details-paragraph">
                            Select Your Travel Assistance.
                          </p>
                        </>
                      )}
                      {activeId === 'CONFIRMATION' && (
                        <>
                          <h1 className="details-heading">Confirmation</h1>
                          <p className="details-paragraph">
                            Confirm your details
                          </p>
                        </>
                      )}
                      <div className="card">
                        <form
                          className="forms"
                          onSubmit={() => onSubmitform(event, addTrip)}
                        >
                          {activeId === 'YOUR_DETAILS' && this.yourDetails()}
                          {activeId === 'DATE_SELECTION' &&
                            this.dateSelection()}
                          {activeId === 'GUESTS' && this.renderGuests()}
                          {activeId === 'TRAVEL_ASSISTANCE' &&
                            this.renderTravelAssistance()}
                          {activeId === 'CONFIRMATION' &&
                            this.renderConfirmation(myTripList, addTrip)}
                        </form>

                        {confirmationPage === true && (
                          <div className="book-new-trip-container">
                            <img
                              src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                              alt="Success"
                              className="awesome-image"
                            />
                            <h1 className="awesome-heading">Awesome!</h1>
                            <p className="awesome-paragraph">
                              Your booking has been confirmed.
                            </p>
                            <Link to="/book-a-new-trip" className="link">
                              <button
                                className="next-button"
                                onClick={this.onClickPreviousConfirmationButton}
                              >
                                Book a New Trip
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </MyTripContext.Consumer>
    )
  }
}

export default NewTrip
