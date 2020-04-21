import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

export class App extends Component {

    state={
        fishes:{},
        order:{}
    };

    addFish = fish => {
        console.log('new fish is  ' , fish);
          //1. Take copy os existing state
        const fishes = {...this.state.fishes};

        //2. add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes       //or only - fishes as property name and value is same
        },()=>{
          console.log('state is done --> ' , this.state.fishes);
        })
      //  console.log('state is --> ' , this.state.fishes);
    };
loadSampleFishes =() =>{
  alert("load sample fishes !!!");
  this.setState({
    fishes: sampleFishes}, () => {
        console.log('sample fishes loaded --> ' , this.state);
    });
};

addToOrder = (key) =>{
  console.log('key : ' , key);
  //1. take a copy of setState
    const order= {...this.state.order};

  //2. either add to order or update number of Order
    order[key] = order[key] + 1 || 1;

  //3. call setState to update state Object
  this.setState({order},() =>{
    console.log('this.state in addToOrder: ' , this.state);
  });
}
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">

{
  Object.keys(this.state.fishes).map(key => <Fish
        key={key}
        index={key}
        details={this.state.fishes[key]}
        addToOrder={this.addToOrder} />)
}
                    </ul>

                </div>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
                <Order fishes={this.state.fishes} order={this.state.order}/>
            </div>
        )
    }
}

export default App;
