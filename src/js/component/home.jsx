import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import {Player} from './player.jsx';
//create your first component
export class Home extends React.Component{
    constructor(){
        super();
        this.state={
            songs:[
                {title:"South Park", id:"south-park", author:"Kyle", url:"https://assets.breatheco.de/apis/sound/sounds//mario/songs/castle.mp3"},
                {title:"Thunder Cats", id:"thundercats", author:"Moonra", url:"https://assets.breatheco.de/apis/sound/sounds/videogame/fx_zelda_recorder.wav"},
                {title:"X-Men", id:"x-men", author:"Profesor", url:"https://assets.breatheco.de/apis/sound/sounds/cartoons/songs/x-men.mp3"}
            ]
        };
        this.player=null;
    }
    playPlayer(){
        
    }
    pausePlayer(){
        
    }
    
    render(){
        return (
            <div>
                <div className="text-center">
                    <i className="fas fa-backward text-white pr-3"></i>
                    <i className="fas fa-play text-white pr-3"></i>
                    <i className="fas fa-forward text-white pr-3"></i>
                    <audio ref={(t) => this.player = t} controls/>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                        
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
        );
    }
}
