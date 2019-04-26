import React, { Component } from 'react';

class AddProject extends Component{
  constructor(props){
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
      event.preventDefault();

      this.props.onAdd(this.nameInput.value, this.descriptionInput.value);

      this.nameInput.value = '';
      this.descriptionInput.value = '';
  }
 
render(){
 return (
    <form onSubmit={this.onSubmit}>
        <h3>Add Project</h3>
    <input placeholder = "ProjectName" ref={nameInput=>this.nameInput = nameInput} />
    <input placeholder = "Description" ref={descriptionInput=>this.descriptionInput = descriptionInput} />
    <button>Add</button>


    <hr />
 </form>
);
 }
}
export default AddProject;
