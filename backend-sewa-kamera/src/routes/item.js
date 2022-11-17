import { Router } from 'express';
import * as ItemController from '../controller/ItemController.js';
import multer from 'multer'

// multer middleware
const storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

const upload = multer({
    storage: storage,
}).single("image");

export const router = Router();

router.post("/addItem", upload ,ItemController.addItem);
router.get("/getItem", ItemController.showProducts);
router.put("/updateItem/:id", upload, ItemController.editProducts);
router.get("/getItemById/:id", ItemController.getProductsById);
router.delete("/deleteItem/:id", ItemController.deleteItems)

