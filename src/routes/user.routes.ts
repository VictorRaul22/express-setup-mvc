import express, { type Router } from "express";
const router: Router = express.Router();
router.get("/", (_req, res) => {
  res.json({ test: "hello word" });
});
router.get("/test", (_req, res) => {
  res.json({ test: "test logger" });
});
export { router as userRouter };
