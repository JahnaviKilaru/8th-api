import axios from 'axios'
import React, { Component } from 'react'

export default class Products extends Component {
  state={
    products:[]
  }
  componentDidMount(){
    axios.get("http://65.0.100.29:2008/products")
    .then((res)=>{
      //console.log(res)
      this.setState({
        products:res.data
      })
    })
  }
  render() {
    //console.log(this.state.products)
    return (
      <div> 
        products
        {
          this.state.products.map((pitem)=>(
            <div key={pitem.image}>
              <p>Name:{pitem.name}</p>
              <p><img src={pitem.image} width="20%" alt={pitem}/></p>
              <p>price:{pitem.price}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
