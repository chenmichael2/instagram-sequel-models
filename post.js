const db = require('./models');

// // CREATE

// db.Post.create({ 
//     username: 'jazzdotorg',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 451,
//     description: 'Coming up at #DizzysClub...',
//     commenter: 'theodorarapp',
//     comment: 'Ron: Another dresser. Watch out for sartorial competition.'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'rendcollective',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 682,
//     description: '🎄 LOW TICKET ALERT! ',
//     commenter: 'pamellaprimrose',
//     comment: '😍',
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'listentothesevoices',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 1426,
//     description: 'i am still heartbroken over ',
//     commenter: 'teanna_2',
//     comment: 'What’s the title of the new song?'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'angelblessingsproductions',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 16,
//     description: 'What a peaceful and relaxing ',
//     commenter: null,
//     comment: null
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'asuci_',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 56,
//     description: "Want to learn about people’s ",
//     commenter: null,
//     comment: null
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'marinebandsandiego',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 44,
//     description: "This November, Marine Band San Diego’s ",
//     commenter: 'military_rakeysh026',
//     comment: 'promote it on @militaryblaze'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'usmcdrumcorps',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 331,
//     description: "This past week, Sergeant Teal Ewer ",
//     commenter: null,
//     comment: null
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'lacountyfd',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 1014,
//     description: "@austindave_ captured this photo of a ",
//     commenter: 'mariellevansantenww',
//     comment: 'A beautiful photo of a hero!!!🙏🏻🇺🇸'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'marinerschurch',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 59,
//     description: "Today is an opportunity for you ",
//     commenter: 'quakeartist',
//     comment: 'Glory to be Gof ❤️🔥'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// db.Post.create({
//     username: 'soarrescue',
//     userPicture: 'userPicture',
//     post: 'picture1',
//     likes: 349,
//     description: " Rolling up to raid those Cyber Monday Deals!",
//     commenter: 'military_rakeysh029',
//     comment: 'dude whats up'
// })
// .then(function(response) {
//     console.log('row created', response);
// })
// .catch(function(err) {
//     console.log('THERE IS A PROBLEM WITH THIS CREATION', err);
// });

// READ

// db.Post.findOne({
//     where: { username: 'soarrescue'}
// })
// .then(function(res) {
//     console.log('This is soarrescue', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING SOARRESCUE',err);
// })

// db.Post.findOne({
//     where: { post: 'picture1' }
// })
// .then(function (res) {
//     console.log('This is soarrescue', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING SOARRESCUE', err);
// })

// db.Post.findOne({
//     where: { username: 'usmcdrumcorps' }
// })
// .then(function (res) {
//     console.log('This is soarrescue', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING SOARRESCUE', err);
// })

// db.Post.findByPk(2)
// .then(function(res) {
//     console.log('This is primary key 2', res);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR FINDING 2', err);
// })

// db.Post.findAll({
//     where: { username: 'soarrescue' }
// })
// .then(function (res) {
//     console.log('This is soarrescue', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING SOARRESCUE', err);
// })

// db.Post.findAll({
//     where: { post: 'picture1'}
// })
// .then(function (res) {
//     console.log('This is soarrescue', res);
// })
// .catch(function (err) {
//     console.log('THERE IS AN ERROR FINDING SOARRESCUE', err);
// })

// db.Post.update({
//     post: 'picture2'
// }, {
//     where: { id: 2 }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })
db.Post.update({
    description: 'Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...Coming up at #DizzysClub...'
}, {
    where: { id: 1 }
})
.then(function(res) {
    console.log('Updated');
})
.catch(function(err) {
    console.log('THERE IS AN ERROR', err);
})
// db.Post.update({
//     post: 'picture 3'
// }, {
//     where: { id: 3 }
// })
// .then(function(res) {
//     console.log('Updated');
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR', err);
// })

// db.Post.destroy({
//     where: { id: 4 }
// })
// .then(function(destroyed) {
//     console.log('Post destroyed', destroyed);
// })
// .catch(function(err) {
//     console.log('THERE IS AN ERROR DESTROYING', err);
// })