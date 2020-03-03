import { SAVE_INPUT, TOGGLE_CHECKBOX } from '../actions/types'

const initialState = {
  // Answer state presets
  fullName: '',
  loanAmount: 2000,
  loanTerm: 9,
  monthlyIncome: '',
  timeEmployed: '',
  maxLoanPerIncome: '',

  // etc.:
  step: 0,
  errUnfilled: false,
  loanAmountConfirmed: false,
  loanTermConfirmed: false,
  detailsConfirmed: false,
  answerStateNames: [
    'fullName',
    'loanAmount',
    'loanTerm',
    'monthlyIncome',
    'timeEmployed',
  ],

  entryTexts: [
    'Full name: ',
    'Your loan amount is:',
    'Your loan term is:',
    'Monthly salary, EUR:',
    'Time employed, years:',
  ],
  questions: [
    'To proceed with a small loan application, please enter your full name',
    'What is your loan amount?',
    'What is your loan term?',
    'What is your monthly salary after taxes?',
    'How many years have you been employed by your current company?',
    'Please check your details:',
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INPUT:
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        [action.target]: action.payload,
      }

    default:
      return state
  }
}
