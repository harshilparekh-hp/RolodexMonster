import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      // monsters: [
      //   {
      //     name: 'Frankestine',
      //     Key: '1',
      //   },
      //   {
      //     name: 'Drakula',
      //     Key: '2',
      //   },
      //   {
      //     name: 'Zombie',
      //     Key: '3',
      //   },
      // ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((f) =>
      f.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
