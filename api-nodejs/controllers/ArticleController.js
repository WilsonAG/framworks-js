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

articleController.getArticles = async(req, res) => {
    const query = Article.find({});
    const items = +req.params.last;
    if (items) {
        query.limit(items)
    }

    try {
        //find
        const articles = await query.sort('-_id').exec();

        return res.status(200).json({
            status: 'ok',
            articles
        });

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            error
        });
    }
}

articleController.getArticle = async(req, res) => {
    // recoger id de url
    const id = req.params.id;

    // comprobar si existe 
    if (!id) {
        return res.status(404).json({
            status: 'error',
            message: 'No existe el articulo.'
        });
    }

    try {
        // buscar el articulo
        const article = await Article.findById(id).exec();
        if (!article) {
            return res.status(404).json({
                status: 'error',
                message: 'No existe el articulo.'
            });
        }

        // devoler res
        return res.status(200).json({
            status: 'ok',
            article: article
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error al procesar la peticion.'
        });

    }

}

articleController.update = async(req, res) => {
    //recoger id de articulo
    const id = req.params.id

    // recoger data
    const params = req.body

    // validata data
    try {
        const vTitle = validator.isEmpty(params.title);
        const vContent = validator.isEmpty(params.content);

        if (vTitle || vContent) {
            return res.status(400).json({
                status: 'error',
                message: 'Por favor complete los campos.'
            })
        }
        // find and update
        const article = await Article.findOneAndUpdate({ _id: id }, params, { new: true }).exec();

        if (!article) {
            return res.status(404).json({
                status: 'error',
                message: 'El articulo que desea actualizar no existe.'
            });
        }
        //devolver res
        return res.status(200).json({
            status: 'ok',
            article
        });

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error al procesar la peticion.'
        });
    }






}

articleController.delete = async(req, res) => {
    try {
        // recoger id
        const id = req.params.id;

        // Eliminar
        const article = await Article.findByIdAndDelete({ _id: id }).exec();
        if (!article) {
            return res.status(404).json({
                status: 'error',
                message: 'El articulo que desea eliminar no existe.'
            })
        }

        // devolver res
        return res.status(200).json({
            status: 'ok',
            article
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error al procesar la solicutud.'
        });

    }

}

module.exports = articleController;