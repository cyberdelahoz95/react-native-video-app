/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'
import Api from './src/utils/api'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const suggestions = await Api.getSuggestion(10)
    const categories = await Api.getMovies()
    this.setState({
      suggestionList:suggestions,
      categoryList:categories
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>B</Text>
        <Player />
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
