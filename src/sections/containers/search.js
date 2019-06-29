import React , {Component} from 'react';
import { connect} from 'react-redux';
import {
    TextInput,
    StyleSheet
} from 'react-native';
import API from '../../utils/api'
class Search extends Component {
    state = {
        text:''
    }
    handlechangeText = (text) => {
        this.setState({
            text
        })
    }
    handleSubmit = async () => {
        const movies = await API.searchMovie(this.state.text)
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload: {
                movie:movies[0]
            }
        })
    }
    render () {
        return (
            <TextInput 
                placeholder="Buscar tu Peli Favorita"
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handlechangeText}
                style={styles.input}
            />
        )
    }
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
    }
)
export default connect(null)(Search)