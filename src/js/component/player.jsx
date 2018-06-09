import React from 'react';

//include images into your bundle

//create your first component
export class Player extends React.Component{
    
    render(){
        return (
            <div className="text-center">
                <i className="fas fa-backward text-white pr-3"></i>
                <i className="fas fa-play text-white pr-3"></i>
                <i className="fas fa-forward text-white pr-3"></i>
            </div>
            
        );
    }
}
