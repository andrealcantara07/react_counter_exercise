import React, { Component } from 'react';
import Counter from './counterComponent';


class Counters extends Component {
    state = {  
        counters: [
            { id: 1, value:0 },
            { id: 2, value:5 },
            { id: 3, value:0 },
            { id: 4, value:0 }
        ]
    };
    render() { 
        return ( 
            <div>
            {/*ADDED MAP FUNCTION TO ITERATE THROUGH COUNTERS ARRAY AND AN IMPORTED COMPONENT FROM COUNTERCOMPONENT FILE*/}
              {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} />)}
                
            </div> );
    }
}
 
export default Counters;