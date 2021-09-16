module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define(
    "Data",
    {
      value: { type: DataTypes.ENUM, values: ["cancel", "no", "yes"], allowNull: false },
      synonyms: { type: DataTypes.STRING, allowNull: false }
    },
    {
      underscored: true
    }
  );
  return Data;
};
