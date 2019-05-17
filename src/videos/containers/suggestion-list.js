import React , {Component} from 'react'
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay Sugerencias" />
    itemSeparator = () => <Separator color="red" />
    renderItem = ({item}) => <Suggestion {...item} />
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

export default SuggestionList