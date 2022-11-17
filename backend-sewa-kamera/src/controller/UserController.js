import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const register = async (req, res) => {
    try {
        const {email, password, username, alamat} = req.body;

        if (!email || !password || !username || !alamat){
            return res.status(400).send("Missing Parameters")
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashPassword,
                username,
                alamat,
            }
        });

        const token = jwt.sign({ email }, process.env.SECRET_KEY, {
			expiresIn: process.env.JWT_EXPIRE,
		});

        return res.cookie("token", token).json({
			success: true,
			message: "User successfully registered",
			data: user,
		})

    } catch (error) {
        res.status(500).send(error);
    }
};


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);
        if(!email || !password){
            return res.status(400).send("Missing Parameter X");
        };

        // check apakah user ada dalam db
        const user = await prisma.user.findUnique({where: {email}});
        if(!user){
            return res.status(404).send("Akun Tidak Ditemukan!");
        };

        // cek password
        const isMatched= await bcrypt.compare(password, user.password);
        if(!isMatched) {
            return res.status(401).send("Password Salah!")
        };

        const token = jwt.sign({email}, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
            // expiresIn: '30s',
            // maxAge: "20s"
        });

        console.log(token);
        return res.cookie("token", token)
        .json({
            success: true,
            message: "Login Successfully"
        });

    } catch (error) {
        
    }
};

export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.json({
        success: true,
        message: "Logged Out"
    });
};

export const getUser = async (req, res) => {
    try {
        const user = await prisma.user.findMany()
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }

};


export const deleteItems = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(id),
            }
        });

        return res.status(200).json({message: "User Deleted Successfully"})
    } catch (error) {
        res.status(500).json(error);
    }
};