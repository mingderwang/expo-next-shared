import React from 'react';
import stringReplace from 'react-string-replace';
import { StyleSheet, Text, View } from 'react-native';
import { glossaryMap } from '/common/glossary';

export const mutateStringWithComponents = (text, onPress, replacements) => {
  const matchGlossaryTermToComponent = (match, key) => {
    if (!glossaryMap[match.toLowerCase()]) {
      return match;
    }

    const elementStyles = replacements[match]
      ? styles.replaced
      : styles.replace;

    return (
      <Text
        style={elementStyles}
        key={match + key}
        onPress={() => onPress(match)}>
        <Text>
          {replacements[match]
            ? `${match} (${glossaryMap[match]})`.toLowerCase()
            : match}
        </Text>
      </Text>
    );
  };

  text = stringReplace(text, /(\w+)/g, matchGlossaryTermToComponent);

  return text;
};

const styles = StyleSheet.create({
  replace: {
    backgroundColor: 'blue',
    color: 'white',
    paddingLeft: 8,
    paddingRight: 8,
  },
  replaced: {
    color: 'blue',
  },
});
