'use strict';

const validator = require('validator');
const Article = require('../models/Article');

const articleController = {}

articleController.save = async(req, res) => {
    // recoger parametros por post
    const params = req.body;

    // validar datos con validator
    try {
        var vTitle = validator.isEmpty(params.title);
        var vContent = validator.isEmpty(params.content);

        if (vTitle || vContent) {
            return res.status(200).json({
                status: 'error',
                message: 'Los datos no son validos.'
            });
        }
    } catch (error) {

        return res.status(200).json({
            status: 'error',
            message: 'faltan datos por enviar.'
        });
    }

    try {
        // crear obj a guardar
        let article = new Article();

        // asignar valores al obj
        article.title = params.title;
        article.content = params.content;
        article.image = null;

        // guardar el articulo
        const articleStored = await article.save();

        //devolver res
        return res.status(200).json({
            status: 'ok',
            article: articleStored
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 'error',
            message: error
        });
    }
}

module.exports = articleController;