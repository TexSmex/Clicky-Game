import React, { Component } from "react";
import Cartoons from "./components/Cartoons";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import cartoons from "./cartoons.json";
import "./App.css";

class App extends Component {


  // Setting this.state.cartoons to the cartoons json array
  state = {
    score:0,
    topScore:0,
    idArr:[],
    cartoons,
    title:"Click an image to begin!"
  };

 

  // shake = () => {

  // }
  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


  
  

  

  clickGame = (id) => {
    
    if (this.state.idArr.indexOf(id)===-1) {

    this.shuffle(this.state.cartoons);
    this.state.idArr.push(id);
    this.setState({ score: this.state.score + 1 });
    this.setState({title : "You guessed correctly!"})
    
    }
    else {

  this.shuffle(this.state.cartoons);
  if (this.state.score>this.state.topScore) { this.setState({ topScore : this.state.score }) }
  this.setState({ idArr:[] });
  this.setState({ score:0 });
  this.setState({title : "You guessed incorrectly!"})
  }
  }


  componentWillMount()  {
    this.shuffle(this.state.cartoons)
  }

  render() {
    return (
     <div>
       <Navbar
       title = {this.state.title}
       score = {this.state.score}
       topScore =  {this.state.topScore}
       />
 

        <Wrapper >

        {/* Map over this.state.cartoons and render a cartoons tag component for each cartoon object */}
        {this.state.cartoons.map(cartoon => (
          <Cartoons
            
            id={cartoon.id}
            key={cartoon.id}
            clickGame={this.clickGame}
            image={cartoon.image}
           
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
