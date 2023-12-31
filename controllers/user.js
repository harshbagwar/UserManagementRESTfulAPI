const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    const id = (req.params.id);
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    //const user=users.find((user)=>user.id===id);
    console.log(user);
    for (const field in body) {
        user[field] = body[field];
    }
    console.log(user);
    console.log("Body", body);
    return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    const id = Number(req.params.id);
    return res.json({ status: "pending" });
}

async function handlePostUserById(req, res) {
    //create new user
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are req" });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_Name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    console.log(result);
    return res.status(201).json({ msg: "Success" });
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handlePostUserById,
};