import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { glossary, glossaryMap } from '/common/glossary';
import * as Strings from '/common/native-strings';

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
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>{this.props.name}</Text>
          <Text style={styles.cardParagraph}>
            {Strings.mutateStringWithComponents(
              this.props.description,
              this._handleNestedTooltip,
              this.state.replacements
            )}
          </Text>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    const glossaryElements = glossary.map(g => (
      <GlossaryItem key={g.name} {...g} />
    ));

    return (
      <ScrollView style={styles.container}>
        {glossaryElements}
      </ScrollView>
    );
  }
}

// NOTE(jim): Kept this all in one file intentionally, so we could
// map relationships between this and NextJS.
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: '#fff',
    paddingBottom: 24,
  },
  card: {
    flex: 1,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  cardHeading: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardParagraph: {
    fontSize: 32,
    fontWeight: '600',
  },
});
