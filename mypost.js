const db = require('./models')

// // CREATE
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Second official ball',
//     likes: 164,
//     comments: 3,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Never Not by Lauv (acoustic cover) (feat.',
//     likes: 321,
//     comments: 6,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'I Will Trust my Savior Jesus- CityAlight (Cover)',
//     likes: 191,
//     comments: 0,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: '…. Yeah my favourite part was just being in Hawaii :)',
//     likes: 153,
//     comments: 11,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'So Hawaii happened and one thing a lot of people ask is what my favourite part of Hawaii was….. part 1',
//     likes: 167,
//     comments: 2,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Grow- (Original Song)',
//     likes: 199,
//     comments: 7,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Another AT done',
//     likes: 156,
//     comments: 7,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Lord You Are/Steadfast Love - Cover',
//     likes: 226,
//     comments: 2,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'Simplicity (Acoustic Cover) - Rend Collective - :)',
//     likes: 183,
//     comments: 2,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })
// db.Mypost.create({
//     username: 'sundaebests',
//     post: 'picture1',
//     description: 'I Will Remember You (The Office Ver.) Cover',
//     likes: 237,
//     comments: 1,
// })
// .then(function(response) {
//     console.log('suggestion created', response);
// })
// .catch(function(err) {
//     console.log('ERROR FOUND', err);
// })

// // READ

// db.Mypost.findOne({
//     where: { likes: 164}
// })
// .then(function(res) {
//     console.log('This is your ball photo', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING',err);
// })

// db.Mypost.findOne({
//     where: { username: 'sundaebests' }
// })
// .then(function (res) {
//     console.log('reading falses', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Mypost.findOne({
//     where: { comments: 6 }
// })
// .then(function (res) {
//     console.log('This is the song with Zoe', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Mypost.findByPk(2)
// .then(function(res) {
//     console.log('This is primary key 2', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING 2', err);
// })

// db.Mypost.findAll({
//     where: { likes: 191 }
// })
// .then(function (res) {
//     console.log('This is 191 likes', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Mypost.findAll({
//     where: { comments: 2}
// })
// .then(function (res) {
//     console.log('This is posts with 2 comments', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING', err);
// })

// db.Mypost.update({
//     comments: 7
// }, {
//     where: { id: 2 }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })

// db.Mypost.update({
//     likes: 165
// }, {
//     where: { description: 'Second official ball' }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })
// DESTROY

// db.Mypost.destroy({
//     where: { id: 1 }
// })
// .then(function(destroyed) {
//     console.log('Post destroyed', destroyed);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR DESTROYING', err);
// })