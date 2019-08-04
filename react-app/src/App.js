import React, { Component }from 'react';
import TOC from "./components/toc";
import Content from "./components/content";
import Subject from "./components/subejct";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'welcome',
      subject : {title : 'WEB', sub : 'Hello World!'},
      welcome : {title : 'Welcome', desc : 'Hello, React!!'},
      contents : [
        {id:1, title:'HTML', desc:'HTML Content'},
        {id:2, title:'CSS', desc:'CSS Content'},
        {id:3, title:'JS', desc:'JS Content'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        
        <header>
            <h1><a href="/" 
              onClick={
                function(event){
                  event.preventDefault();
                }
              }
            >{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
