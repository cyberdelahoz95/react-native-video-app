import React from 'react';
import {
    View, 
    Text, 
    Image,
    StyleSheet,
    SafeAreaView // this view is used for those phone with notch
} from 'react-native'
function Header (props){
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/logo.jpg')}
                    style={styles.logo} 
                />
                <View style={styles.right}>
                    {props.children}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:46,
        resizeMode:'contain'
    },
    container:{
        flexDirection:'row',
        padding:10
        /*paddingVertical:10,
        paddingHorizontal:10*/
    },
    right:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})

export default Header