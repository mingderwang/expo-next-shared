import React from 'react';
import stringReplace from 'react-string-replace';
import { StyleSheet, css } from 'glamor/aphrodite';
import { glossaryMap } from '/common/glossary';

export const mutateStringWithComponents = (text, onClick, replacements) => {
  const matchGlossaryTermToComponent = (match, key) => {
    if (!glossaryMap[match.toLowerCase()]) {
      return match;
    }

    const elementStyles = replacements[match]
      ? css(styles.replaced)
      : css(styles.replace);

    return (
      <span
        className={elementStyles}
        key={match + key}
        onClick={() => onClick(match)}>
        {replacements[match]
          ? `${match} (${glossaryMap[match]})`.toLowerCase()
          : match}
      </span>
    );
  };

  text = stringReplace(text, /(\w+)/g, matchGlossaryTermToComponent);

  return text;
};

const styles = StyleSheet.create({
  replace: {
    background: 'blue',
    color: 'white',
    padding: '0 8px 0 8px',
    boxSizing: 'border-box',
  },
  replaced: {
    color: 'blue',
  },
});
