import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Search from '../src/components/Search'
import Table from '../src/components/Table'
import Page from '../src/components/Page'

const DEFAULT_QUERY = `react`
const DEFAULT_PAGE = 0

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      searchTerm: DEFAULT_QUERY,
      pageNum: DEFAULT_PAGE
    }
  }

  setTopStories(result) {
    this.setState({ result: result.hits })
  }
  fetchTopStories(searchTerm, pageNum) {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${pageNum}`)
      .then(response => response.json())
      .then(result => this.setTopStories(result))
      .catch(err => err)
  }
  componentDidMount() {
    this.fetchTopStories(this.state.searchTerm, this.state.pageNum)
  }
  onSubmit(event) {
    event.preventDefault()
    this.fetchTopStories(this.state.searchTerm, this.state.pageNum)
  }
  removeId(id) {
    const { result } = this.state
    const updateList = result.filter(item => item.objectID !== id)
    this.setState({ result: updateList })
  }
  searchValue(event) {
    this.setState({ searchTerm: event.target.value })
  }
  nextPage() {
    this.setState({ pageNum: this.state.pageNum + 1 })
    this.fetchTopStories(this.state.searchTerm, this.state.pageNum)
  }
  prevPage() {
    if (this.state.pageNum > 0) {
      this.setState({ pageNum: this.state.pageNum - 1 })
      this.fetchTopStories(this.state.searchTerm, this.state.pageNum)
    }
  }
  render() {
    return (
      < div className="App" >
        <Container>
          <Row>
            <Col>
              <div className="jumbotron">
                <Search onChange={(event) => this.searchValue(event)} value={this.state.searchTerm} onSubmit={(event) => this.onSubmit(event)}>NewsAPP</Search>
              </div>
              {this.state.result.map(el => {
                return <Table title={el.title} author={el.author} points={el.points} comment={el.num_comments} key={el.objectID} url={el.url} deleted={(e) => this.removeId(el.objectID)} />
              })}
              <Page next={() => this.nextPage()} prev={() => this.prevPage()} />
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default App;
