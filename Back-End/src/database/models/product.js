module.exports = (sequelize, DataTypes) =>
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    price: {
      type: DataTypes.STRING(5),
      allowNull:false
    },
    salePrice: {
      type: DataTypes.STRING(5),
      allowNull:false
    },
    unit: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    src: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    special: {
      type: DataTypes.BOOLEAN
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
