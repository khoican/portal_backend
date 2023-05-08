const ModelPortalIn = require('./../models/portal_in');

const getPortal_in = async (req, res) => {
    const [data] = await ModelPortalIn.getAllPortalIn();

    try {
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

const postPortal_in = async (req, res) => {
    const {body} = req;
    
    if(!body.nama || !body.kompi) {
        return res.status(400).json({
            message: "Invalid Data",
            data: null,
        });
    }

    try {
        await ModelPortalIn.postPortalIn(body);
        res.status(201).json({
            message: "Insert Data Success",
            data: body,
        })
    } catch(error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getPortal_in,
    postPortal_in
}