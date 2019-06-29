import React , {Component} from 'react'
import {
    FlatList,
    Text
} from 'react-native'
import { connect } from 'react-redux'

import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'

class CategoryList extends Component {
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

function mapStateToProps(state){
    return {
        list:state.categoryList
    }
}

export default connect(mapStateToProps)(CategoryList)