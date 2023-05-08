const express = require('express');
const router = express.Router();
const portal_inController = require('./../controller/portal_in')

router.get('/in', portal_inController.getPortal_in)
router.post('/post', portal_inController.postPortal_in)

module.exports = router;