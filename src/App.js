import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <h1>Invoice</h1>
              <address contentEditable>
                  <p>who is this invoice from ?</p>
              </address>
              <span><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png" /><input type="file" accept="image/*" /></span>
          </header>
          <article>
              <h1>Recipient</h1>
              <address contentEditable>
                  <p>Bill To</p>
              </address>
              <table className="meta">
                  <tr>
                      <th><span contentEditable>Invoice #</span></th>
                      <td><span contentEditable>1</span></td>
                  </tr>
                  <tr>
                      <th><span contentEditable>Date</span></th>
                      <td><span contentEditable>may 12, 2018</span></td>
                  </tr>
                  <tr>
                      <th><span contentEditable>Amount Due</span></th>
                      <td><span id="prefix" contentEditable>$</span><span>600.00</span></td>
                  </tr>
              </table>
              <table className="inventory">
                  <thead>
                  <tr>
                      <th><span contentEditable>Item</span></th>
                      <th><span contentEditable>Description</span></th>
                      <th><span contentEditable>Rate</span></th>
                      <th><span contentEditable>Quantity</span></th>
                      <th><span contentEditable>Price</span></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td><a className="cut">-</a><span contentEditable>laptop</span></td>
                      <td><span contentEditable>Experience Review</span></td>
                      <td><span data-prefix>$</span><span contentEditable>150.00</span></td>
                      <td><span contentEditable>4</span></td>
                      <td><span data-prefix>$</span><span>600.00</span></td>
                  </tr>
                  </tbody>
              </table>
              <a className="add">+Add Item</a>
              <table className="balance">
                  <tr>
                      <th><span contentEditable>Total</span></th>
                      <td><span data-prefix>$</span><span>600.00</span></td>
                  </tr>
                  <tr>
                      <th><span contentEditable>Amount Paid</span></th>
                      <td><span data-prefix>$</span><span contentEditable>0.00</span></td>
                  </tr>
                  <tr>
                      <th><span contentEditable>Balance Due</span></th>
                      <td><span data-prefix>$</span><span>600.00</span></td>
                  </tr>
              </table>
          </article>
      </div>
    );
  }
}

export default App;
