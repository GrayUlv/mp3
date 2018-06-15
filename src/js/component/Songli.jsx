import React from 'react';
import PropTypes from 'prop-types';
//include images into your bundle

//create your first component
export class Songli extends React.Component{
    handelSong(){
        
    }    
    render(){
        return (
            <div className="text-center">
                <th scope="row">{this.song.ID}</th>
                <td onClick={()=> handelSong()}>{this.song.name}</td>
                <td>{this.song.cat}</td>
            </div>
            
        );
    }
}
Songli.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func,
    name: PropTypes.string,
    url: PropTypes.string,
    cat:PropTypes.string,
    ID: PropTypes.number
    
};

Songli.defaultProps = {
  onDelete: null
};