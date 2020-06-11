import React,{Component ,Fragment} from 'react';
import Header from'./composant/header/index';
import Nav from './composant/nav/index';
import Content from'./composant/content/index';
import { BackTop } from "antd";


class App extends Component{
  render(){
    return (
      <Fragment>
        <Header></Header>
        <Nav></Nav>
        <Content></Content>
      </Fragment>
  )}
}

export default App;
