// A generated note never reaches the patient record without an explicit clinician sign-off.
class NoteNotSignedOffError extends Error {}

function requireSignOff(note) {
  if (!note.signedOffBy || !note.signedOffAt) {
    throw new NoteNotSignedOffError("Note " + note.id + " has not been signed off by a clinician");
  }
  return note;
}

module.exports = { requireSignOff, NoteNotSignedOffError };
