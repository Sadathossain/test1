import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default class ProfilePanel extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>{"Profile Panel"}</Text>
      </View>
    );
  }
}
