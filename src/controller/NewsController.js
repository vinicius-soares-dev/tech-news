

exports.News = (req, res) => {
   
    let errors = [];

    if(!req.body.tittleInput || req.body.tittleInput == null || req.body.tittleInput == undefined) {
        errors.push('Titulo inválido');
    };

    if(!req.body.newsInput || req.body.newsInput == null || req.body.newsInput == undefined) {
        errors.push('Noticia inválida');
    };

    if(errors.length > 0) {
        res.render('createerror', {errors: errors[0]});
    } else {
        let tittle = req.body.tittleInput;
        let news = req.body.newsInput;
        res.render('news', {tittle: tittle, news: news});
    }
}