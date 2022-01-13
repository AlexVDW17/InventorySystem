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
    this.state = {};
  }
  render(){

    return <div>{this.props.data}</div>;
  }
  
}


class ParentThatFetches extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("http://127.0.0.1:8000/products/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => this.setState({data: result}))
    //   .catch(error => console.log('error', error));
    GetAllProducts().then(result => this.setState({data: result}));
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
  var products = "hi";
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