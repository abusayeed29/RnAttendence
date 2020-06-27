import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class HomeSreen extends Component {
    
    render() {
        
        return (
            
            <View style={styles.container}>

                <Button
                    title="Go the Detail"
                    onPress={()=>this.props.navigation.navigate('Notifications')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
