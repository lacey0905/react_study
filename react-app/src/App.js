import React, { Component }from 'react';
import TOC from "./components/toc";
import ReadContent from "./components/readContent";
import CreateContent from "./components/createContent";
import Subject from "./components/subejct";
import Control from "./components/control";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode : 'create',
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } 
    else if(this.state.mode === 'read'){
      _title = this.state.contents[this.state.selected_content_id-1].title;
      _desc = this.state.contents[this.state.selected_content_id-1].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } 
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {
        //     id : this.max_content_id, 
        //     title : _title,
        //     desc : _desc
        //   }
        // )
        var _contents = this.state.contents.concat(
          {
            id : this.max_content_id, 
            title : _title,
            desc : _desc
          }
        ) 
        this.setState(
          { contents : _contents }
        )
      }.bind(this)}></CreateContent>
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
        <Control onChangeMode={
          function(_mode){
            this.setState({
              mode : _mode 
            });
          }.bind(this)}>
        </Control>
        {_article}
      </div>
    )
  }
}

export default App;
