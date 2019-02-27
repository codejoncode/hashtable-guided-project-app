import React, { Component } from 'react';


class HashFunction extends Component {
    state = {
        arrayLength : "",
        arrayKey : "", 
        hashingMagic : "",
        arrayIndex : "",
        hashedInto : "",
        codeValue : "",
        added : "", 
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
            this.setState({hashingMagic, arrayIndex, hashedInto, codeValue, added});

        } else {
            this.setState({hashingMagic : "", arrayIndex : ""});
        }
    }
    doNothing = () => {
        return; 
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Array Length</h1>
                    <input type="text" name = "arrayLength" value = {this.state.arrayLength} onChange = {this.handleChange}/>
                </div>
                <div>
                    <h1>Key</h1>
                    <input type="text" name = "arrayKey" value = {this.state.arrayKey} onChange = {this.handleChange}/>
                </div>
                <div>
                <span>
                    <h5>{this.state.hashedInto}</h5> 
                    <h5>{this.state.codeValue}</h5>
                    <h5>{this.state.added}</h5>
                    </span>
                    <h1>Hashing Magic</h1>
                    <input type="text" name = "hashingMagic" value = {this.state.hashingMagic} onChange = {this.doNothing}/>
                    
                </div>
                <div>
                    <h1>Array Index</h1>
                    <h5>{this.state.hashingMagic} % {this.state.arrayLength}</h5>
                    <input type="text" name = "arrayIndex" value = {this.state.arrayIndex} onChange = {this.doNothing}/>
                </div>
            </div>
        )
    }
}

export default HashFunction; 