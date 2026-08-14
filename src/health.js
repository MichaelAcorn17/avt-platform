// Liveness endpoint used by the platform's container orchestrator.
const express = require('express');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', version: process.env.APP_VERSION || '2.1.0' });
});

module.exports = router;
