import 'isomorphic-fetch';
import React from 'react';
import { StyleSheet, css } from 'glamor/aphrodite';
import { glossary, glossaryMap } from '/common/glossary';
import * as Strings from '/common/web-strings';

class GlossaryItem extends React.Component {
  state = {
    replacements: {},
  };

  _handleNestedTooltip = match => {
    const replacements = {
      ...this.state.replacements,
      [match]: !this.state.replacements[match],
    };
    this.setState({
      replacements,
    });
  };

  render() {
    return (
      <div className={css(styles.card)}>
        <div className={css(styles.cardContent)}>
          <h2 className={css(styles.cardHeading)}>{this.props.name}</h2>
          <p className={css(styles.cardParagraph)}>
            {Strings.mutateStringWithComponents(
              this.props.description,
              this._handleNestedTooltip,
              this.state.replacements
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default class IndexPage extends React.Component {
  state = {
    glossary: [...glossary],
  };

  render() {
    const glossaryElements = this.state.glossary.map(g => (
      <GlossaryItem key={g.name} {...g} />
    ));

    return (
      <div className={css(styles.container)}>
        {glossaryElements}
      </div>
    );
  }
}

// NOTE(jim): Kept this all in one file intentionally, so we could
// map relationships between this and react native.
const styles = StyleSheet.create({
  // IndexPage
  container: {
    width: '100%',
  },
  items: {
    display: 'flex',
  },
  // GlossaryItem
  card: {
    display: 'inline-flex',
    width: '25%',
    flexDirection: 'column',
    padding: '24px',
    boxSizing: 'border-box',
    position: 'relative',
    '@media (max-width: 800px)': {
      width: '50%',
    },
    '@media (max-width: 400px)': {
      width: '100%',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeading: { fontSize: '0.8rem', textTransform: 'uppercase' },
  cardParagraph: { fontSize: '1.75rem', fontWeight: 600 },
});
