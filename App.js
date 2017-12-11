/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Animation from 'lottie-react-native';
import source from './move.json';
const { width } = Dimensions.get('window');

export default class App extends Component<{}> {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: width,
              height: 300
            }}
            loop={true}
            source={source}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D3743'
  }
});
