const express = require('express');
const router = express.Router();
const portal_outController = require('./../controller/portal_out');

router.get('/', portal_outController.getPortal_out);
router.post('/', portal_outController.postPortal_out);
router.patch('/:id', portal_outController.updatePortal_out);
router.delete('/:id', portal_outController.deletePortal_out);

module.exports = router;