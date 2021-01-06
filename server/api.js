//功能定义函数

const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

 
const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});
 
module.exports = {
  login(req, res) {
    let item = req.body;
    let username = item.username;
    let password = item.password;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.selectUser;
        connection.query(sql, [username, password], (err,result) => { 
            connection.release();   
            var res1 = {};         
            if(result.length > 0) {
              res1.status = 200; 
              res1.message = result;            
              res.json(res1);
            } else {    
              res1.status = 0;     
              res.json(res1);
            }
        })
    })
  },
  getData(req, res, next) {
    let username = req.query.user;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.getUserData;
        connection.query(sql, [username], (err,result) => {
            connection.release();          
            if(result.length > 0) {             
              res.json(result);
            } else {         
              res.json("失败");
            }
        })
    })
  },
  loginCheck(req, res, next) {
    let username = req.query.user;
    let password = req.query.pwd;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.selectUser;
        connection.query(sql, [username, password], (err,result) => { 
            connection.release();  
            var res1 = {};         
            if(result.length > 0) {  
              res1.status = 200;           
              res.json(res1);
            } else {     
              res1.status = 0;         
              res.json(res1);
            }
        })
    })
  },
  getBdData(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.getBdData;
        connection.query(sql, [id], (err,result) => { 
            connection.release();  
            var res1 = {};         
            if(result.length > 0) {  
              res1.status = 200;
              res1.message = result;           
              res.json(res1);
            } else {     
              res1.status = 0;         
              res.json(res1);
            }
        })
    })
  },
  addBd(req, res, next) {
    let id = req.query.id;
    let user_name = req.query.user_name;
    let user_tel = req.query.user_tel;
    let create_time = req.query.create_time;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.addBd;
        connection.query(sql, [id,user_name,user_tel,create_time], (err,result) => { 
            connection.release();  
            var res1 = {};         
            if(err) {            
              res1.status = 0;         
              res.json(res1);
            } else {     
            res1.status = 200;       
              res.json(res1);
            }
        })
    })
  },
  removeBd(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql = sqlMap.removeBd;
        console.log(sql);
        connection.query(sql, [id], (err,result) => { 
            connection.release();  
            var res1 = {};         
            if(err) {  
              res1.status = 0;         
              res.json(res1);
            } else {     
            res1.status = 200;        
              res.json(res1);
            }
        })
    })
  },
  getOneDaili(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql1 = sqlMap.getOneDaili;
        connection.query(sql1, [id], (err,result) => { 
            connection.release();     
            var res1 = {};    
            if(err) {  
              res1.status = 0;   
              res.json(res1);      
            } else {     
              res1.status = 200;
              res1.message = result;
              res.json(res1);        
            }
        });
    })
  },
  getTwoDaili(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getTwoDaili;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getUpNum(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getUpNum;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getOneAgent(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getOneAgent;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getTwoAgent(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getTwoAgent;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getRecive(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getRecive;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getDailiRecive(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getDailiRecive;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getUserRecive(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getUserRecive;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getQianYue(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql2 = sqlMap.getQianYue;
        var sql3 = sqlMap.getQianYue2;
        connection.query(sql2, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  getQianYue2(req, res, next) {
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql3 = sqlMap.getQianYue2;
        connection.query(sql3, [id], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  updatePwd(req, res, next) {
    let oldPwd = req.query.old;
    let newPwd = req.query.new;
    let id = req.query.id;
    pool.getConnection((err,connection) => {
        var sql3 = sqlMap.updatePwd;
        connection.query(sql3, [newPwd,id,oldPwd], (err,result) => { 
            connection.release(); 
            var res1 = {};        
            if(err) {  
              res1.status = 0;
              res.json(res1);         
            } else {     
              res1.status = 200;   
              res1.message = result;
              res.json(res1);      
            }
        });
    })
  },
  // storeImg(path, next) {  //存储头像图片路径到数据库
  //   pool.getConnection((err,connection) => {
  //       var sql = sqlMap.storeImg;
  //       connection.query(sql, [path,16], (err,result) => {
  //             connection.release(); 
  //             if(err) {
  //               console.log(err); 
  //             } else {
  //               console.log('图片存储成功');
  //             }               
  //         })   
  //   })
  // },
  // getImg(req,res, next) {
  //   pool.getConnection((err,connection) => {
  //       var id = req.query.id;
  //       var sql = sqlMap.getImg;
  //       connection.query(sql, [id], (err,result) => {
  //             var res1 = {};
  //             connection.release(); 
  //             if(err) {
  //               console.log(err);
  //               res1.status = 0;
  //               res.json(res1);
  //             } else {
  //               res1.status = 200;
  //               res1.message = result;
  //               res.json(res1);
  //             }               
  //         })   
  //   })
  // },
}
