// src/components/StudyLevelScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const goalCount=50;
const categories = [
  { id: '1', title: 'Chap 1', goal: goalCount },
  { id: '2', title: 'Chap 2', goal: goalCount },
  { id: '3', title: 'Chap 3', goal: goalCount },
];

const StudyLevelScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#5A20BB", "#7F9DFF"]}
      >
        <Text style={styles.header}>121일 연속 학습 중 입니다!</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('StudyLevelScreen', { category: item.title })}
            >
              <LinearGradient
                colors={["#FAA2FF", "#FDE3FF"]}
                style={styles.cardGradientBackground}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.goal}>총 학습 단어 갯수: {item.goal}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#FFFFFF', marginTop: 30, marginBottom: 2, marginLeft: 20 },
  card: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    height: 180
  },
  cardGradientBackground: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
  },
  cardTitle: { fontSize: 25, marginLeft: 10, marginTop: 10, fontWeight: 'bold' },
  goal: { marginLeft: 230, marginTop: 70, fontSize: 14 },
});

export default StudyLevelScreen;
