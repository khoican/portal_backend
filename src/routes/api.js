const express = require('express');
const router = express.Router();
const portal_inController = require('./../controller/portal_in')

router.get('/', portal_inController.getPortal_in)

module.exports = router;