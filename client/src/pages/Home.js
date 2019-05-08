import React, {Component} from "react";
import ResultBox from "../components/cards/index.js";

class Home extends Component {

  render() { 
    return (
      <div>
        <ResultBox 
        src = "https://cdn.shopify.com/s/files/1/1365/2497/products/12676-BananaSlugMask-Sky_900x.jpg?v=1520535633"
        name = "Logan's Snack Shack" 
        description = "A funky little venue where people come together to honor a man named 'Loggy', who, unfortunately, to his and everyone's dismay, tripped over a log and died." 
        genre = "alternative" 
        date = "Nov 5th"/>
      </div>
    );
  }
}

export default Home;
