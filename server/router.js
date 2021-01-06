// 监听路由文件

const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/test', (req, res, next) => {
  console.log("This is test");
});
router.post('/login', (req, res) => {
  // console.log('This is login');
  api.login(req, res);
  // res.write('低着头期待白昼');
});
router.get('/getData', (req, res, next) => {
  api.getData(req, res, next);
});
router.get('/loginCheck',(req,res,next)=>{
	api.loginCheck(req,res,next);
})
router.get('/getBdData',(req,res,next)=>{
	api.getBdData(req,res,next);
})
router.get('/addBd',(req,res,next)=>{
	api.addBd(req,res,next);
})
router.get('/removeBd',(req,res,next)=>{
	api.removeBd(req,res,next);
})
router.get('/getOneDaili',(req,res,next)=>{
	api.getOneDaili(req,res,next);
})
router.get('/getTwoDaili',(req,res,next)=>{
	api.getTwoDaili(req,res,next);
})
router.get('/getUpNum',(req,res,next)=>{
	api.getUpNum(req,res,next);
})
router.get('/getOneAgent',(req,res,next)=>{
	api.getOneAgent(req,res,next);
})
router.get('/getTwoAgent',(req,res,next)=>{
	api.getTwoAgent(req,res,next);
})
router.get('/getRecive',(req,res,next)=>{
	api.getRecive(req,res,next);
})
router.get('/getDailiRecive',(req,res,next)=>{
	api.getDailiRecive(req,res,next);
})
router.get('/getUserRecive',(req,res,next)=>{
	api.getUserRecive(req,res,next);
})
router.get('/getQianYue',(req,res,next)=>{
	api.getQianYue(req,res,next);
})
router.get('/getQianYue2',(req,res,next)=>{
	api.getQianYue2(req,res,next);
})
router.get('/updatePwd',(req,res,next)=>{
	api.updatePwd(req,res,next);
})

// 文件上传函数 弃用
// ------------------------------------------------
// const multer  = require('multer');
 
// const storage = multer.diskStorage({
//   // destination:'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
//   destination(req,res,cb){
//     cb(null,'userHeadImg');
//   },
//   filename(req,file,cb){
//     const filenameArr = file.originalname.split('.');
//     cb(null,Date.now() + '.' + filenameArr[filenameArr.length-1]);
//   }
// });

// const upload = multer({storage});

// router.post('/upload', upload.single('avatar'), function (req, res, next) {
//     const file = req.file;
//     // console.log('文件类型：%s', file.mimetype);
//     // console.log('原始文件名：%s', file.originalname);
//     // console.log('文件大小：%s', file.size);
//     // console.log('文件保存路径：%s', file.path);
//     api.storeImg(file.path,next);
//     res.send({ code: 200 })
// })

// router.get('/getImg', (req, res, next) => {
//   api.getImg(req, res, next);
// });
// ------------------------------------------------

module.exports = router;