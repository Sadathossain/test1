import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import DBCategory from "../DBClass/DBCategory";

export default class ProductList extends Component {

    render() {
        DBCategory.getDBCategory(this.props.category);

        return (
            <View style={styles.panelStyle}>
                <Text style={styles.id}>{this.props.category}</Text>
            </View>
        );
    }
}