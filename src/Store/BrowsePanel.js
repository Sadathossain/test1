import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import ProductList from "../Product/ProductList";

export default class BrowsePanel extends Component {
  state =
  {
    categoryid:1,
  }
  
  setCategoryid = (_categoryid) =>
  {
    {
      this.setState({
        categoryid:_categoryid,
      });
    };
  };

  render() {
    categoryid=0;

    return (
      <View style={styles.panelStyle}>
        <ProductList category={categoryid}></ProductList>
      </View>
    );
  }
}
