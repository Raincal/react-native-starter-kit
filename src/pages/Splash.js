/**
 * Created by tdzl2_000 on 2015-12-22.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './Splash.styles';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.title}>
          Hello, React-Native Starter Kit!
        </Text>
      </View>
    );
  }
}
