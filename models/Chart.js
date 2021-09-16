module.exports = (sequelize, DataTypes) => {
  const Chart = sequelize.define(
    "Chart",
    {
      intent: { type: DataTypes.STRING, allowNull: false },
      subIntent: { type: DataTypes.STRING, allowNull: false },
      point: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      underscored: true
    }
  );
  return Chart;
};
