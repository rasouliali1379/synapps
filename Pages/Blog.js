import * as React from 'react';
import { Text, View } from 'react-native';
import { MianStyles } from '../Styles/MainStyles';

export default function Blog() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={MianStyles.text}>به زودی...</Text>
      </View>
    );
}
  