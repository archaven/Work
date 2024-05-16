import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Leader {
  name: string;
  score: number;
}

const leadersData: Leader[] = [
  { name: 'A', score: 20 },
  { name: 'B', score: 18 },
];

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leadersData}
        renderItem={({ item }) => (
          <View style={styles.leaderContainer}>
            <Text style={styles.leaderName}>{item.name}</Text>
            <Text style={styles.leaderScore}>{item.score}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  leaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leaderName: {
    fontSize: 18,
  },
  leaderScore: {
    fontSize: 18,
  },
});

export default LeaderboardScreen;
