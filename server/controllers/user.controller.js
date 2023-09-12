const { User } = require("../models");
const Model = User;

async function find(criteria = {}) {
  try {
    const payload = await Model.find(criteria);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

async function findOne(criteria = {}) {
  try {
    const payload = await Model.find(criteria).limit(1);
    return Array.isArray(payload) ? payload[0] : payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

//find a user's favorite plants
async function findById(id) {
  try {
    const payload = await Model.findById(id).populate("favPlant");
    console.log(payload);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

async function create(body) {
  try {
    const payload = await Model.create(body);
    console.log("create", payload);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

async function update(criteria, body) {
  try {
    const payload = await Model.findOneAndUpdate(criteria, body, { new: true });
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

//original version of updateById:
// async function updateById(id, body) {
//   try {
//     const payload = await Model.findByIdAndUpdate(id, body, { new: true });
//     return payload;
//   } catch (err) {
//     if (process.env.NODE_ENV === "development") console.log(err);
//     throw new Error(err);
//   }
// }

async function updateById(userId, plantId) {
  try {
    const payload = await Model.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { favPlant: plantId } },
      { runValidators: true, new: true }
    );
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

//tried findByIdAndUpdate and didn't work; tutor suggested using findOneAndUpdate
// async function remove(userId, plantId) {
//   try {
//     const payload = await Model.findOneAndUpdate(userId, {
//       $pull: { favPlant: plantId },
//     });
//     return payload;
//   } catch (err) {
//     if (process.env.NODE_ENV === "development") console.log(err);
//     throw new Error(err);
//   }
// }

//original version of remove:
async function remove(id) {
  try {
    const payload = await Model.findByIdAndDelete(id);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

async function addFavorite(req) {
  try {
    const payload = await Model.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {favPlant: req.params.plantId}},
      {new:true, runValidators: true},
    );return payload
  }   catch (err) {
      if (process.env.NODE_ENV === "development") console.log(err);
      throw new Error(err);
  }
}

module.exports = {
  find,
  findOne,
  findById,
  create,
  update,
  updateById,
  remove,
  addFavorite,
};
