const passport = require('passport');

module.exports = (app) => {

    // example create test route handler
    // app.get('/', (req,res) => {
    //     res.send({test: 'tested'});
    // });

    // create github authentication route handlers flow
    app.get('/auth/github', 
    passport.authenticate('github'
        ,{
            scope: ['user']
        }
    ));

    app.get('/auth/github/callback', 
        passport.authenticate('github'),
        (req,res) => {
            res.redirect('/');
        }
    );
    // User is logged out when directed here
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    // responds with user model if user is logged in
    app.get('/api/current_user', (req, res) => {
        // passport automatically attaches user to req
        res.send(req.user);
    });
};
