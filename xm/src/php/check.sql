/*
Navicat MySQL Data Transfer

Source Server         : zjh
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : check

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-27 19:18:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for checked
-- ----------------------------
DROP TABLE IF EXISTS `checked`;
CREATE TABLE `checked` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of checked
-- ----------------------------
INSERT INTO `checked` VALUES ('1', '13111111111', '111111');
INSERT INTO `checked` VALUES ('16', '13222222224', 'z111111');
INSERT INTO `checked` VALUES ('13', '13222222222', 'aaaaaa');
INSERT INTO `checked` VALUES ('14', '13222222222', 'aaaaaa');
INSERT INTO `checked` VALUES ('15', '13222222223', 'aaaaaa');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `img` varchar(255) NOT NULL,
  `font` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `span` varchar(255) NOT NULL,
  `del` varchar(255) NOT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('../img/list1.jpg', '黑土地有机速冻鲜糯白玉米', '49', '速冻锁鲜 软糯弹牙', '￥78.00', '1');
INSERT INTO `list` VALUES ('../img/list2.jpg', '黑土地有机速冻鲜糯白玉米', '29', '速冻锁鲜 软糯弹牙', '', '2');
INSERT INTO `list` VALUES ('../img/list3.jpg', 'sad', '38', 'das', 'sda', '3');
INSERT INTO `list` VALUES ('../img/list4.jpg', 'a', '27', 'sad', 'sda', '4');
INSERT INTO `list` VALUES ('../img/list5.jpg', 'sda', '26', 'dsa', 'dsa', '5');
INSERT INTO `list` VALUES ('../img/list7.jpg', 'sda', '232', 'sad', 'sda', '7');
INSERT INTO `list` VALUES ('../img/list8.jpg', 'dsa', '120', 'asd', 'sda', '8');
INSERT INTO `list` VALUES ('../img/list9.jpg', 'dsa', '220', 'sad', 'sda', '9');
INSERT INTO `list` VALUES ('../img/list10.jpg', 'dsa', '21', 'sda', 'sad', '10');
INSERT INTO `list` VALUES ('../img/list11.jpg', 'sd', '20', 'asd', 'dsa', '11');
INSERT INTO `list` VALUES ('../img/list12.jpg', 'asd', '39', 'sda', 'dsa', '12');
INSERT INTO `list` VALUES ('../img/list13.jpg', 'sda', '49', 'sda', 'sda', '13');
INSERT INTO `list` VALUES ('../img/list14.jpg', 'sda', '59', 'sda', 'sda', '14');
INSERT INTO `list` VALUES ('../img/list15.jpg', 'sda', '11', 'sda', 'dsa', '15');
INSERT INTO `list` VALUES ('../img/list16.jpg', 'dsa', '79', 'sad', 'asd', '16');
INSERT INTO `list` VALUES ('../img/list6.jpg', 'dfa', '112', 'das', 'asdd', '17');

-- ----------------------------
-- Table structure for ordercar
-- ----------------------------
DROP TABLE IF EXISTS `ordercar`;
CREATE TABLE `ordercar` (
  `id` int(10) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `num` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordercar
-- ----------------------------

-- ----------------------------
-- Table structure for xqy
-- ----------------------------
DROP TABLE IF EXISTS `xqy`;
CREATE TABLE `xqy` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xqy
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
