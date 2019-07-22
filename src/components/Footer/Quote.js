import React, {Component} from 'react';

class Quote extends Component {
    state = { quote_json: {}};
    quote = "";

    fetchJoke = () => {
        // fetch('https://official-joke-api.appspot.com/random_joke')
        fetch('https://quotes.rest/qod')
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(json => this.setState({ quote_json: json }))
            .catch(error => alert(error.message));
    }

    componentDidMount() {
        this.fetchJoke();
    }

    render() {
        if( this.state.quote_json.contents){
            this.quote =  this.state.quote_json.contents.quotes.quote;
        }
        if (!this.quote) {
            this.quote =  "Hola, no pares de hacer cosas";
        }
        return(
            <div>
                <span style={{fontSize:"30px"}}><em>&#8220;</em></span>
                <span><em>{this.quote}</em></span>
                <span style={{fontSize:"30px"}}><em>&#8221;</em></span>
            </div>
        )
    }
}

export default Quote;