import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const questionsData: Question[] = [
  {
    id: 1,
    question: 'What is the capital of Thailand?',
    answers: ['Berlin', 'Madrid', 'Bangkok', 'Rome'],
    correctAnswer: 'Bangkok'
  },
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuestionScreen = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    const shuffledQuestions = shuffleArray(questionsData).slice(0, 20);
    shuffledQuestions.forEach(question => {
      question.answers = shuffleArray(question.answers);
    });
    setQuestions(shuffledQuestions);
  };

  const renderItem = ({ item }: { item: Question }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{item.question}</Text>
      {item.answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(item, answer)} />
      ))}
    </View>
  );

  const handleAnswer = (question: Question, answer: string) => {
  };

  return (
    <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default QuestionScreen;
