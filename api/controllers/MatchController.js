/**
 * MatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    findOne: async function (req, res) {
        let id = req.param('id');
        let match = await Match.findOne({ id: id }).populate('goals1').populate('goals2').populate('team1').populate('team2')
        for (const goal of match.goals1) {
            goal.player = await Player.findOne({ id: goal.player });
        }
        for (const goal of match.goals2) {
            goal.player = await Player.findOne({ id: goal.player });
        }
        return res.json(match);
    }
};

