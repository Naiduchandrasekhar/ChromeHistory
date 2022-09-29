import './index.css'

const Listitem = props => {
  const {eachList, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachList

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="listItems">
      <div className="divControl">
        <div className="timeTitleDiv">
          <p className="timeAccess">{timeAccessed}</p>
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <div>
          <button className="delete" type="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Listitem
