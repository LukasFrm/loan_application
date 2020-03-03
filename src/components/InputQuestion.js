import React from 'react'
import { saveInput } from '../actions/questionActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Error from './Error'

function InputQuestion(props) {
  // Redux
  const { data, saveInput } = props
  const { errUnfilled, questions, step, entryTexts } = props.data

  // Passed from HOC
  const { mainInput, minVal, maxVal, type, toStep } = props

  const submitAnswer = e => {
    e.preventDefault()
    data[mainInput] !== ''
      ? (() => {
          return saveInput(toStep, 'step'), saveInput(false, 'errUnfilled')
        })()
      : saveInput(true, 'errUnfilled')
  }

  const goBack = () => {
    return saveInput(false, 'errUnfilled'), saveInput(toStep - 2, 'step')
  }

  return (
    <React.Fragment>
      {errUnfilled && <Error type="stringCheck" />}
      <h3 className="my-2">{questions[step]}</h3>
      <form className="mt-5" onSubmit={e => submitAnswer(e)}>
        <label htmlFor={mainInput}>{entryTexts[step]}</label>
        <input
          type={type}
          name={mainInput}
          value={data[mainInput]}
          onChange={e => saveInput(e.target.value, mainInput)}
          className="form-control ml-2"
          min={minVal}
          max={maxVal}
        />
        <section className="btnSection mt-3 py-1">
          {step !== 0 && (
            <button
              className="ml-5 d-block float-left"
              onClick={() => goBack()}
              className="btn defaultBtn"
              type="button"
            >
              🢀 Go Back
            </button>
          )}
          <input
            className="ml-5 d-block"
            // onClick={e => submitAnswer(e)}
            className="btn defaultBtn"
            type="submit"
            value={step === 0 ? 'Login' : 'Forward 🢂'}
          ></input>
        </section>
      </form>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    data: state.reduxState,
  }
}

InputQuestion.propTypes = {
  saveInput: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { saveInput })(InputQuestion)
