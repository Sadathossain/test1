import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

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

export default class Footer extends Component {
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
            <ScanIcon active={this.state.selectedTab === "scan"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("browse")}>
            <BrowseIcon active={this.state.selectedTab === "browse"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("ingrid")}>
            <IngridIcon active={this.state.selectedTab === "ingrid"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPress("profile")}>
            <ProfileIcon active={this.state.selectedTab === "profile"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  