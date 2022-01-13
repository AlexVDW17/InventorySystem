import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



class Child extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: props.data,};
  }

  renderRow(product) {
    return (
      <tr>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>{ product.description }</td>
        <td>{ product.price }</td>
        <td>{ product.stock }</td>
      </tr>
    );
  };



  render(){
    if(this.props.data!==undefined) {
      const products = JSON.parse(this.props.data);
      
      return (
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          {products.map(this.renderRow)}
        </table>
      );
    }
    return <div>"waiting"</div>
  }
  
}


class ParentThatFetches extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    
    GetAllProducts()
    .then(result => this.setState({data: result}));
  }

  render () {
   
    return  <Child data={this.state.data} />
    
  }
}
// ========================================
  
ReactDOM.render(
  <ParentThatFetches />,
  document.getElementById('root')
);

async function GetAllProducts(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var products = "hi there shopify devs!";
  await fetch("http://127.0.0.1:8000/products/", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      products = result;
    })
    .catch(error => console.log('error', error));
    return products;
}

function CreateProduct(name, sku, description, price, stock) {
  var formdata = new FormData();
  formdata.append("name", name);
  formdata.append("sku", sku);
  formdata.append("description", description);
  formdata.append("price", price);
  formdata.append("stock", stock);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/products/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function EditProduct(id, name, sku, description, price, stock){
  var formdata = new FormData();
  formdata.append("name", name);
  formdata.append("sku", sku);
  formdata.append("description", description);
  formdata.append("price", price);
  formdata.append("stock", stock);
  
  var requestOptions = {
    method: 'PUT',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/products/" + id + "/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function DeleteProduct(id){
  var formdata = new FormData();

  var requestOptions = {
    method: 'DELETE',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/products/" + id + "/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}