import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import BrowsePanel from "./Store/BrowsePanel";
import IngridPanel from "./Store/IngridPanel";
import ProfilePanel from "./Store/ProfilePanel";
import ScanPanel from "./Store/ScanPanel";

const ScanIcon = props => {
  let icon = props.active
    ? require("../assets/Button/btn-scan-selected.png")
    : require("../assets/Button/btn-scan.png");
  return <Image source={icon} style={styles.footerIcon} />;
};
const BrowseIcon = props => {
  let icon = props.active
    ? require("../assets/Button/btn-browse-selected.png")
    : require("../assets/Button/btn-browse.png");
  return <Image source={icon} style={styles.footerIcon} />;
};
const IngridIcon = props => {
  let icon = props.active
    ? require("../assets/Button/btn-ingrid-selected.png")
    : require("../assets/Button/btn-ingrid.png");
  return <Image source={icon} style={styles.footerIcon} />;
};
const ProfileIcon = props => {
  let icon = props.active
    ? require("../assets/Button/btn-profile-selected.png")
    : require("../assets/Button/btn-profile.png");
  return <Image source={icon} style={styles.footerIcon} />;
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "scan"
    };
  }
  _onPress(pressedTab) {
    this.setState({ selectedTab: pressedTab });
    this.props.changeView(pressedTab);
  }
  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => this._onPress("scan")}>
          {this.state.selectedTab === "scan" ? (
            <ScanIcon active={true} />
          ) : (
            <ScanIcon active={false} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("browse")}>
          {this.state.selectedTab === "browse" ? (
            <BrowseIcon active={true} />
          ) : (
            <BrowseIcon active={false} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("ingrid")}>
          {this.state.selectedTab === "ingrid" ? (
            <IngridIcon active={true} />
          ) : (
            <IngridIcon active={false} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("profile")}>
          {this.state.selectedTab === "profile" ? (
            <ProfileIcon active={true} />
          ) : (
            <ProfileIcon active={false} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends Component {
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
  },
  footer: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center"
  },
  footerIcon: {
    width: 70,
    height: 70
  }
});
