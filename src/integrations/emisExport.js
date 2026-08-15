// Exports a signed-off consultation summary into the patient record via EMIS.
const { requireSignOff } = require("../notes/signOff");

async function exportConsultationSummary(client, note) {
  requireSignOff(note);
  return client.post("/patient/" + note.patientId + "/consultation", {
    summary: note.summary,
    codedTerms: note.codedTerms,
    recordedAt: note.recordedAt,
  });
}

module.exports = { exportConsultationSummary };
