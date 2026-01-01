import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware';
import { 
    acceptFriendRequest, 
    getRecommendedUsers,
    getMyFriends,
    getFriendRequests, 
    sendFriendRequest, 
    getOutGoingFriendReqs } from '../controllers/user.controller.js';

const router = express.Router();

// apply auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.get("/friend-request/:id", sendFriendRequest);
router.get("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutGoingFriendReqs);

export default router;