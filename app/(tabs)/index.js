import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Button, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Forgetful in love?{"\n\n"}
        Stop hurting your partner with missed details.{"\n\n"}
        Register now to be mindful, considerate, and plan for each other.
      </Text>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale: scaleAnim }] }]}>
        <Button
          title="Register Now"
          onPress={() => router.push('/register')}
          color="#6200ee"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
    fontWeight: '500',
  },
  buttonWrapper: {
    marginHorizontal: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
});