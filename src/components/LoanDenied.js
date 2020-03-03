import React, { useState } from 'react'
import { saveInput } from '../actions/questionActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function LoanDenied(props) {
  const { monthlyIncome, loanTerm } = props.data

  const { saveInput } = props

  // Max loan/month is 10% of the salary
  let maxLoanPerIncome = Math.floor((monthlyIncome / 10) * loanTerm)

  // 350 / 10 * 20

  return (
    <React.Fragment>
      <section>
        <h3 className="my-2">
          Unfortunately, your loan application was denied
        </h3>
        <p>
          With your current income, you are eligible for a loan of no more than{' '}
          {maxLoanPerIncome} €
        </p>
        {maxLoanPerIncome < 600 ? (
          <p>This offer falls below our minimum offered loan</p>
        ) : (
          <p>
            If you find this offer satisfactory, you can go back and edit your
            loan amount.
          </p>
        )}
      </section>
      {maxLoanPerIncome > 600  && <section className="btnSection mt-3 py-1">
        <button
          className="ml-5 d-block float-left"
          onClick={() => saveInput(1, 'step')}
          className="btn defaultBtn"
          type="button"
        >
          🢀 Go Back
        </button>
      </section>}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    data: state.reduxState,
  }
}

LoanDenied.propTypes = {
  saveInput: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { saveInput })(LoanDenied)
