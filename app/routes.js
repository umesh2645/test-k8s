module.exports = function(app) {
    app.get('/',function(req, res){
        res.render('index');
    });

    app.get('/live',function(req, res){
        res.render('live');
    });

}