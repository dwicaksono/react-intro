import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Search from '../src/components/Search'
import Table from '../src/components/Table'

// default params to fetch data from api

const DEFAULT_QUERY = `react`
const PATH_BASE = `http://hn.algolia.com/api/v1`
const PATH_SEARCH = `/search`
const PARAM_SEARCH = `query=`

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`
console.log(url)



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }
    // this.removeId = this.removeId.bind(this)
    this.searchValue = this.searchValue.bind(this)
    // this.fetchTopStories = this.fetchTopStories.bind(this)
    // this.setTopStories = this.setTopStories.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  setTopStories(result) {
    this.setState({ result: result })
  }
  fetchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setTopStories(result))
      .catch(err => err)
  }
  componentDidMount() {
    this.fetchTopStories(this.state.searchTerm)
  }
  onSubmit(event) {
    this.fetchTopStories(this.state.searchTerm)
    event.preventDefault()
  }
  removeId(id) {
    const { result } = this.state
    const updateList = result.hits.filter(item => item.objectID !== id)
    this.setState({ result: { ...result, hits: updateList } })
  }
  searchValue(event) {
    this.setState({ searchTerm: event.target.value })
  }
  render() {
    const { result, searchTerm } = this.state
    return (
      < div className="App" >
        <Container fluid>
          <Row>
            <Col >
              <div className="jumbotron">
                <Search onChange={this.searchValue} value={searchTerm} onSubmit={this.onSubmit}>NewsAPP</Search>
              </div>
            </Col>
          </Row>
        </Container>

        {
          result &&
          < Table result={result.hits} searchTerm={searchTerm} removeId={this.removeId} />
        }
      </div>
    )
  }
}




export default App;
