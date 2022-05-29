import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

import {GlobleStyles} from '../../constants/styles';

const Button = ({children, onPress, mode, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobleStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobleStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobleStyles.colors.primary100,
    borderRadius: 4,
  },
});
