import bcrypt from "bcrypt";
import { NextFunction, Request, Response, Router } from "express";

import { UserService } from '../service/userService';

import { User } from '../entity/User';

import { AuthHandler } from "../middlewares/authHandler.middleware";