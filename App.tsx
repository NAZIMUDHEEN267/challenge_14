import React from 'react';
import Form from './src/screens/Form';
import Table from './src/screens/Table';
import ShowContext from './src/Context';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true
    };

  }

  render() {
    return (
      <ShowContext.Provider value={{ callback: this.setState.bind(this)}}>
        { this.state.show ? <Form /> : <Table /> }
      </ShowContext.Provider>
    );
  }
    }
export default App;
