import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon: []
        }
    }

    componentDidMount(){
        fetch("https://api.rajaongkir.com/starter/province/?key=ae39bb9151609f3c5786bc1960064dac")
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        const { pokemon } = this.state

        return(
            <div>
                <ul>
                    {
                        pokemon.map((item, index) => (
                            <li key={index}><a href={item.url}>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Content;
