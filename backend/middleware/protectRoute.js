import jwt from "jsonwebtoken";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized- No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized No token provided" });
    }
    const user = await user.findById(decoded.UserId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next;
  } catch (error) {
    console.log("error in protect Route middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default protectRoute;