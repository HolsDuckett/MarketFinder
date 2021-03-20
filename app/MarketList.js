import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import MarketData from '../src/marketData.js'
import Constants from 'expo-constants';
import React, { Component, useState, useEffect } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
      isLoading: false,
    };
  }

  fetchMarkets = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await fetch('http://192.168.1.110:3000/markets');
      const markets = await res.json();
      this.setState({ markets });
    } catch (err) {
      console.log(err);
    }
    this.setState({ isLoading: false });
  };

  componentDidMount(){
    this.fetchMarkets();
  };
  
  render() {
    return (

      <View style={{ flex: 1, padding: 24 }}>
        {this.isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <Text>Nearby Markets:</Text>
            <FlatList
              data={this.state.markets}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                // key is not being read but is not crashing
                <Text key={item.id}>{item.name}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}