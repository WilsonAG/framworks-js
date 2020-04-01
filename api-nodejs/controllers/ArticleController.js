'use strict';

const articleController = {}

articleController.data = (req, res) => {
    return res.status(200).json({
        messgae: 'data'
    });
}

module.exports = articleController;