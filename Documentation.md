Routers
1.User Routes
app.use("/api/users", userRoutes);
// get user
router.get('/:id', userController.get_user);

// follow and unfollow user
router.put('/:id/follow', userController.follow_user);
router.put('/:id/unfollow', userController.unfollow_user);