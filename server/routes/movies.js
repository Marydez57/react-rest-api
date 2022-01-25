import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

router.get("/", async (req, res, next) => {
  try {
    const movies = await getAllMovies()
    res.json({
      message: "We Have got Some Cool Movies for You.",
      payload: movies
    })
    
  } catch (err) {
    console.error(err.message)
    
  }

})

export default router;
