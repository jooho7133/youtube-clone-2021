export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube-clone-2021";
  res.locals.loggedInUser = req.session.user;
  next();
};
