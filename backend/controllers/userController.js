const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const {name, password, email} = req.body;
        const newUser = new User({name, password, email})
        const savedUser = await newUser.save()
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedUsers = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(updatedUsers)
    } catch (error) {
        res.status(500).json({message: error.message})
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