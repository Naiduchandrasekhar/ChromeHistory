import {Component} from 'react'
import './index.css'
import Listitem from '../Listitem/index'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class Browser extends Component {
  state = {searchValue: '', browserHistory: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onDeleteItem = id => {
    const {browserHistory} = this.state
    const filterData = browserHistory.filter(eachData => eachData.id !== id)
    this.setState({browserHistory: filterData})
  }

  render() {
    const {searchValue, browserHistory} = this.state
    const result = browserHistory.filter(eachItem =>
      eachItem.domainUrl.toLowerCase().includes(searchValue.toLowerCase()),
    )

    const lengthRes =
      result.length === 0 ? (
        <div className="history">
          <p>There is no history to show</p>
        </div>
      ) : (
        <ul>
          {result.map(eachList => (
            <Listitem
              eachList={eachList}
              key={eachList.id}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      )

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="historyBar">
            <img
              className="historyImg"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="searchImgBox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchImage"
              />
              <input
                type="search"
                className="inputBox"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="secondBgContainer">
            <div className="whiteCardContainer">{lengthRes}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Browser
