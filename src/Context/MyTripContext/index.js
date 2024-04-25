import React from 'react'

const MyTripContext = React.createContext({
  myTripList: [],
  addTrip: () => {},
})

export default MyTripContext
