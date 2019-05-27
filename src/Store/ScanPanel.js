import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image, Button } from "react-native";
import styles from "./styles";

import SingleProduct from '../Product/SingleProduct';
import InputProductId from '../Product/InputProductId';

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

  onPress = () => {
    if(this.state.id.trim() == "")
    {
        return;
    }
    console.log("idChangeHandler "+this.state.id);
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
      panel = <InputProductId idChangeHandler={this.idChangeHandler} onPress={this.onPress}></InputProductId>;
    }

    return (
      <View style={styles.panel}>
        <View>{panel}</View>
      </View>
    );
  }
}
