const mongoose = require("mongoose");
const data_schema = require("./schema");

const get_all = async (req, res) => {
  const find_data = await data_schema.find({});
  res.json(find_data);
};

const get_one = async (req, res) => {
  const find_one = await data_schema.findById(req.params.id);
  res.json(find_one);
};

const post_data = async (req, res) => {
  const data = data_schema({
    ...req.body,
  });
  const save_data = await data.save();
  res.json(save_data);
};

const put_data = async (req, res) => {
  const update_data = await data_schema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(update_data);
};

const delete_data = async (req, res) => {
  const del_data = await data_schema.findByIdAndDelete(req.params.id);
  res.json(del_data);
};

module.exports = { get_all, get_one, post_data, put_data, delete_data };
