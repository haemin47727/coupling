import { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [status, setStatus] = useState('');

 const handleSubmit = async () => {
  const message = `Email: ${email}\nName: ${name}\nBirthday: ${birthday}\nStatus: ${status}`;

  try {
    const response = await fetch('http://<your-ip-address>:8081/coupleapp-1.0-SNAPSHOT/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&birthday=${encodeURIComponent(birthday)}&status=${encodeURIComponent(status)}`
    });

    const text = await response.text();

    if (Platform.OS === 'web') {
      window.alert(`Submitted\n\n${text}`);
    } else {
      Alert.alert('Submitted', text);
    }

    console.log('Server response:', text);
  } catch (error) {
    console.error('Submission failed:', error);
    Alert.alert('Error', 'Could not connect to backend');
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couple Registration</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Legal Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Birthday (YYYY-MM-DD)" value={birthday} onChangeText={setBirthday} />
      <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
});