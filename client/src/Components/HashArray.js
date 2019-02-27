import React, { Component } from 'react';

class HashArray extends Component {
    state = {
        arrayLength : "",
        arrayKey : "", 
        hashingMagic : "",
        arrayIndex : "",
        compressing : "", 
        arrayValue : "", 
    }
    handleChange = event => {
        if( event.target.name === "arrayKey"){
            this.setState({ [event.target.name]: event.target.value },this.makeHash(event.target.value));
        } else {
            this.setState({[event.target.name]: event.target.value});
        }
    };

    makeHash = (key_in) => {
        // index = hash_function(key) % array.length; 
        // array[index] = Value; 
        const key = key_in;
        const array = [];
        let array_sum = 0;
        const arrayLength = Number(this.state.arrayLength);
        let hashedInto = "[";
        let codeValue = "[";
        let added = ""; 
        if(key.length && arrayLength){
            for (let i = 0; i < key.length; i++){
                const char = key[i];
                const charCode = char.charCodeAt(0);
                array.push(charCode)
                hashedInto += "'";
                hashedInto += String(char);
                hashedInto += "'";
                codeValue +=  String(charCode);
                added += String(charCode);
                if(i < key.length -1){
                    codeValue += ","
                    hashedInto += ",";
                    added += "+";
                }
            }
            hashedInto += "]";
            codeValue += "]";
            added += "=";

            for(let num of array){
                array_sum += num; 
            }

            const hashingMagic = array_sum; 

            const arrayIndex = hashingMagic %  arrayLength; 
            const compressing = String(hashingMagic) + " modulo " + String(arrayLength);
            this.setState({hashingMagic, arrayIndex, hashedInto, codeValue, added, compressing});

        } else {
            this.setState({hashingMagic : "", arrayIndex : ""});
        }
    }
    doNothing = () => {
        return; 
    }

    render () {
        const divs = []
        for(let i = 0; i<Number(this.state.arrayLength); i++){
            divs.push(i)
        }
        console.log(divs)
        console.log(divs.length);

        return (
            <div>
                <div>
                    <br/>
                    <span>Array Length  <input type="text" onChange ={this.handleChange} name = "arrayLength" value = {this.state.arrayLength}/> </span>
                    <span>Hash Code <input type="text" onChange ={this.doNothing} name = "hashingMagic" value = {this.state.hashingMagic}/></span>
                </div>

                <div>
                    <br/>
                    <span>Key <input type="text" onChange ={this.handleChange} name = "arrayKey" value = {this.state.arrayKey}/> </span>
                    <span>Compressing <input type="text" onChange ={this.doNothing} name = "compressing" value = {this.state.compressing}/></span>
                </div>

                <div>
                    <br/>
                    <span>Value <input type="text" onChange ={this.handleChange} name = "arrayValue" value ={this.state.arrayValue}/> </span>
                    <span>Array Index <input type="text" onChange ={this.doNothing} name = "arrayIndex" value = {this.state.arrayIndex}/></span>
                </div>
                <br/>
                <div className = "bigBox">
                    {divs.map((d, id) => <div className = "expandBox" key ={d}>{d === Number(this.state.arrayIndex) ? this.state.arrayKey : d}</div>)}
                    <br/>
                </div>
                <div className = "bigBox">
                    {divs.map((d, id) => <div className = "expandBox" key ={d}>{d === Number(this.state.arrayIndex) ? this.state.arrayValue : ""}</div>)}
                </div>

            </div>
            
        )
    }
}

export default HashArray;