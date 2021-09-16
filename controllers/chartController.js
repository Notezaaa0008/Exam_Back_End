const { Chart } = require("../models");

exports.getChart = async (req, res, next) => {
  try {
    const chartData = await Chart.findAll({ order: [["point", "DESC"]] });
    res.status(200).json({ chartData });
  } catch (error) {
    next(error);
  }
};

exports.postChart = async (req, res, next) => {
  try {
    const body = req.body;
    await Chart.create({ intent: body.intent, subIntent: body.subIntent, point: body.point });
    res.status(201).json({ message: "Create chart data successfully" });
  } catch (error) {
    next(error);
  }
};
