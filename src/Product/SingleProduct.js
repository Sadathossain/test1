import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import DBProduct from "../DBClass/DBProduct";

export default class SingleProduct extends Component {

    render() {
        var productInfo = new DBProduct(this.props.id);
        //productInfo.getProductInfo();
        productInfo.showProductInfo();

        return (
            <View style={styles.panelStyle}>
                <Text style={styles.id}>{this.props.id}</Text>
            </View>
        );
    }
}