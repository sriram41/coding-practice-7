// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props

  const {value} = denominationDetails

  const denominationValue = () => {
    updateBalance(value)
  }

  return (
    <li className="sec-totalContainer">
      <button type="button" className="buttonName" onClick={denominationValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
