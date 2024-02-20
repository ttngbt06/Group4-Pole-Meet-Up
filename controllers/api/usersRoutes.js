const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const usersData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = usersData.id;
            req.session.logged_in = true;

            res.status(200).json(usersData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const usersData = await User.findOne({ where: { email: req.body.email } });

        if (!usersData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await usersData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = usersData.id;
            req.session.logged_in = true;

            res.json({ user: usersData, message: 'You are now logged in!' });
        });

    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;