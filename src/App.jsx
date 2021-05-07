// @ts-nocheck
// @ts-ignore
import React, { Component } from 'react'
import Octocat from './components/Octocat'
import { FuncOctocat } from './components/FuncOctocat'
import octocats from './data.json'

export class App extends Component {
  // state = {
  //   data: [],
  // }
  // componentDidMount() {
  //   fetch('https://sdg-octodex.herokuapp.com/')
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ data: data.data }))
  // }
  render() {
    return (
      <>
        {octocats.data.map(cat => {
          return (
            <FuncOctocat
              name={cat.name}
              link={cat.link}
              image={cat.image}
              author={cat.authors}
            />
          )
        })}
      </>
    )
  }
}
