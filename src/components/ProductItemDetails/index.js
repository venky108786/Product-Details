// Write your code here
import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'

class ProductItemDetails extends Component {
  componentDidCatch() {
    this.productItemDetails()
  }

  productItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const productCardUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(productCardUrl, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <h1>Hello guru Premakosamena ee jivitham</h1>
  }
}
export default ProductItemDetails
