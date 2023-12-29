import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-container">
      <div className="bal-cont" data-testid="balanceAmount">
        <div className="img1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="balance-img"
            alt="balance"
          />
        </div>
        <div className="details">
          <p className="para1">Your Balance</p>
          <p className="para2">RS {balance}</p>
        </div>
      </div>
      <div className="income-cont" data-testid="incomeAmount">
        <div className="img1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="balance-img"
            alt="income"
          />
        </div>
        <div className="details">
          <p className="para1">Your Income</p>
          <p className="para2">RS {income}</p>
        </div>
      </div>
      <div className="expenses-cont" data-testid="expensesAmount">
        <div className="img1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="balance-img"
            alt="expenses"
          />
        </div>
        <div className="details">
          <p className="para1">Your Income</p>
          <p className="para2">RS {income}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
