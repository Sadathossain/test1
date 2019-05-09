import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class BrowsePanel extends Component
{
    render() {
       return(
            <View style={styles.inputContainer}>
            <Text>{'BrowsePanel'}</Text>
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

export default BrowsePanel;