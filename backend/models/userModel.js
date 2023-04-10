const { Schema, model } = require("../config/connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false }
},
  { timestamps: true });

userSchema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password")) {
    console.log("Password was not modified");
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  console.log("comparing...", candidatePassword);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) {
      console.log(err);
      return cb(err);
    }
    cb(null, isMatch);
  });
};

userSchema.methods.authenticate = function (formData, cb) {
  bcrypt.compare(formData.password, this.password, function (err, isMatch) {
    if (err && formData.email === this.email) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = model("user", userSchema);