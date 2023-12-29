// Write your code here
import './index.css'

const TransactionItem = props => {
  const {listItems} = props
  const {title, amount, type} = listItems

  const deleteItem = () => {}
  return (
    <li className="list-item">
      <p className="para4">{title}</p>
      <p className="para4">{amount}</p>
      <p className="para4">{type}</p>
      <button
        onClick={deleteItem()}
        className="delete-btn"
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
