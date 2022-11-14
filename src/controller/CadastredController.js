exports.Cadastred = (req, res) => {
   let error = []; 

    if(!req.body.email || req.body.email == undefined || req.body.email == null || req.body.email.includes('@') == false || req.body.email.includes('.com') == false) {
        
        error.push('e-mail inválido');
        
    };

    if(!req.body.password || req.body.password == undefined || req.body.password == null) {
        error.push('senha inválida');
       
    };

    if(req.body.password.length < 6 || req.body.password.length > 11) {
        error.push(' sua senha deve conter entre 6 a 11 caracteres');
        
    };

    if(error.length > 0) {
        res.render('erro', {error: error[0]});
    } else {
        res.render('create');
    }


}