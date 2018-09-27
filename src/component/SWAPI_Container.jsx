import React, { Component } from 'react';

class SWAPI_Container extends Component {
    constructor(props){
        super(props);
        this.state={
            movieList:[],
            auto_click:false,
        }
      }    
    componentDidMount(){
        // let _this=this;
        // fetch('http://localhost:8081/starwarsFilms',{
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then(results=> results.json()).then(data=>{
        //     console.log('data',data);
        //     _this.setState({movieList:data.results});
        // }).catch(err => err);
        let timerid=0,
        self=this;
        if (timerid) {
            clearTimeout(timerid);
          }
          
          timerid = setTimeout(() => {
                self.refs.auto_click.click();
          }, 2000);

    }
    render() {
        return (
            <div className="swapi_container">
               <a ref="auto_click" style={{'visibility':'hidden'}} href="https://www.google.com"></a>
            </div>
        );
    }
}

export default SWAPI_Container;
