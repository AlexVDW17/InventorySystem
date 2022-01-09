
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// a class for the inventory system
class InventorySystem extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      // the inventory system starts with no items
      items: [],
      
    };
  }


  createProduct(SKU, name, price, quantity , description) {

  }

  getProduct(SKU) {
  
  }

  updateProduct(SKU, name, price, quantity, description) {
  
  }

  updateProductSKU(oldSKU, newSKU) {
  
  }

  deleteProduct(SKU) {
  
  }

  getAllProducts() {
  
  }

  searchProducts(searchTerm) {
      //banana - need to search the items in the state here to display only the desired item?
  }
}

class Item extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      // the item starts with no name
      name: '',
      
    };
  }

  //crud funtions for Item
  createItem(SKU, location) {
  
  }
  
}