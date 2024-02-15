const { Votes } = require('../models');

const votesData = [
{

},
{

},
{

},
];

const seedVotes = () => Votes.bulkCreate(votesData);

module.exports = seedVotes;