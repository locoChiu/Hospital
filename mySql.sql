/*
Navicat MySQL Data Transfer

Source Server         : myDB
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : hospital_latest

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2021-01-06 08:23:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_user` int(11) DEFAULT NULL,
  `user_name` varchar(30) DEFAULT NULL,
  `user_tel` varchar(11) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `date_state` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of appointment
-- ----------------------------
INSERT INTO `appointment` VALUES ('2', '16', '邱泽', '1234', '2020-12-11', null);
INSERT INTO `appointment` VALUES ('3', '16', '邱泽', '123', '2020-12-17', null);

-- ----------------------------
-- Table structure for hosplog
-- ----------------------------
DROP TABLE IF EXISTS `hosplog`;
CREATE TABLE `hosplog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logerror` varchar(255) DEFAULT NULL,
  `logtype` varchar(100) DEFAULT NULL,
  `logTime` datetime DEFAULT NULL,
  `logUser` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of hosplog
-- ----------------------------

-- ----------------------------
-- Table structure for profit_detail
-- ----------------------------
DROP TABLE IF EXISTS `profit_detail`;
CREATE TABLE `profit_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prj_type` int(11) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_tel` varchar(11) DEFAULT NULL,
  `spend_time` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `third_name` int(11) DEFAULT '0',
  `third_profit` decimal(18,3) DEFAULT NULL,
  `second_name` int(11) DEFAULT '0',
  `second_profit` decimal(18,3) DEFAULT NULL,
  `first_name` int(11) DEFAULT '0',
  `first_profit` decimal(18,3) DEFAULT NULL,
  `spend_bal` decimal(18,3) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of profit_detail
-- ----------------------------
INSERT INTO `profit_detail` VALUES ('11', '2', 'B', '12345678901', '2020-11-24 15:17:59', 'B注册会员。', '0', '0.000', '15', '4000.000', '0', '0.000', '10000.000');
INSERT INTO `profit_detail` VALUES ('12', '2', 'C', '12345678901', '2020-11-24 15:18:28', 'C注册会员。', '0', '0.000', '16', '4000.000', '15', '800.000', '10000.000');
INSERT INTO `profit_detail` VALUES ('15', '5', '张三', '123', '2020-11-24 00:00:00', '张三购买了护肤霜。', '17', '80.000', '16', '16.000', '15', '8.000', '200.000');

-- ----------------------------
-- Table structure for project_type
-- ----------------------------
DROP TABLE IF EXISTS `project_type`;
CREATE TABLE `project_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prj_name` varchar(200) DEFAULT NULL,
  `prj_price` decimal(10,2) DEFAULT NULL,
  `prj_profit1` decimal(18,3) DEFAULT NULL,
  `prj_profit2` decimal(18,3) DEFAULT NULL,
  `prj_profit3` decimal(18,3) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `prj_state` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of project_type
-- ----------------------------
INSERT INTO `project_type` VALUES ('2', '白金会员', '10000.00', '0.080', '0.400', '0.000', '0', '2020-11-21 17:17:32', '1');
INSERT INTO `project_type` VALUES ('3', '黄金会员', '20000.00', '0.080', '0.400', '0.000', '0', '2020-11-21 17:21:10', '1');
INSERT INTO `project_type` VALUES ('4', '铂金会员', '30000.00', '0.080', '0.400', '0.000', '0', '2020-11-21 17:21:51', '1');
INSERT INTO `project_type` VALUES ('5', '护肤霜', '200.00', '0.040', '0.080', '0.400', '0', '2020-11-21 17:23:36', '2');

-- ----------------------------
-- Table structure for user_grandson
-- ----------------------------
DROP TABLE IF EXISTS `user_grandson`;
CREATE TABLE `user_grandson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `user_gsid` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_grandson
-- ----------------------------
INSERT INTO `user_grandson` VALUES ('4', '15', '17', '2020-11-24 15:18:28');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) DEFAULT NULL,
  `user_pwd` varchar(32) DEFAULT NULL,
  `real_name` varchar(30) DEFAULT NULL,
  `user_tel` varchar(11) DEFAULT NULL,
  `user_sex` int(1) DEFAULT NULL,
  `user_addr` varchar(255) DEFAULT NULL,
  `head_img_src` varchar(500) DEFAULT NULL,
  `reg_time` datetime DEFAULT NULL,
  `user_bal` decimal(18,3) DEFAULT NULL,
  `user_profit` decimal(18,3) DEFAULT NULL,
  `user_level` varchar(50) DEFAULT NULL,
  `product_profit` decimal(18,3) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `ix_query_usre_name` (`user_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('15', 'test01', 'd09ba0bd1c442dc5dd97b41071ddbef6', 'A', '12345678901', '0', '', null, '2020-11-24 15:17:25', '4816.000', '4800.000', '白金会员', '8.000');
INSERT INTO `user_info` VALUES ('16', 'test02', '4297f44b13955235245b2497399d7a93', 'B', '12345678901', '0', '', 'userHeadImg\\1606721214764.jpg', '2020-11-24 15:17:59', '4032.000', '4000.000', '白金会员', '16.000');
INSERT INTO `user_info` VALUES ('17', 'test03', 'E10ADC3949BA59ABBE56E057F20F883E', 'C', '12345678901', '0', '123123', null, '2020-11-24 15:18:28', '240.000', '0.000', '白金会员', '80.000');

-- ----------------------------
-- Table structure for user_profit_view
-- ----------------------------
DROP TABLE IF EXISTS `user_profit_view`;
CREATE TABLE `user_profit_view` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `User_Cont` varchar(255) DEFAULT NULL,
  `Prj_Name` varchar(255) DEFAULT NULL,
  `Prj_Bal` decimal(18,3) DEFAULT NULL,
  `create_Time` datetime DEFAULT NULL,
  `bal` decimal(18,3) DEFAULT NULL,
  `user_Id` int(11) DEFAULT NULL,
  `pro_state` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_profit_view
-- ----------------------------
INSERT INTO `user_profit_view` VALUES ('7', 'A-->B', '白金会员', '10000.000', '2020-11-24 15:17:59', '4000.000', '15', '1');
INSERT INTO `user_profit_view` VALUES ('8', 'B-->C', '白金会员', '10000.000', '2020-11-24 15:18:28', '4000.000', '16', '1');
INSERT INTO `user_profit_view` VALUES ('9', 'A-->B-->C', '白金会员', '10000.000', '2020-11-24 15:18:28', '4000.000', '15', '1');

-- ----------------------------
-- Table structure for user_son
-- ----------------------------
DROP TABLE IF EXISTS `user_son`;
CREATE TABLE `user_son` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `user_sid` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_son
-- ----------------------------
INSERT INTO `user_son` VALUES ('9', '15', '16', '2020-11-24 15:17:59');
INSERT INTO `user_son` VALUES ('10', '16', '17', '2020-11-24 15:18:28');

-- ----------------------------
-- Table structure for vip_level
-- ----------------------------
DROP TABLE IF EXISTS `vip_level`;
CREATE TABLE `vip_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vip_level` varchar(30) DEFAULT NULL,
  `discount` decimal(11,5) DEFAULT NULL,
  `level_time` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of vip_level
-- ----------------------------
