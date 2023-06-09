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

const getDatePortal_in = async (req, res) => {
    const {body} = req;
    
    try {
        const [data] = await ModelPortalIn.getDatePortalIn(body);
        res.json({
            message: 'Filter By Date Success',
            body: {body, data}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
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

const updatePortal_in = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await ModelPortalIn.updatePortalIn(body, id);
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

const deletePortal_in = async (req, res) => {
    const {id} = req.params;

    try {
        await ModelPortalIn.deletePortalIn(id);
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
    getPortal_in,
    getDatePortal_in,
    postPortal_in,
    updatePortal_in,
    deletePortal_in
}