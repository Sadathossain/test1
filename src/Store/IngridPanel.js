import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default class IngridPanel extends Component {
  render() {
    return (
      <View style={styles.panelStyle}>
        <Text>{"Ingrid Panel"}</Text>
      </View>
    );
  }
}
