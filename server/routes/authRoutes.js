const passport = require('passport');

module.exports = (app) => {

    // example create test route handler
    // app.get('/', (req,res) => {
    //     res.send({test: 'tested'});
    // });

    // create github authentication route handlers flow
    app.get('/auth/github', 
    passport.authenticate('github'
        // ,{
        //     scope: ['profile']
        // }
    ));

    app.get('/auth/github/callback', 
    passport.authenticate('github')
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        // passport automatically attaches user to req
        res.send(req.user);
    });
};
