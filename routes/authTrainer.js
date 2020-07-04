const express = require('express');
const router = express.Router();

const {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
  trainerPhotoUpload,
} = require('../controllers/authTrainer');

//Auth Protect Middleware
const { protect } = require('../middleware/authTrainer');

//Create route

router.post('/register', register,(req,res)=>{
  console.log(req.data);
});

router.post('/login', login,(req,res)=>{
  console.log(req.data);
});
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);

router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

//Route /api/v1/trainer/:id/photo
router.route('/:id/photo').put(protect, trainerPhotoUpload);

module.exports = router;
