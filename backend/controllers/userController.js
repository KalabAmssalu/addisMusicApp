const User = require('../models/User');
const generateToken = require('../util/generateToken');

exports.createUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, password, email });
        const savedUser = await newUser.save();

        generateToken(res, savedUser._id);

        return res.status(201).json({ 
            _id: savedUser._id, 
            name: savedUser.name, 
            email: savedUser.email 
        });
    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).json({ message: error.message });
        } else {
            console.error('Error occurred after headers were sent:', error);
        }
    }
};


exports.authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            generateToken(res, user._id);
            return res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.logoutUser = async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({message: 'User logged Out'})
}

exports.getUser = async(req, res) =>{
   
      const findUser = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
      }
      res.status(200).json(findUser);
   
}


exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateUser = async (req, res) => {

        const updatedUsers = await User.findById(req.user._id)
        if (updatedUsers){
            updatedUsers.name = req.body.name || updatedUsers.name;
            updatedUsers.email = req.body.email || updatedUsers.email;

            if(req.body.password){
                updatedUsers.password = req.body.password;
            }
            const updated = await updatedUsers.save()

            res.status(200).json({
                _id: updated._id,
                name: updated.name,
                email: updated.email
            })
        }else{
        res.status(500).json({message: "user not found"})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        await User.findByIdAndDelete(_id = id)
        res.status(204).end();
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}