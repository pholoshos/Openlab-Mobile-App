import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import AppButton from './AppButton';
export default class Login extends Component {
    render() {
        return (
            <View>

                <View>
                <AppButton
              name="Login"
              color="green"
              />
                </View>
  
            </View>
        )
    }
}

const styles = StyleSheet.create({

  });