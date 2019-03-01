import React, { Component } from "react";

class CollisionHandle extends Component {
  state = {
    arrayLength: "",
    arrayKey: "",
    hashingMagic: "",
    arrayIndex: "",
    compressing: "",
    arrayValue: "",
    position: "",
    index0: [],
    index1: [],
    index2: [],
    index3: [],
    index4: []
  };

  handleChange = event => {
    if (event.target.name === "arrayKey") {
      this.setState(
        { [event.target.name]: event.target.value },
        this.makeHash(event.target.value)
      );
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  makeHash = key_in => {
    // index = hash_function(key) % array.length;
    // array[index] = Value;
    const key = key_in;
    const array = [];
    let array_sum = 0;
    const arrayLength = 5;
    let hashedInto = "[";
    let codeValue = "[";
    let added = "";
    let position = null;

    if (key.length && arrayLength) {
      for (let i = 0; i < key.length; i++) {
        const char = key[i];
        const charCode = char.charCodeAt(0);
        array.push(charCode);
        hashedInto += "'";
        hashedInto += String(char);
        hashedInto += "'";
        codeValue += String(charCode);
        added += String(charCode);
        if (i < key.length - 1) {
          codeValue += ",";
          hashedInto += ",";
          added += "+";
        }
      }
      hashedInto += "]";
      codeValue += "]";
      added += "=";

      for (let num of array) {
        array_sum += num;
      }

      const hashingMagic = array_sum;

      const arrayIndex = hashingMagic % arrayLength;
      const compressing =
        String(hashingMagic) + " modulo " + String(arrayLength);

      /*Get a position based off index*/
      switch (Number(arrayIndex)) {
        case 0:
          position = this.state.index0.length;
          break;
        case 1:
          position = this.state.index1.length;
          break;
        case 2:
          position = this.state.index2.length;
          break;
        case 3:
          position = this.state.index3.length;
          break;
        case 4:
          position = this.state.index4.length;
          break;
        default:
          console.log(
            "This line is needed to get rid of warning but should never trigger"
          );
      }

      this.setState({
        hashingMagic,
        arrayIndex,
        hashedInto,
        codeValue,
        added,
        compressing,
        position
      });
    } else {
      this.setState({ hashingMagic: "", arrayIndex: "", position: "" });
    }
  };
  doNothing = () => {
    return;
  };

  addToIndexArray = () => {
    const index = Number(this.state.arrayIndex);
    const key = this.state.arrayKey.slice();
    const index0 = this.state.index0.slice();
    const index1 = this.state.index1.slice();
    const index2 = this.state.index2.slice();
    const index3 = this.state.index3.slice();
    const index4 = this.state.index4.slice();
    switch (index) {
      case 0:
        if (index0.includes(key) === false) {
          index0.unshift(key);
          this.setState({ index0, position: index0.length });
        }
        break;
      case 1:
        if (index1.includes(key) === false) {
          index1.unshift(key);
          this.setState({ index1, position: index1.length });
        }
        break;
      case 2:
        if (index2.includes(key) === false) {
          index2.unshift(key);
          this.setState({ index2, position: index2.length });
        }
        break;
      case 3:
        if (index3.includes(key) === false) {
          index3.unshift(key);
          this.setState({ index3, position: index3.length });
        }
        break;
      case 4:
        if (index4.includes(key) === false) {
          index4.unshift(key);
          this.setState({ index4, position: index4.length });
        }
        break;
      default:
        console.log(
          "This line is needed to get rid of warning but should never trigger"
        );
    }
  };

  render() {
    /* Destruct arrays from state */
    const { index0, index1, index2, index3, index4 } = this.state;
    return (
      <div>
        <div>
          <br />
          <span>
            Key{" "}
            <input
              type="text"
              onChange={this.handleChange}
              name="arrayKey"
              value={this.state.arrayKey}
            />{" "}
          </span>
          <span>
            Array Index{" "}
            <input
              type="text"
              onChange={this.doNothing}
              name="arrayIndex"
              value={this.state.arrayIndex}
            />
          </span>
        </div>
        <div>
          <br />
          <span>
            Value{" "}
            <input
              type="text"
              onChange={this.handleChange}
              name="arrayValue"
              value={this.state.arrayValue}
            />{" "}
          </span>
          <span>
            Position in Chain{" "}
            <input
              type="text"
              onChange={this.doNothing}
              name="arrayIndex"
              value={this.state.position}
            />
          </span>
        </div>
        <button onClick={this.addToIndexArray}>Add Item</button>

        <div className="bigBox">
          <div
            className={
              this.state.arrayIndex === 0 ? "expandBox red" : "expandBox"
            }
          >
            0
          </div>
          <span>HEAD -></span>
          {index0.map((index, id) => (
            <span>{index} -></span>
          ))}
          <span>X</span>
        </div>

        <div className="bigBox">
          <div
            className={
              this.state.arrayIndex === 1 ? "expandBox red" : "expandBox"
            }
          >
            1
          </div>
          <span>HEAD -></span>
          {index1.map((index, id) => (
            <span>{index} -></span>
          ))}
          <span>X</span>
        </div>

        <div className="bigBox">
          <div
            className={
              this.state.arrayIndex === 2 ? "expandBox red" : "expandBox"
            }
          >
            2
          </div>
          <span>HEAD -></span>
          {index2.map((index, id) => (
            <span key={id}>{index} -></span>
          ))}
          <span>X</span>
        </div>

        <div className="bigBox">
          <div
            className={
              this.state.arrayIndex === 3 ? "expandBox red" : "expandBox"
            }
          >
            3
          </div>
          <span>HEAD -></span>
          {index3.map((index, id) => (
            <span key={id}>{index} -></span>
          ))}
          <span>X</span>
        </div>

        <div className="bigBox">
          <div
            className={
              this.state.arrayIndex === 4 ? "expandBox red" : "expandBox"
            }
          >
            4
          </div>
          <span>HEAD -></span>
          {index4.map((index, id) => (
            <span key={id}>{index} -></span>
          ))}
          <span>X</span>
        </div>
      </div>
    );
  }
}

export default CollisionHandle;
