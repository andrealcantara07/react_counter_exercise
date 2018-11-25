import React, { Component } from 'react';


class Counter extends Component{
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
        
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

   renderTags(){
       if (this.state.tags.length === 0) return <p>There are no tags!</p>;

       else return  <ul>{this.state.tags.map(tag => <li key={tag}>tag</li>)}</ul>;
   }
    render(){
       
        return (
        <React.Fragment>
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className= 'btn btn-secondary btn-sm'>Increment</button>
          {this.renderTags()}
        </React.Fragment>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

       
    
}

export default Counter;