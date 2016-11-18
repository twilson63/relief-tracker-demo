const React = require('react')
const xhr = require('xhr')
const url = process.env.REACT_APP_API

const Service = (Component, model) => React.createClass({
  allDocs (callback) {
    xhr.get(`${url}/${model}`, {json: true}, (e, r, b) => {
      callback(e, b)
    })
  },
  get (id, callback) {
    xhr.get(`${url}/${model}/${id}`, {json: true}, (e, r, b) => {
      callback(e, b)
    })
  },
  post (doc, callback) {
    xhr.post(`${url}/${model}`, {json: doc}, (e, r, b)  => {
      callback(e, b)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${url}/${model}/${id}`, {json: doc}, (e, r, b)  => {
      callback(e, b)
    })
  },
  query(criteria, callback) {
    xhr.get(`${url}/${model}?${criteria}`, {json: true}, (e, r, b) => {
      callback(e, b)
    })
  },
  remove (doc, callback) {
    xhr.delete(`${url}/${model}\${doc._id}`, {json: doc}, (e,r,b) => callback(e,b))
  },
  render() {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        get={this.get}
        post={this.post}
        put={this.put}
        query={this.query}
        remove={this.remove}
        />

    )
  }
})

module.exports = Service
