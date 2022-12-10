const controller = {
    index: async (req, res, next) => {
        try {
            res.render("./index");
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = controller;
