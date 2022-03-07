import React from 'react'
import { Button } from 'react-bootstrap'
import './ProductList.css'



const ProductList = ({data}) => {
    // console.log("this is props",data)
  return (
    <div>
           <table>
           <tbody>
           <tr>
               <th>Info</th>
               <th>Product Name</th>
               <th>Product Picture</th>
               <th>Product Price</th>
           </tr>
           

              {React.Children.toArray( data.map(el=>
            <tr>
                   <td>
                   <Button style={{cursor: "pointer"}} className="btn btn-primary" type="submit" onClick={()=> alert(`the price of ${el.JName} is between ${el.JPrice}`)}>Info</Button>
                  </td>
                   <td>{el.JName}</td>
                   <td><img src={el.JPicture} alt="" width='300'/></td>
                   <td>{el.JPrice}</td>
           </tr>
    ))}
           </tbody>
            </table>
    </div>
  )
}
export default ProductList