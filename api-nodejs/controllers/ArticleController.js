'use strict';

const validator = require('validator');
const Article = require('../models/Article');
const path = require('path');
const fs = require('fs');

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

articleController.upload = async(req, res) => {
    // Configurar el modulo del connect multiparty en router

    // Recoger archivo de la peticion
    let fileName = 'La imagen no se pudo subir';
    if (!req.files) {
        return res.status(404).json({
            status: 'error',
            message: 'No hay ningun archivo seleccionado.'
        });
    }

    // conseguir name y ext del file
    const filePath = req.files.file0.path
    fileName = path.basename(filePath);
    const fileExt = fileName.split('.')[1];

    // comprobar la extension, solo img
    if (fileExt != 'jpg' && fileExt != 'png' && fileExt != 'jpeg' && fileExt != 'gif') {
        // borrar archivo
        fs.unlink(filePath, err => {
            return res.status(400).json({
                status: 'error',
                message: 'Por favor asegurese que el archivo sea una imagen.'
            });

        });

    } else {
        try {
            const id = req.params.id;
            // Buscar el articulo, darle nombre a la img y actualizar
            const article = await Article.findOneAndUpdate({ _id: id }, { image: fileName }, { new: true }).exec();

            if (!article) {
                fs.unlinkSync(filePath);
                return res.status(400).json({
                    status: 'error',
                    message: 'No se puede subir la imagen en este articulo.'
                })
            }

            return res.status(200).json({
                status: 'ok',
                article
            })

        } catch (error) {
            fs.unlinkSync(filePath);
            return res.status(500).json({
                status: 'error',
                message: 'Error en la peticion.'
            })
        }
    }

}

articleController.getImage = async(req, res) => {
    const fileName = req.params.id;
    const imagePath = './upload/articles/' + fileName;

    if (!fs.existsSync(imagePath)) {
        return res.status(404).json({
            status: 'error',
            message: 'La image no existe.'
        })
    }


    return res.status(200).sendFile(path.resolve(imagePath));
}

articleController.search = async(req, res) => {
    try {
        // sacar string a buscar
        const token = req.params.token;

        //find or
        const articles = await Article.find({
            '$or': [
                { 'title': { "$regex": token, '$options': 'i' } },
                { 'content': { "$regex": token, '$options': 'i' } }
            ]
        }).sort([
            ['date', 'desc']
        ]).exec();

        if (!articles || articles.length < 1) {
            return res.status(404).json({
                status: 'error',
                message: 'No hay Articulos para mostrar.'

            })
        }

        return res.status(200).json({
            status: 'ok',
            articles

        })

    } catch (error) {
        return res.status(500).json({
            status: 'ok',
            message: 'Error en la peticion.'

        })
    }
}
module.exports = articleController;