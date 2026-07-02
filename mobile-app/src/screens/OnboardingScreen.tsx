import { View, Text, StyleSheet } from 'react-native';

// Onboarding: paciente cria conta (indicado pelo terapeuta) e escolhe
// um personagem pré-pronto entre 3 a 5 opções (ver design/personagens).
export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu personagem</Text>
      <Text>TODO: listar 3-5 personagens pré-prontos e permitir seleção.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 20, fontWeight: '600' },
});
