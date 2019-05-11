import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

//import ScanPanel from ScanPanel;

const StateType = {
  ScanType: 1,
  BrowseType: 2,
  IngridType: 3,
  ProfileType: 4,
}

class MyListItem extends Component 
{
    static CurrentState=StateType.ScanType;
    constructor(props) {
      super(props)
      this.state= {
        active: this.props.active,
        stateType: this.props.stateType,
      }
    }
    _onPress = () => {
        if(MyListItem.CurrentState!=this.state.stateType)
        {
          MyListItem.CurrentState=this.state.stateType;
          this.setState({active: true});
        }
        else 
        {
          this.setState({active: false});
        }
        //console.log("CurrentState "+MyListItem.CurrentState);
    };
  
    render() {
      var icon = this.state.active
              ? require('../assets/Button/btn-scan-selected.png')
              : require('../assets/Button/btn-scan.png');

      switch(this.props.stateType)
      {
        case StateType.ScanType:
        {
          icon = this.state.active
            ? require('../assets/Button/btn-scan-selected.png')
            : require('../assets/Button/btn-scan.png');
        }
        break;

        case StateType.BrowseType:
        {
          icon = this.state.active
              ? require('../assets/Button/btn-browse-selected.png')
              : require('../assets/Button/btn-browse.png');
        }
        break;

        case StateType.IngridType:
        {
          icon = this.state.active
              ? require('../assets/Button/btn-ingrid-selected.png')
              : require('../assets/Button/btn-ingrid.png');
        }
        break;

        case StateType.ProfileType:
        {
          icon = this.state.active
              ? require('../assets/Button/btn-profile-selected.png')
              : require('../assets/Button/btn-profile.png');
        }
        break;      
    }

    return (
        <View style={styles.Button}>              
              <TouchableOpacity onPress={this._onPress}>
                  <Image source={icon} />
              </TouchableOpacity>
        </View>
      );
    }
}  

class MainHud extends Component
{
    render() {
        return(
            <View style={styles.buttonListView}>
                {/* <MyListItem imageName='../assets/Button/btn-scan'></MyListItem> */}
                <MyListItem active={true} stateType={StateType.ScanType}></MyListItem>
                <MyListItem active={false} stateType={StateType.BrowseType}></MyListItem>
                <MyListItem active={false} stateType={StateType.IngridType}></MyListItem>
                <MyListItem active={false} stateType={StateType.ProfileType}></MyListItem>
          </View>
        );
     }
}

const styles = StyleSheet.create({

    buttonListView:{
        width: '100%', 
        height: 70,
        backgroundColor: 'white', 
        justifyContent: 'center', 
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },

    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    Button: {
      width: 70, 
      height: 70,
    }

}); 

export default MainHud;