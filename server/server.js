import express from "express";
import userRoutes from "./routes/usersRoutes.js";
import creatorRoutes from "./routes/creatorRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import creatorCampaignRoutes from "./routes/creatorCampaignRoutes.js";

//setup server
const PORT = 6000;
const server = express();

//start middleware
server.use(express.json());
server.use("/static", express.static("server/public"));

//api routes
server.get("/api/v1", (req, res) => {
  res.status(200);
  res.json({ message: "Hello!" });
});

// Users routes
server.use("/api/v1/users", userRoutes);

// Creators routes
server.use("/api/v1/creators", creatorRoutes);

// Campaign routes
server.use("/api/v1/campaigns", campaignRoutes);

// Blog routes
server.use("/api/v1/blogs", blogRoutes);

// Subscriptions routes
server.use("/api/v1/subscriptions", subscriptionRoutes);

// CreatorCampaign routes
server.use("/api/v1/creatorcampaign", creatorCampaignRoutes);

// Supporters routes
server.get("/api/v1/supporters", (req, res, next) => {});
server.get("/api/v1/supporters/:id", (req, res, next) => {});
server.post("/api/v1/supporters", (req, res, next) => {});
server.put("/api/v1/supporters/:id", (req, res, next) => {});
server.delete("/api/v1/supporters/:id", (req, res, next) => {});

//fail over routes
server.use("/", express.static("dist"));
//server.get("*", (req, res, next) => {} )

server.use((req, res, next) => {
  res.status(404);
  res.send({ message: "Not Found" });
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});
//start server
server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
