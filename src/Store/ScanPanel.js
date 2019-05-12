import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default class ScanPanel extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>{"Scan Panel"}</Text>
      </View>
    );
  }
}
