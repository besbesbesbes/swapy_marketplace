import createError from "../utils/create-error.js"
import prisma from "../config/prisma.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req,res,next)=>{
    try{
        const {name, email, password} = req.body
        //validate
        if (!name || !email || !password){
            createError(400,"Name, email and password should be provided")
        }
        if (typeof(name) !== "string" || typeof(email) !== "string" || typeof(password) !== "string"){
            createError(400,"Type of name, email and password should be string")
        }
        if (name.length <= 6){
            createError(400,"Name length at least 6 characters")
        }
        const isUserExist = await prisma.users.findFirst({
            where:{
                userName: name,
            }
        })
        if (isUserExist){
            createError(400,"Username already exist")
        }
        const isEmailExist = await prisma.users.findFirst({
            where:{
                userEmail: email,
            }
        })
        if (isEmailExist){
            createError(400, "Email already exist")
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password,10)
        //generate display name
        const displayName = name.slice(0, 3) + '*' + name.slice(-2)
        //insert db create new user
        const newUser = await prisma.users.create({
            data:{
                userName: name,
                userDisplayName: displayName,
                userEmail: email,
                userPassword: hashedPassword,
            },
            select:{
                userId: true,
                userName: true,
                userEmail: true,
            }
        })
        res.json({newUser})
    }catch(err){
        next(err)
    }
}
export const login = async(req,res,next)=>{
    try{
        const {name, password} = req.body
        //validate
        if (!name || !password){
            createError(400,"Name and password should be provide")
        }
        if (typeof(name) !== "string" || typeof(password) !== "string"){
            createError(400, "Name and password should be string")
        }
        const user = await prisma.users.findFirst({
            where:{
                userName: name
            }
        })
        if (!user){
            createError(400, "User not found")
        }
        //compare password
        const isPasswordMatch = await bcrypt.compare(password, user.userPassword)
        if(!isPasswordMatch){
            createError(400, "Email or password is invalid")
        }
        //create access token
        const token = jwt.sign({id: user.userId}, process.env.JWT_SECRET,{
            expiresIn: "30d"
        })
        res.json({token})
    }catch(err){
        next(err)
    }
}