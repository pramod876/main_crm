const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,   
	};
	try {
		mongoose.connect('mongodb://localhost:27017/UserDB',connectionParams);
		// mongoose.connect(process.env.DB, connectionParams);  //server side connection port
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
