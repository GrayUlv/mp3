import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import {Player} from './player.jsx';
//create your first component
export class Home extends React.Component{
    constructor(){
        super();
        this.state={
            songs:[]
        };
        fetch('https://assets.breatheco.de/apis/sound/all')
            .then((resp) => {
                return resp.json();
            })
            .then((songs) =>{
                this.setState({songs: songs});
            }).catch((error) =>{
                console.log("there was an error:",error);
        });
        this.player=null;
    }
    componentDidMount(){
        this.pauseBtn.style.display='none';
    }
    playPlayer(){
        this.player.play();
        this.pauseBtn.style.display ='inline-block';
        this.playBtn.style.display ='none';
        
    }
    pausePlayer(){
        this.player.pause();
        this.pauseBtn.style.display ='none';
        this.playBtn.style.display ='inline-block';
    }
    
    render(){
        {this.songs.map((song, i) =>{
            return <Songli 
                        ID={song.id} 
                        cat={song.category}
                        name={song.name}
                        url={song.url}
                        key={i} 
                    />;
        })}
        return (
            <div>
                <div className="text-center">
                    <i className="fas fa-backward text-white pr-3"></i>
                    <i className="fas fa-play text-white pr-3" onClick={()=>this.playPlayer()} ref={(elm) => this.playBtn = elm}></i>
                    <i className="fas fa-pause text-white pr-3" onClick={()=> this.pausePlayer()} ref={(elm) => this.pauseBtn = elm}></i>
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
                            <th scope="row">{this.song.title}</th>
                            <td></td>
                            
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
