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
    return "hello world";
  }
  // render () {
  //   const { data } = this.props;
  //   return (
  //     <div>
  //       <h1>Products</h1>
  //       <ul>
  //         {data.map(product => (
  //           <li key={product.id}>
  //             {product.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  //}
}


class ParentThatFetches extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/products/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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


