import React from 'react'
import { saveInput } from '../actions/questionActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Error from './Error'

function SliderQuestion(props) {
  // Redux
  const { data, saveInput } = props
  const { entryTexts, step, errUnfilled, questions } = props.data

  // Passed from HOC
  const { confirmValue, mainInput, minVal, maxVal, valName, toStep } = props

  const submitAnswer = () => {
    data[confirmValue] == !false
      ? (() => {
          return saveInput(false, 'errUnfilled'), saveInput(toStep, 'step')
        })()
      : saveInput(true, 'errUnfilled')
  }

  const goBack = () => {
    return saveInput(false, 'errUnfilled'), saveInput(toStep - 2, 'step')
  }
  return (
    <React.Fragment>
      {errUnfilled && <Error type="tickCheck" />}
      <h3 className="my-2">{questions[step]}</h3>
      <section className="slidecontainer mx-auto my-5">
        <input
          step={valName === '€' ? 50 : 1}
          name="loanSlider"
          type="range"
          min={minVal}
          max={maxVal}
          value={data[mainInput]}
          className="slider"
          onChange={e => saveInput(e.target.value, mainInput)}
        />
        <span className="float-left">
          {minVal} {valName}
        </span>
        <span className="float-right">
          {maxVal} {valName}
        </span>
      </section>
      <section>
        <label htmlFor="loanSlider">
          {entryTexts[step]}
          <output className="ml-2 current-value">
            {data[mainInput]} {valName}
          </output>
        </label>
        <label htmlFor="loanTick" className="d-block">
          Confirm{' '}
          <input
            type="checkbox"
            name="loanTick"
            defaultChecked={data[confirmValue]}
            onClick={e => saveInput(!data[confirmValue], confirmValue)}
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
          onClick={e => submitAnswer(e)}
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

SliderQuestion.propTypes = {
  saveInput: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { saveInput })(SliderQuestion)
