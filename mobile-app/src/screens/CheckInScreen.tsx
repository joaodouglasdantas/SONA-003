import { View, Text, StyleSheet } from 'react-native';
import { EMOTION_WHEEL } from '../theme/emotionWheel';

// Uso diário: registro por cor (roda de emoções), texto livre,
// eventos categorizados e/ou check-in guiado.
// Detecção de risco em texto livre deve rodar aqui antes de salvar o registro.
export default function CheckInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está hoje?</Text>
      {EMOTION_WHEEL.map((e) => (
        <View key={e.key} style={[styles.swatch, { backgroundColor: e.color }]}>
          <Text style={styles.swatchLabel}>{e.label}</Text>
        </View>
      ))}
      <Text>TODO: texto livre, eventos categorizados, check-in guiado.</Text>
      <Text>TODO: rodar detecção de risco antes de salvar o registro.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 8 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  swatch: { padding: 12, borderRadius: 8 },
  swatchLabel: { color: '#fff', fontWeight: '600' },
});
