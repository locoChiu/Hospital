// 操作数据库语句文件

var sqlMap = {
  selectUser: 'select id from user_info where user_name = ? and user_pwd = ? ',
  getUserData:'select * from user_info where user_name = ? ',
  getBdData:'select * from appointment where create_user = ? ',
  addBd:'insert into appointment (create_user,user_name,user_tel,create_time) values (?,?,?,?)',
  removeBd:'delete from appointment where id = ?',
  getOneDaili:'select count(id) count from user_son where user_id = ?',
  getTwoDaili:'select count(id) count from user_grandson where user_id = ?',
  getUpNum:'select user_tel from user_info where id = (select user_id from user_son where user_sid = ?)',
  getOneAgent:'select real_name,reg_time from user_info where id in (SELECT user_sid from user_son where user_id = ?)',
  getTwoAgent:'select real_name,reg_time from user_info where id in (SELECT user_gsid from user_grandson where user_id = ?)',
  getRecive:'select user_profit,product_profit from user_info where id = ?',
  getDailiRecive:'select * from user_profit_view where user_Id = ? and pro_state = 1',
  getUserRecive:'select * from user_profit_view where user_Id = ? and pro_state = 2',
  getQianYue:'select user_name,user_tel,spend_time,prj_name,prj_price from profit_detail d, project_type t where d.second_name = ? and d.third_name = 0 and d.prj_type = t.id',
  getQianYue2:'select user_name,user_tel,spend_time,prj_name,prj_price from profit_detail d, project_type t where d.third_name = ? and d.prj_type = t.id ',
  updatePwd:'update user_info set user_pwd = ? where id = ? and user_pwd = ?',
  storeImg:'update user_info set head_img_src = ? where id = ?',
  getImg:'select head_img_src from user_info where id = ?',
}
  
module.exports = sqlMap;