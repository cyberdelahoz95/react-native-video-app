import React from 'react'
import {
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native'

export default function Category(props){
    return (
        <ImageBackground 
            source={{
                uri: props.background_image
            }}
            style={styles.wrapper}>
            {
                props.genres &&
                <Text style={styles.genre}>{props.genres[0]}</Text>
            } 
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:250,
        height:100,
        borderRadius:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    genre:{
        color:'white',
       fontSize:40,
       fontWeight:'bold',
       textShadowColor:'rgba(0,0,0, .75)', // negro con transparencia
       textShadowOffset:{
           width:2,
           height:2
       },
       textShadowRadius:0
    }
})