import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score:0,
    topScore:0,
    idArr:[],
    friends
  };

  incrementScore = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
  

  AlertHell = (id) => {
    
    if (this.state.idArr.indexOf(id)===-1) {
    
    this.shuffle(this.state.friends);
    this.state.idArr.push(id);
    this.setState({ score: this.state.score + 1 });
    
    }
    else {

     

 
  if (this.state.score>this.state.topScore) { this.setState({ topScore : this.state.score }) }
  this.setState({ idArr:[] });
  this.setState({ score:0 });


  
  }

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Score>Score: {this.state.score} | Top Score: {this.state.topScore} | Last Score: {this.state.lastScore}</Score>
        {this.state.friends.map(friend => (
          <FriendCard
            
            id={friend.id}
            key={friend.id}
            AlertHell={this.AlertHell}
            image={friend.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
