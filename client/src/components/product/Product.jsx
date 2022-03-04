import React, {Component} from "react";
import axios from 'axios';
import Main from "../templates/Main";

const baseUrl = 'http://localhost:3001/produtos'
const initialState = {
  list: []
}

export default class Product extends Component {

  state = { ...initialState }

  componentWillMount() {
      axios(baseUrl).then(resp => {
          this.setState({ list: resp.data })
      })
  }


  getUpdatedList(product, add = true) {
      const list = this.state.list.filter(u => u._id !== product._id)
      if(add) list.unshift(product)
      return list
  }

  renderTable() {
      return (
          <table className="table mt-4">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderRows()}
              </tbody>
          </table>
      )
  }

  renderRows() {
      return this.state.list.map(product => {
          return (
              <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.email}</td>
              </tr>
          )
      })
  }
  
  render() {
      return (
          <Main {...headerProps}>
              {this.renderTable()}
          </Main>
      )
  }
}