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
const SelectingOptions = props => {
  const {item} = props
  const {optionId, displayText} = item
  return <option value={optionId}>{displayText}</option>
}

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expenses: 0,
    listItems: [],
  }

  deleteOptions = id => {
    const {listItems, income, balance, expenses} = this.state
    const filterList = listItems.filter(each => each.id !== id)
    const deletedItem = listItems.filter(item => item.id === id)
    if (deletedItem[0].type === 'INCOME') {
      console.log(deletedItem[0].type)
      this.setState(prevState => ({
        income: prevState.income - parseInt(deletedItem[0].amount),
        balance: prevState.balance - parseInt(deletedItem[0].amount),
        listItems: filterList,
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(deletedItem[0].amount),
        expenses: prevState.expenses - parseInt(deletedItem[0].amount),
        listItems: filterList,
      }))
    }
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
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      listItems: [...prevState.listItems, newItem],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  changeExpenses = event => {
    this.setState({type: event.target.value})
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
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
            <form className="form-details" onSubmit={this.addItems}>
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
                value={type}
              >
                {transactionTypeOptions.map(eachItem => (
                  <SelectingOptions item={eachItem} key={eachItem.optionId} />
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <ul className="cont2">
            <h1 className="heading1">History</h1>
            <div className="list-item">
              <p className="para3"> Title</p>
              <p className="para3"> Amount</p>
              <p className="para3"> Type</p>
            </div>
            {listItems.map(eachItem => (
              <TransactionItem
                listItems={eachItem}
                key={eachItem.id}
                deleteOptions={this.deleteOptions}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
