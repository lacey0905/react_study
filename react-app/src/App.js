import React, { Component }from 'react';
import TOC from "./components/toc";
import Content from "./components/content";
import Subject from "./components/subejct";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      selected_content_id : 2,
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
      _title = this.state.contents[this.state.selected_content_id-1].title;
      _desc = this.state.contents[this.state.selected_content_id-1].desc;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={
            function(){
              this.setState(
                {mode : 'welcome'}
              )
            }.bind(this)
          }
        ></Subject>
        <TOC 
          onChangePage={
            function(id){
              this.setState(
                {
                  mode : 'read',
                  selected_content_id : id
                }
              )
            }.bind(this)
          }
          data={this.state.contents}
        >
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
