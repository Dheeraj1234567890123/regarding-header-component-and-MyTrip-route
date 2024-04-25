import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NewTrip from './components/NewTrip'
import NotFound from './components/NotFound'
import MyTrips from './components/MyTrips'
import MyTripContext from './Context/MyTripContext'
import './App.css'

// Note: Use the lists in your code to pass the test cases
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

// Replace your code here
class App extends Component {
  state = {myTripList: []}
  addTrip = trip => {
    this.setState(prevState => ({myTripList: [prevState.myTripList, trip]}))
  }
  render() {
    const {myTripList} = this.state
    return (
      <MyTripContext.Provider value={{myTripList, addTrip: this.addTrip}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/book-a-new-trip" component={NewTrip} />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MyTripContext.Provider>
    )
  }
}

export default App
