// src/components/HomeScreen.js
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;
  const navigation = useNavigation(); // 네비게이션 훅 사용

  const toggleGoalPanel = () => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsVisible(false));
    } else {
      setIsVisible(true);
      Animated.timing(slideAnim, {
        toValue: height * 0.7,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>danbi님, 안녕하세요!</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("WordTest")}
          >
            <Text style={styles.boxText}>단어 시험</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("WrongNote")}
          >
            <Text style={styles.boxText}>오답 노트</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.largeBox}
          onPress={() => navigation.navigate("WordStudy")}
        >
          <Text style={styles.boxText}>단어 학습</Text>
        </TouchableOpacity>
      </View>

      {!isVisible && (
        <TouchableOpacity style={styles.goalButton} onPress={toggleGoalPanel}>
          <Icon name="menu-outline" size={24} color="#6A0DAD" />
          <Text style={styles.goalButtonText}>오늘 목표 보기</Text>
        </TouchableOpacity>
      )}

      {isVisible && (
        <Animated.View style={[styles.goalPanel, { top: slideAnim }]}>
          <View style={styles.goalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleGoalPanel}
            >
              <Icon name="menu-outline" size={24} color="#6A0DAD" />
              <Text style={styles.closeButtonText}>목표 숨기기</Text>
            </TouchableOpacity>
            <Text style={styles.goalText}>오늘 목표까지 38개 남았어요!</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A0DAD",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  box: {
    width: "45%",
    height: 270,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  largeBox: {
    width: "92%",
    height: 150,
    backgroundColor: "#FF69B4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
  },
  goalButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  goalButtonText: {
    color: "#6A0DAD",
    fontWeight: "bold",
    marginLeft: 8,
  },
  goalPanel: {
    position: "absolute",
    width: "100%",
    height: "40%", // 패널 높이
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  goalText: {
    fontSize: 18,
    color: "purple",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#6A0DAD",
    fontWeight: "bold",
  },
  goalContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
  },
});

export default HomeScreen;
