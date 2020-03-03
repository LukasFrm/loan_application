import React from 'react'
import './styles/App.css'

import LoanDenied from './components/LoanDenied'
import SliderQuestion from './components/SliderQuestion'
import InputQuestion from './components/InputQuestion'
import DetailsTable from './components/DetailsTable'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


function App(props) {
  const { step } = props
  return (
    <div className="App py-1">
      <h1>Small loan application</h1>
      <React.Fragment>
        {step === 0 && <InputQuestion  mainInput='fullName' type='text' toStep={1} />}
        {step === 1 && <SliderQuestion confirmValue='loanAmountConfirmed' mainInput='loanAmount' minVal='600' maxVal='20000' valName='€' toStep={2} />}
        {step === 2 && <SliderQuestion confirmValue='loanTermConfirmed' mainInput='loanTerm' minVal='6' maxVal='60' valName='months' toStep={3} />}
        {step === 3 && <InputQuestion mainInput='monthlyIncome' minVal='350' type='number' toStep={4} />}
        {step === 4 && <InputQuestion  mainInput='timeEmployed' minVal='1' maxVal='70' type='number' toStep={5} />}
        {step === 5 && <DetailsTable confirmValue='loanAmountConfirmed' />}
        {step === 6 && (
          <h4 className="my-2">Thank you, your application was sent!</h4>
        )}
        {step === -1 && <LoanDenied />}
      </React.Fragment>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    step: state.reduxState.step,
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(App)
