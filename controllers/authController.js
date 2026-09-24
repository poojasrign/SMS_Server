const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log("Username:", username);
        console.log("Password:", password);

        if (username === "admin" && password === "admin123") {
            return res.status(200).json({
                message: "Login successful",
                username: username
            });
        }

        res.status(401).json({
            message: "Invalid username or password"
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    loginAdmin
};