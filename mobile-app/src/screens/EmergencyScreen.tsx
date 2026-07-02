import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';

// Tela fixa e sempre visível de contato de emergência.
// Obrigatória conforme protocolo de segurança (Seção 6 da especificação):
// o app NUNCA substitui atendimento de crise.
export default function EmergencyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precisa de ajuda agora?</Text>
      <Text style={styles.body}>
        O SONA não substitui atendimento de crise. Se você está em risco, ligue para o CVV.
      </Text>
      <Pressable style={styles.button} onPress={() => Linking.openURL('tel:188')}>
        <Text style={styles.buttonText}>Ligar para o CVV — 188</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700' },
  body: { fontSize: 16, lineHeight: 22 },
  button: { backgroundColor: '#D64545', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
