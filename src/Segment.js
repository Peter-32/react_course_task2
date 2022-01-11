import React from 'react';
import ReactDOM from 'react-dom';


const Segment = function(props) {
    return (
        <div className="ui placeholder segment">
            {props.children}
        </div>

        );
      }

export default Segment;
