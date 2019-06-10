import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Home from './screens/containers/home'
import Header from './sections/components/header'
import Movie from './screens/containers/movie'

import Api from './utils/api'

class AppLayout extends Component {
    async componentDidMount(){
        const categoryList = await Api.getMovies()
        this.props.dispatch({
          type:'SET_CATEGORY_LIST',
          payload:{
            categoryList
          }
        });
        const suggestionList = await Api.getSuggestion(10)
        this.props.dispatch({
          type:'SET_SUGGESTION_LIST',
          payload:{
            suggestionList
          }
        });
      }
    render () {
      if (this.props.selectedMovie){
        return <Movie />
      }
      else{
        return (
          <Home>
              <Header />
              <Text>B</Text>
              <CategoryList />
              <SuggestionList />
          </Home>
      )
      }
    }
}

function mapStateToProps(state){
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout)

