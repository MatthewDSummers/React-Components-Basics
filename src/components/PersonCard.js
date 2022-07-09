import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <>
            <h1 className="red">My name is { firstName } { lastName }</h1>
            <h2>I am { age } years old </h2>
            <h3> My hair color is { hairColor }</h3>
            <br></br>
            </>
        )
    }
}

export default PersonCard;