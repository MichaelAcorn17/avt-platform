// Speech model selection. v3 materially improves word error rate on regional and non-native accents.
const SPEECH_MODEL = "avt-speech-v3";

function modelConfig() {
  return {
    model: SPEECH_MODEL,
    sampleRate: 16000,
    diarise: true,
    lexicon: "clinical-medication-v2",
  };
}

module.exports = { SPEECH_MODEL, modelConfig };
