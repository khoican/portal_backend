const express = require('express');
const router = express.Router();
const portal_inController = require('../controller/portal_in');
const portal_outController = require('../controller/portal_out');

router.get('/in', portal_inController.getPortal_in);
router.post('/in/date', portal_inController.getDatePortal_in);
router.post('/in/post', portal_inController.postPortal_in);
router.patch('/in:id', portal_inController.updatePortal_in);
router.delete('/in:id', portal_inController.deletePortal_in);

router.get('/out', portal_outController.getPortal_out);
router.post('/out/post', portal_outController.postPortal_out);
router.patch('/out:id', portal_outController.updatePortal_out);
router.delete('/out:id', portal_outController.deletePortal_out);

module.exports = router;