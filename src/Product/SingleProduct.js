import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class SingleProduct extends Component {
    
    render() {
        return (
            <View style={styles.panelStyle}>
                <Text style={styles.productName}>{this.props.id}</Text>
                {/* <Text>{"SingleProduct"}</Text> */}
            </View>
        );
    }
}