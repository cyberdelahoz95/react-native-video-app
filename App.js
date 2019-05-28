/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import Loading from './src/sections/components/loading'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'
import Api from './src/utils/api'
import {store, persistor} from './src/store'

type Props = {};
export default class App extends Component<Props> {
  state = { }
  async componentDidMount(){
    const categoryList = await Api.getMovies()
    store.dispatch({
      type:'SET_CATEGORY_LIST',
      payload:{
        categoryList
      }
    });
    const suggestionList = await Api.getSuggestion(10)
    store.dispatch({
      type:'SET_SUGGESTION_LIST',
      payload:{
        suggestionList
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
              <Header />
              <Text>B</Text>
              <Player />
              <CategoryList />
              <SuggestionList />
            </Home>
        </PersistGate>
      </Provider>
    );
  }
}
