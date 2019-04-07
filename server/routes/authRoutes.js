const passport = require('passport');

module.exports = (app) => {

    // create github authentication route handler
    app.get('/auth/github', 
    passport.authenticate('github'
        // ,{
        //     scope: ['profile']
        // }
    ));

    // 
    app.get('/auth/github/callback', 
    passport.authenticate('github')
    );
};
