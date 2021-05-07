// @ts-nocheck
import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <figure>
        <a href={this.props.link}>
          <img src={this.props.image} alt={this.props.name} />
        </a>
        <div className="triangle" />
        <div className="userphotos">
          <figcaption>{this.props.number}</figcaption>
          <figcaption>
            the
            <a href={this.props.link}>{this.props.name}</a>
            by
          </figcaption>
          {this.props.author.map(auth => {
            return (
              <a href={auth.link}>
                <img src={auth.image} />
              </a>
            )
          })}
        </div>
      </figure>
    )
  }
}

export default Octocat
