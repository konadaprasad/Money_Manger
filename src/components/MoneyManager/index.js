import {Component} from 'react'
import {v4 as uvId} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    balance: 0,
    income: 0,
    expenses: 0,
    listItems: [],
  }

  addItems = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newItem = {
      id: uvId(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      listItems: [...prevState.listItems, newItem],
      title: '',
      amount: '',
      type: '',
    }))
  }

  changeExpenses = event => {
    this.setState({type: event.target.value})
  }

  titleChange = event => {
    this.setState({title: event.target.value})
    console.log('hi')
  }

  amountChange = event => {
    console.log(event.target.value)
    this.setState({amount: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      listItems,
    } = this.state
    console.log(listItems)
    return (
      <div className="container">
        <div className="manger-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="span-item">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="form-container">
          <div className="input-cont">
            <h1 className="heading1">Add Transaction</h1>
            <form className="form-details" onChange={this.addItems}>
              <label htmlFor="titleId" className="lbl">
                TITLE
              </label>
              <input
                className="title-input"
                id="titleId"
                placeholder="TITLE"
                type="text"
                value={title}
                onChange={this.titleChange}
              />
              <label htmlFor="amountId" className="lbl">
                AMOUNT
              </label>
              <input
                className="title-input"
                id="amountId"
                placeholder="AMOUNT"
                type="text"
                value={amount}
                onChange={this.amountChange}
              />
              <label htmlFor="typeId" className="lbl">
                TYPE
              </label>
              <select
                className="title-input"
                id="typeId"
                onChange={this.changeExpenses}
              >
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="cont2">
            <p className="heading1">History</p>
            <ul className="un-orderList">
              <li className="list-item">
                <p className="para3">Title</p>
                <p className="para3">Amount</p>
                <p className="para3">Type</p>
                <div> </div>
              </li>
              {listItems.map(eachItem => (
                <TransactionItem listItems={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
