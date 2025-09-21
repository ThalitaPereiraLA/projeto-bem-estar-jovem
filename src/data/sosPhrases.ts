export interface SOSPhrase {
  text: string;
  type: 'calma' | 'motivação' | 'acolhimento';
}

const phrases: SOSPhrase[] = [
  // Frases de calma
  { text: "Respire fundo. Este momento difícil vai passar.", type: 'calma' },
  { text: "Você é mais forte do que imagina. Uma pausa te fará bem.", type: 'calma' },
  { text: "Permita-se sentir, mas lembre-se: isso é temporário.", type: 'calma' },
  { text: "Está tudo bem não estar bem agora. Seja gentil consigo.", type: 'calma' },
  { text: "Foque no presente. Você consegue lidar com este momento.", type: 'calma' },
  { text: "Seus sentimentos são válidos. Respire e se acalme.", type: 'calma' },
  { text: "Este é apenas um capítulo da sua história, não o final.", type: 'calma' },
  { text: "Pare, respire e lembre-se: você já superou coisas difíceis antes.", type: 'calma' },

  // Frases de motivação  
  { text: "Você tem a força necessária para superar qualquer desafio.", type: 'motivação' },
  { text: "Cada pequeno passo é uma vitória. Continue caminhando.", type: 'motivação' },
  { text: "Sua resiliência é impressionante. Você consegue!", type: 'motivação' },
  { text: "Os dias difíceis moldam pessoas extraordinárias como você.", type: 'motivação' },
  { text: "Acredite em você. Sua capacidade de superar é infinita.", type: 'motivação' },
  { text: "Você não está sozinho nesta jornada. Continue lutando!", type: 'motivação' },
  { text: "Transforme sua dor em poder. Você é capaz de tudo.", type: 'motivação' },
  { text: "Sua coragem para continuar é inspiradora. Não desista!", type: 'motivação' },

  // Frases de acolhimento
  { text: "Você importa. Sua vida tem valor imenso e propósito.", type: 'acolhimento' },
  { text: "Aqui você encontra um espaço seguro para ser quem é.", type: 'acolhimento' },
  { text: "Você é amado e aceito exatamente como está.", type: 'acolhimento' },
  { text: "Não precisa carregar esse peso sozinho. Estamos aqui.", type: 'acolhimento' },
  { text: "Sua sensibilidade é um dom, não uma fraqueza.", type: 'acolhimento' },
  { text: "Você merece cuidado, carinho e compreensão.", type: 'acolhimento' },
  { text: "É corajoso pedir ajuda. Você está no caminho certo.", type: 'acolhimento' },
  { text: "Sua história única torna o mundo mais rico. Continue.", type: 'acolhimento' },
];

export default phrases;