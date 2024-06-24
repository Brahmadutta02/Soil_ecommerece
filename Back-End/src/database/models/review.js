module.exports = (sequelize, DataTypes) =>
  sequelize.define("review", {
    description: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    stars: {
      type: DataTypes.INTEGER(1),
      allowNull:false
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });