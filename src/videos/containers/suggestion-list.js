import React , {Component} from 'react'
import {
    FlatList,
    Text
} from 'react-native'
import { connect } from 'react-redux'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay Sugerencias" />
    itemSeparator = () => <Separator color="red" />
    viewMovie = (item) => {
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload:{
                movie: item,
            }
        })
    }
    renderItem = ({item}) => <Suggestion onPress={() => { this.viewMovie(item) }} {...item} />
    keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <Layout 
                title="Recomendado only para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

function mapStateToProps(state){
    return {
        list:state.suggestionList
    }
}

export default connect(mapStateToProps)(SuggestionList)