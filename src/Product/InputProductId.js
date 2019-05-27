import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image, Button } from "react-native";
import styles from "./styles";

export default class InputProductId extends Component {

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="Enter id"
                    // value="5c94f05da10b8e3db4bae6bc"
                    onChangeText={this.props.idChangeHandler}
                    > 
                </TextInput>
                {
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image source={require("../../assets/Button/btn-search.png")}></Image> 
                    </TouchableOpacity> 
                }
            </View>
        );
    }
}