import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default class BrowsePanel extends Component {
  render() {
    return (
      <View style={styles.panelStyle}>
        <Text>{"Browse Panel"}</Text>
      </View>
    );
  }
}
