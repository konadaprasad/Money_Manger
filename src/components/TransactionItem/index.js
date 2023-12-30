import './index.css'

const TransactionItem = props => {
  const {listItems, deleteOptions} = props
  const {id, title, amount, type} = listItems

  const deleteItem = () => {
    deleteOptions(id)
  }
  let typeItem = ''
  if (type === 'INCOME') {
    typeItem = 'Income'
  } else {
    typeItem = 'Expenses'
  }
  return (
    <li className="list-item">
      <p className="para4">{title}</p>
      <p className="para4"> RS {amount}</p>
      <p className="para4">{typeItem}</p>
      <button
        onClick={deleteItem}
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
