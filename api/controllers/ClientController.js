/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // 
    // _config: {
    //     actions: false,
    //     shortcuts: false,
    //     rest: false
    //   },

    hello: async function (req, res) {
        return res.send('Hi there! ' + req.param('name'));
    }
};

