const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://test:${process.env.MONGO_DB_PASSWORD}@cluster0.ez75xfb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);
