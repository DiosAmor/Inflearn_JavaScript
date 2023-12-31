import React from "react";
import List from "./List.jsx";
import store from "../Store.js";

export default class HistoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      historyList: []
    };
  }
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({historyList});
  }

  handleClickRemoveHistory(keyword) {
    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    const {onClick} = this.props;
    const {historyList} = this.state;

    return (<List data={historyList} onClick={onClick} hasDate={true} onRemove={keyword => this.handleClickRemoveHistory(keyword)}/>);
  }
}