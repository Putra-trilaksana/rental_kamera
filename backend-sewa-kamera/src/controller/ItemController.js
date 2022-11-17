import { PrismaClient } from "@prisma/client";
import fs from "node:fs"

const prisma = new PrismaClient();

// Add Item
export const addItem = async (req, res) => {
    try {
        const {jenis, merek, tipe, nama, desc, harga, disc} = req.body;
        const imageNama = req.file.filename;
        
        const item = await prisma.barang.create({
            data: {
                jenis,
                merek,
                tipe,
                nama,
                desc, 
                harga, 
                disc, 
                image: imageNama,
            }
        });
        console.log(req.file);
        return res.status(200).json(item);

    } catch (error) {
        res.status(500).send(error);
    }
};
// Add Item

// Get Item
export const showProducts = async (req, res) => {
    try {
        const product = await prisma.barang.findMany()
        return res.status(200).json(product);
    } 
    catch (error) {
        res.status(500).send(error)
    }
};
// Get Item

// Get Item By ID
export const getProductsById = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await prisma.barang.findUnique({
            where: {
                id: parseInt(id),
            }
        })
        return res.status(200).json({
            success: true,
            message: "Success Get Item",
            data: product,
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
// Get Item By ID

// Update Item
export const editProducts = async (req, res) => {
    const oldImage = await prisma.barang.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        select: {
            image: true,
        }
    });

    let new_image = "";
    console.log(oldImage.image);
    if (req.file) {
        new_image = req.file.filename;
        try {
            fs.unlinkSync("./uploads/" + oldImage.image);
        } catch (error) {
            console.log(error)
        }
    }else {
        new_image = req.body.old_image;
    }

    try {
        const {jenis, merek, tipe, nama, desc, harga, disc,} = req.body;
        const {id} = req.params;
        const imageNama = new_image;

        const updateUser = await prisma.barang.update({
            where: {
                id: parseInt(id)
            },
            data: {
                jenis,
                merek,
                tipe, 
                nama,
                desc, 
                harga,
                disc,
                image: imageNama,
            },
          });

          return res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
// Update Item

// Delete Item
export const deleteItems = async (req, res) => {
    const Image = await prisma.barang.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        select: {
            image: true,
        }
    });
    try {
        const {id} = req.params;
        fs.unlinkSync("./uploads/" + Image.image);
        const deleteItem = await prisma.barang.delete({
            where: {
                id: parseInt(id),
            }
        });

        return res.status(200).json({message: "Item Deleted Successfully"})
    } catch (error) {
        res.status(500).json(error);
    }
};
// Delete Item
