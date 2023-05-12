const ModelPortalOut = require('./../models/portal_out');

const getPortal_out = async (req, res) => {
    const [data] = await ModelPortalOut.getAllPortalOut();

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

const postPortal_out = async (req, res) => {
    const {body} = req;
    
    if(!body.nama || !body.kompi) {
        return res.status(400).json({
            message: "Invalid Data",
            data: null,
        });
    }

    try {
        await ModelPortalOut.postPortalOut(body);
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

const updatePortal_out = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await ModelPortalOut.updatePortalOut(body, id);
        res.json({
            message: "UPDATE Data Success",
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

const deletePortal_out = async (req, res) => {
    const {id} = req.params;

    try {
        await ModelPortalOut.deletePortalOut(id);
        res.json({
            message: "DELETE Data Success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getPortal_out,
    postPortal_out,
    updatePortal_out,
    deletePortal_out
}