import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class ProfilePanel extends Component
{
    render() {
       return(
            <View style={styles.inputContainer}>
            <Text>{'ProfilePanel'}</Text>
            </View>
       );
    }
}
    
const styles = StyleSheet.create({
    inputContainer: {
    //flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
}); 

export default ProfilePanel;