import React, { Component } from 'react';

class ProjectItem extends Component{
  constructor(props) {
      super(props);

      this.onDelete = this.onDelete.bind(this);
  }
  onDelete(){
      const {onDelete,name} = this.props;

      onDelete(this.props.name);
  }


  
render(){
    const{ name, description} = this.props;
 return (
    <div>
    <span>{name}</span> 
   {' | '}
    <span>{description}</span>
    {' | '}
    <button onClick={this.onDelete}>Delete</button>
 </div>
);
 }
}
export default ProjectItem;
