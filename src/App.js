import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectItem from './PROJ/ProjectItem.js';
import AddProject from './PROJ/AddProject.js';
const projects = [
{
  name: 'Artificial Intelligence',
  description: 'It involves making gadgets that act like humans'
},
{
  name: 'Project Management',
  description: 'Learning on how to manage projects'
}

];
localStorage.setItem('projects', JSON.stringify(projects)); 

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      projects: JSON.parse(localStorage.getItem('projects'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentWillMount(){
    const projects = this.getProjects();
    this.setState({ projects });
  }
getProjects(){
  return this.state.projects;
    
}
onAdd(name,description){
   const projects = this.getProjects();

   projects.push({
     name,
     description
   });
   this.setState({projects});
}

onDelete(name){
  const projects = this.getProjects();

  const filteredProjects = projects.filter(projects => {
    return projects.name !==name;
  });

  this.setState({ projects: filteredProjects});
}
render(){
 const title = 'WELCOME TO THE HIGH-TECH'
 return (
	<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Projects Manager</h1>
        <AddProject
          onAdd={this.onAdd}
        />
        
        {
          this.state.projects.map(projects =>{
            return(
              <ProjectItem
              {...projects}
              onDelete = {this.onDelete}
              />
            );
          })
        }
 </div>
);
 }
}
export default App;