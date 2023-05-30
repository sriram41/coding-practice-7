// Write your code here
// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(pevState => ({balance: pevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.splice(0, 1)

    return (
      <div className="total-container">
        <div className="block-1">
          <div className="block-2">
            <div className="block-3">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balanceContainer">
            <p>your Balance</p>
            <p>
              {balance}
              <br />
              <span>In Rupees</span>
            </p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>

          <ul className="denominationsList">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
