import React , {Component} from 'react'
import {
    FlatList,
    Text
} from 'react-native'

import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'

export default class SuggestionList extends Component {
    keyExtractor = (item) => item.id.toString()
    itemSeparator = () => <Separator />
    renderEmpty = () => <Empty text="No hay Sugerencias" />
    renderItem = ({item}) => <Category {...item} />
    render() {
        return (
            <Layout 
                title="Categorias"
            >
                <FlatList
                    horizontal
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