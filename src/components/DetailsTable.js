import React from 'react'
import { saveInput } from '../actions/questionActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Error from './Error'

function DetailsTable(props) {
  const { data, saveInput } = props
  const {
    answerStateNames,
    detailsConfirmed,
    loanAmount,
    errUnfilled,
    entryTexts,
    monthlyIncome,
    loanTerm
  } = props.data

  const confirmLoan = e => {
    e.preventDefault()
    detailsConfirmed !== false
      ? (() => {
          return (
            saveInput('errUnfilled', false),
            loanDenied() ? saveInput(-1, 'step') : saveInput(6, 'step')
          )
        })()
      : saveInput(true, 'errUnfilled')
  }

  const goBack = () => {
    return saveInput(false, 'errUnfilled'), saveInput(4, 'step')
  }

  const loanDenied = () => {
    return loanAmount > Math.floor((monthlyIncome / 10) * loanTerm) ? true : false
  }

  return (
    <React.Fragment>
      {errUnfilled && <Error type='tickCheck' />}
      <h4 className="my-2">Please check your details:</h4>
      <section className="text-center">
        <table className="mx-auto">
          <tbody>
            {entryTexts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{data[answerStateNames[index]]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <label htmlFor="loanTick" className="d-block">
          Confirm{' '}
          <input
            type="checkbox"
            name="loanTick"
            defaultChecked={detailsConfirmed}
            onClick={() => saveInput(!detailsConfirmed, 'detailsConfirmed')}
          />
        </label>
      </section>
      <section className="btnSection mt-3 py-1">
        <button
          className="ml-5 d-block float-left"
          onClick={() => goBack()}
          className="btn defaultBtn"
          type="button"
        >
          🢀 Go Back
        </button>
        <button
          className="ml-5 d-block"
          onClick={e => confirmLoan(e)}
          className="btn defaultBtn"
          type="button"
        >
          Forward 🢂
        </button>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    data: state.reduxState,
  }
}

DetailsTable.propTypes = {
  saveInput: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { saveInput })(DetailsTable)
