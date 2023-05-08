const ModelPortalIn = require('./../models/portal_in');

const getPortal_in = async (req, res) => {
    try {
        const [data] = await ModelPortalIn.getAllPortalIn();

         res.json({
            message: "GET Data Success",
            data: data,
         });

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getPortal_in
}