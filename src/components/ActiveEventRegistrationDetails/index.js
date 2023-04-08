import {Component} from 'react'

import './index.css'

const listOf = {
  INITIAL: 'initial',
  REGISTERED: 'registered',
  YET_TO_REGISTER: 'yetToRegister',
  REGISTRATIONS_CLOSED: 'registrationsClosed',
}

class RegistrationStatus extends Component {
  toRegister = () => (
    <div className="inner-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-image"
      />
      <p className="to-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  registered = () => (
    <div className="inner-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  closed = () => (
    <div className="inner-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed"
      />
      <h1 className="closed-head">Registrations Are Closed Now!</h1>
      <p className="closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  initial = () => (
    <div className="initial-cont">
      <p className="initial-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  render() {
    const {itemOf} = this.props
    const newItem = listOf[itemOf]
    switch (newItem) {
      case 'yetToRegister':
        return this.toRegister()
      case 'registered':
        return this.registered()
      case 'registrationsClosed':
        return this.closed()
      case 'initial':
        return this.initial()
      default:
        return null
    }
  }
}
export default RegistrationStatus
