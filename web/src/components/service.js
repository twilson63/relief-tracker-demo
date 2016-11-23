const React = require('react')
const xhr = require('xhr')
const url = process.env.REACT_APP_API

const Service = (Component) => React.createClass({
  getHeaders () {
    return {
      authorization: `Bearer ${localStorage.getItem('id_token')}`
    }
  },
  allDocs (model, callback) {
    xhr.get(`${url}/${model}`, {
      headers: this.getHeaders(),
      json: true
    }, (e, r, b) => {
      callback(e, b)
    })
  },
  get (model, id, callback) {
    xhr.get(`${url}/${model}/${id}`, {
      headers: this.getHeaders(),
      json: true
    }, (e, r, b) => {
      callback(e, b)
    })
  },
  post (model, doc, callback) {
    xhr.post(`${url}/${model}`, { headers: this.getHeaders(), json: doc}, (e, r, b)  => {
      callback(e, b)
    })
  },
  put (model, id, doc, callback) {
    xhr.put(`${url}/${model}/${id}`, {headers: this.getHeaders(), json: doc}, (e, r, b)  => {
      callback(e, b)
    })
  },
  query(model, criteria, callback) {
    xhr.get(`${url}/${model}?${criteria}`, {headers: this.getHeaders(), json: true}, (e, r, b) => {
      callback(e, b)
    })
  },
  remove (model, doc, callback) {
    xhr.delete(`${url}/${model}\${doc._id}`, {headers: this.getHeaders(), json: doc}, (e,r,b) => callback(e,b))
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
