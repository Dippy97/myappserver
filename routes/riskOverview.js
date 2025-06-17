import express from 'express';

const router = express.Router();
//import { getRiskOverview } from '../controllers/riskOverviewController.js';
router.get('/', (req, res) => {
  const riskOverviewData = {
    totalRisks: 100,
    highRisk: 20,
    mediumRisk: 50,
    lowRisk: 30,
    lastUpdated: new Date().toISOString(),
  };

  res.json(riskOverviewData);
});

export default router;