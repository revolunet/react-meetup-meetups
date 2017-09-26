import React from "react"

import fetchJsonp from "fetch-jsonp"

require("es6-promise").polyfill()

export default class Meetups extends React.Component {
  state = {
    results: null
  }
  componentDidMount() {
    const { apiKey, meetupsIds } = this.props
    const url = `https://api.meetup.com/2/events?group_id=${meetupsIds.join(
      ","
    )}&status=upcoming&order=time&limited_events=False&desc=false&offset=0&format=json&page=50&fields=&sign=true&key=${apiKey}`

    const response = fetchJsonp(url)
      .then(r => r.json())
      .then(response => {
        this.setState({ results: response.results })
      })
  }
  render() {
    const { render, loading } = this.props
    if (this.state.results) {
      return <div>{render(this.state.results)}</div>
    } else {
      return <div>{loading()}</div>
    }
  }
}
