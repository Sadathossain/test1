import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image, Button } from "react-native";
import styles from "./styles";

import SingleProduct from '../Product/SingleProduct';

export default class ScanPanel extends Component {
  state =
  {
    id:'',
    idSelected:1,
  }

  idChangeHandler = (value) => 
  {
    this.setState({
      id:value,
    });
  };

  _onPress = () => {
    if(this.state.id.trim() == "")
    {
        return;
    }
    
    this.setState({
      idSelected:2,
    });
    //console.log(this.state.id);
    //<SingleProduct id={this.state.id}></SingleProduct>
  };
 
  render() {
    let panel;
    if (this.state.idSelected === 2) {
      panel = <SingleProduct id={this.state.id}></SingleProduct>;
    } 
    else {
      panel = (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="Enter Id"
                onChangeText={this.idChangeHandler}
                > 
            </TextInput>
            {/* <TouchableOpacity onPress={this._onPress}>
              { <Image source={'.../assets/Button/btn-search.png'}></Image> }
              <Image source={'../../assets/Button/btn-search.png'}></Image> 
            </TouchableOpacity> */}
              <Button title="Add"
                      style={styles.placeButton}
                      onPress={this._onPress}>
              </Button>
          </View>
      );
    }

    return (
      <View style={styles.panel}>
        <View>{panel}</View>
      </View>
    );
  }
}
