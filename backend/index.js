const express = require("express")
const cors = require ("cors")
const mongoose = require("mongoose")
const app = express();
const PORT = 3001
const userModel = require('./Models/register')
const productModel = require('./Models/productform')
const orderModel = require('./Models/orderDetails')
const payModel = require ('./Models/paymodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = "sjnvkffjskghnrxm"
const cookieparser = require('cookie-parser')
const multer = require('multer')
const cloudinary = require("cloudinary").v2
//const uploadMiddleware = multer({dest: 'uploads/' })
const fs = require('fs')
const Stripe = require("stripe");
const path = require("path");
const stripe = Stripe("sk_test_51QwK6XQFCTgqXGipJIDTppb5M3xFjKPkmusojMlE9YMv3N9eF2dqe9NopvTkD2M0Xmd5DfErcoc0FiyTC1o6lMwe00WluuwsyV");
require('dotenv').config();
const MONGO_URL = 'mongodb+srv://sakthivelkalidass:cMounVHTZbigQDIy@senshop.tfixn.mongodb.net/senshop?retryWrites=true&w=majority'


mongoose.connect(MONGO_URL, {
    serverSelectionTimeoutMS: 50000,
}).then(() => {
    console.log('mongodb connected')
   
   
}).catch(() => {console.log('mongodb not connected')
})

   

if(!MONGO_URL) {
    console.error('missing mongodb url')
}

app.use(express.json())

app.use(cookieparser())

//app.use('/uploads', express.static(path.join(__dirname , 'uploads')));

app.use(cors({
    origin: "https://senshop-frontend-six.vercel.app",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true
}))

app.get('/', (req, res) => {
    res.json('mern stack developer')
})

app.post('/register', async (req, res) => {
    const {name, email, password}= req.body;

    try {
        const user = await userModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if(user){
        const passOk = bcrypt.compareSync(password, user.password);
        if (passOk) {
             jwt.sign({email: user.email, _id: user._id, name: user.name }, jwtSecret, (err, token) => {
                  if(err) {
                     res.json(err)
                    }
                  res.cookie('token', token, 
                    {httpOnly: true,
                     sameSite: 'none',
                     secure: true
                    }).json({user, token})
         })}}
    else {
        res.json('not found')
    }
})

   
app.get('/profile', (req, res) => {
    console.log(req.cookies)
    const {token} = req.cookies;
    if(token){
         jwt.verify(token, jwtSecret, { }, async(err, userData) => {
            if(err) throw err;
            const {name, email,_id} = await userModel.findById(userData._id);
            res.json({name, email, _id})
         });
         
    }
    else {
        res.json('not found')
    }
})

      
app.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'none',
        secure: true
    })
    res.json("logout successfully")
})

function getUserDataform (req) {
    return new Promise ((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret,  async (err, userData) => {
            if(err) throw err;
            resolve(userData)
        })
    })
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



console.log(new Date().toLocaleString());
console.log(new Date().toISOString());

const storage = multer.diskStorage({});
const upload = multer({ storage });


app.post('/productform', upload.single('image'),async (req, res) => {

    try{
    
    if(!req.file) {
        return res.status(400).json({error: "no file uploaded"})
       }

    const {name, category, price, discountprice, stock, description} = req.body;

    const file = req.file;

    const timestamp = Math.floor(Date.now()/1000)

    const result = await cloudinary.uploader.upload(file.path , {timestamp});
    fs.unlinkSync(file.path);

    const productDoc = productModel.create({
        name, category, price, discountprice, stock, description,
        image: result.secure_url,
    })
    console.log("Fetched data:" , JSON.stringify(productDoc, null , 2))
    res.json(productDoc)
   }
   catch (error) {
    console.error("Fetched data error:" ,JSON.stringify(error, null , 2))
    res.status(500).json({error:"internal server error"})
 }
})
  
app.get('/riceproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: "rice"})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/pulseproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: {$regex:/^pulses/i }})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/personalCareproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: {$regex:/^personal care things/i }})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/chocolatesproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: {$regex:/^chocolates/i }})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/snacksproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: {$regex:/^snacks/i }})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/noteproductlist', async (req, res) => {

    try {
        const product = await productModel.find({name: {$regex:/^note/i }})
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/productsDetail/:id', async (req, res) => {

    const {id} = req.params;
    try {
        const product = await productModel.findById(id)
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.post('/orderDetails', async(req, res)  => {
    const userData = await getUserDataform(req);

    const {pack, place, address, orderDate, delieveryDate, price} = req.body;

    const orderSave = await orderModel.create({
        pack, place, address, orderDate, delieveryDate, price, user: userData._id
    })
    res.json(orderSave)
})

app.post('/payoptions', async(req, res)  => {
    const userData = await getUserDataform(req);

    const {pay, places} = req.body;

    const orderSave = await payModel.create({
        pay, places, user: userData._id
    })
    res.json(orderSave)
})



app.get('/dashboard', async(req, res) => {
    const userData = await getUserDataform(req);
    res.json( await payModel.find({user: userData._id}).populate({
        path:'places', 
        populate: {
            path: 'place'
        }})
    
    )})

app.get('/payDetail/:id', async (req, res) => {

    const {id} = req.params;
    try {
        const product = await payModel.findById(id)
        .populate({
            path:'places', 
            populate: {
                path: 'place'
            }}).populate('user')
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/bookingDetail/:id', async (req, res) => {

    const {id} = req.params;
    try {
        const product = await orderModel.findById(id).populate('place').populate('user')
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/senshopproducts', async (req, res) => {

    try {
        const product = await productModel.find()
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

app.get('/userorders', async (req, res) => {

    try {
        const product = await payModel.find().populate({
            path:'places', 
            populate: {
                path: 'place'
        }}).populate('user')
        res.json(product)
    }
    catch (err) {
        res.json(err)
    }
})

 
app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ["card"],
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, (req, res) => {
    console.log("server is running on 3001")

})

