// import express and models
const router = require("express").Router();
// model import
const { User, Project } = require("../models");

// we will to get all projects from db
router.get("/", async (req, res) => {
  try {
    const getAllProject = await Project.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    res.render("home", getAllProject);
    res.status(200).json(getAllProject);
  } catch (error) {
    res.status(500).json(err);
  }
});
// we will need to 'each' through every project

module.exports = router;
