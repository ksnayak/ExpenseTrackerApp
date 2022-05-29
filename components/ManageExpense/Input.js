import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import {GlobleStyles} from '../../constants/styles';

const Input = ({label, style, textInputConfig, invalid}) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: GlobleStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobleStyles.colors.primary100,
    color: GlobleStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: GlobleStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobleStyles.colors.error50,
  },
});
