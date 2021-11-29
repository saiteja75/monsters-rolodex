import React, {Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name:'franklen',
          id:1,
          email:'franklen@mail.com'
        },
        {
          name:'zombie',
          id:2,
          email:'zombie@mail.com'
        },
        {
          name:'drukula',
          id:3,
          email:'drukula@mail.com'
        }
      ],
      searchField:''
    }

  }

  componentDidMount() {
    
  }

  handler = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    console.log(searchField)
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField 
          placeholder='search monsters' 
          handler={this.handler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
