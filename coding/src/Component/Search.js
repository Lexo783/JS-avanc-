import React from 'react';
import TableGame from "../data/TableGame";
import List from "./List";


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    let tableName = [];
    for (let i=0; i<TableGame.length; i++){
        tableName.push(TableGame[i].name);
    }

    this.state = {
          table : TableGame,
        list: tableName,
        props :this.props
    };

    this.removeItem = this.removeItem.bind(this);
  }


  removeItem(item) {
    // Put our list into an array
    const list = this.state.table.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item.name) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      table: list
    });
  }


  render() {
    return (
      <div className="content">
        <List items={this.state.table} delete={this.removeItem} />
      </div>
    );
  }
}








