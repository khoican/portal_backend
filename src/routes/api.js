const express = require('express');
const router = express.Router();
const portal_inController = require('./../controller/portal_in')

router.get('/', portal_inController.getPortal_in);
router.post('/', portal_inController.postPortal_in);
router.patch('/:id', portal_inController.updatePortal_in);
router.delete('/:id', portal_inController.deletePortal_in);

module.exports = router;