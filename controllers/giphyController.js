// module.exports = {

// index(req, res) => {

//   request: "http://api.giphy.com/v1/gifs/search?q=cat-fitness&api_key=5c90517748c940f7898e6f3b2c7ca995&limit=3"
//     .then((response) => {
//   // we need ot parse json, because the data comes back as a string .. annoying
//       response = JSON.parse(response);
//     // finally render our index, and pass the response url to it
//       res.render('stats/stats-index', {
//         data: res.locals.stats,
//         avgData: res.locals.avgStats,
//         logoName: 'Kitty Health Tracker',
//         gifUrl: response.data[0].embed_url,
//       })
//     }
// };





// }
