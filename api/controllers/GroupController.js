/**
 * GroupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    findOne: async function (req, res) {
        let id = req.param('id');
        let group = await Group.findOne({ id: id }).populate('teams').populate('matches');
        for (const match of group.matches) {
            match.team1 = await Team.findOne({ id: match.team1 });
        }
        for (const match of group.matches) {
            match.team2 = await Team.findOne({ id: match.team2 });
        }
        return res.json(group);
    }

};

