import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Footer from "./Footer";

import BrowsePanel from "./Store/BrowsePanel";
import IngridPanel from "./Store/IngridPanel";
import ProfilePanel from "./Store/ProfilePanel";
import ScanPanel from "./Store/ScanPanel";

export default class MainHud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanel: "scan"
    };
  }
  pushPanel(p) {
    this.setState({ currentPanel: p });
  }
  render() {
    let panel;
    if (this.state.currentPanel === "scan") {
      panel = <ScanPanel />;
    } else if (this.state.currentPanel === "profile") {
      panel = <ProfilePanel />;
    } else if (this.state.currentPanel === "ingrid") {
      panel = <IngridPanel />;
    } else if (this.state.currentPanel === "browse") {
      panel = <BrowsePanel />;
    } else {
      panel = (
        <View style={styles.blankPanel}>
          <Text>No Tab Selected</Text>{" "}
        </View>
      );
    }
    return (
      <View style={styles.mainScreen}>
        <View style={styles.panel}>{panel}</View>
        <Footer changeView={v => this.pushPanel(v)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  },
  panel: {
    flex: 1
  },
  blankPanel: {
    flex: 1,
    backgroundColor: "red"
  }
});
