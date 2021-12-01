const db = require('./models')
// // CREATE
// db.Suggestion.create({
//     username: 'cloouuddiie',
//     mutuals: 'Followed by zoeeewangg + 30 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'chloezcyriri',
//     mutuals: 'Suggested for you',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 's_post1',
//     mutuals: 'Followed by ruben__cruz__',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'anniekkuh',
//     mutuals: 'Followed by bryandelariva + 12 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: '_junchacha',
//     mutuals: 'Followed by tylaaleee + 27 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'jonathan_seun',
//     mutuals: 'Followed by jennifersun_ + 58 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'jacobadistefano',
//     mutuals: 'Followed by jmoussa1 + 25 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'calvinguyenn',
//     mutuals: 'Followed by steph_of_faith + 42 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'mangmeljohn',
//     mutuals: 'Followed by dcheung_ + 5 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Suggestion.create({
//     username: 'lizzie.kempf',
//     mutuals: 'Followed by joleanonme1029 + 24 more',
//     follow: false
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })

// // READ

// db.Suggestion.findOne({
//     where: { username: 'calvinguyenn'}
// })
// .then(function(res) {
//     console.log('This is calvinguyenn', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING calvinguyenn',err);
// })

// db.Suggestion.findOne({
//     where: { follow: false }
// })
// .then(function (res) {
//     console.log('reading falses', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Suggestion.findOne({
//     where: { username: 'lizzie.kempf' }
// })
// .then(function (res) {
//     console.log('This is lizzie.kempf', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Suggestion.findByPk(2)
// .then(function(res) {
//     console.log('This is primary key 2', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING 2', err);
// })

// db.Suggestion.findAll({
//     where: { username: 'lizzie.kempf' }
// })
// .then(function (res) {
//     console.log('This is lizzie.kempf', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Suggestion.findAll({
//     where: { username: 'chloezcyriri'}
// })
// .then(function (res) {
//     console.log('This is chloezcyriri', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Suggestion.update({
//     follow: true
// }, {
//     where: { id: 2 }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })

// db.Suggestion.update({
//     mutuals: 'Followed by zoeeewangg + 31 more'
// }, {
//     where: { username: 'cloouuddiie' }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })
// // DESTROY

// db.Suggestion.destroy({
//     where: { id: 4 }
// })
// .then(function(destroyed) {
//     console.log('Post destroyed', destroyed);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR DESTROYING', err);
// })