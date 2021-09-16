const { Data } = require("../models");

exports.getData = async (req, res, next) => {
  try {
    const value = await Data.findAll();
    const cancel = value.filter((item, index) => item.value === "cancel");
    const no = value.filter((item, index) => item.value === "no");
    const yes = value.filter((item, index) => item.value === "yes");
    res.status(200).json({ cancel, no, yes });
  } catch (error) {
    next(error);
  }
};

exports.postData = async (req, res, next) => {
  try {
    const body = req.body;
    await Data.create({ value: body.value, synonyms: body.synonyms });
    res.status(201).json({ message: "Create data successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deleteData = async (req, res, next) => {
  try {
    const param = req.params;
    await Data.destroy({ where: { id: param.id } });
    res.status(200).json({ message: "Delete data successfully" });
  } catch (error) {
    next(error);
  }
};
