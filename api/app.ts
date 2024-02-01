import createError from "http-errors";
import express, { Request, Response, NextFunction, Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Express = express();

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req: Request, res: Response, next: NextFunction) {
  setTimeout(next, Math.floor(Math.random() * 2000 + 100));
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
