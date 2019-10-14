const express = require('express');
const { Campaigncontroller } = require('../controllers');
const { auth } = require('../helpers/auth')


const router = express.Router();

router.post('/postCampaign', auth, Campaigncontroller.postCampaign)
router.get('/getCampaign', auth, Campaigncontroller.getCampaign)

module.exports = router