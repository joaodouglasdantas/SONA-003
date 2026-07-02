import { View, Text, StyleSheet } from 'react-native';

// Avatar e ambiente mudam de cor/expressão conforme o acúmulo de registros.
// Sem geração de texto por IA nesta fase — só reflexo visual.
export default function AvatarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu espelho</Text>
      <Text>TODO: renderizar avatar com cor/expressão baseada no histórico de registros.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 20, fontWeight: '600' },
});
