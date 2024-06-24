module.exports = (sequelize, DataTypes) =>
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING(32),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull:false,

    },
    join_date: {
      type: DataTypes.STRING(10),
      allowNull:false
    },
    password_hash: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    logged_in: {
      type: DataTypes.BOOLEAN()
    }



  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
