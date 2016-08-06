module.exports = function(app) {
    app.get('/callouts', function(req, res) {
        res.json([{
            key: 1,
            title: 'Citi Spotlights Summer Leadership Program',
            desc: 'The Citi Spotlights Leadership Program empowers youth to become leaders in school, at home, and in their communities',
            img: 'callout-generic-example1.jpg',
            button: 'learn more',
            theme: 'blue'
        },
        {
            key: 2,
            title: 'Support our nonprofit by donating today',
            desc: 'Learn how to get amazong access and benefits when you sponsor the threatres and programs. <br>Sponsorships range from Corporate to Institutional. <br><a href="#">Corporate Leadership</a><br><a href="#">Individual Giving</a><br><a href="#">Partnerships</a><br><a href="#">Institutional Supporters</a>',
            button: 'learn more',
            theme: 'blue'
        },
        {
            key: 3,
            title: 'discover our threatres, be a part of the magic',
            desc: '<a href="#">Wang Theatre</a><br><a href="#">Emerson Colonial Theatre</a><br><a href="#">Shubert Theatre</a><br><a href="#">The Centre at Suffolk Downs</a>',
            img: 'callout-generic-example2.jpg',
            button: 'become a sponsor',
            theme: 'yellow'
        }]);
    })
    app.get('/sponsors', function(req, res) {
        res.json([
            'citibank.png', 'msg.png', 'polar.png', 'verndale.png', '7up.png'
        ])
    });
    app.get('*', function(req, res) {
        res.render('index.ejs'); // load our public/index.html file
    });
}