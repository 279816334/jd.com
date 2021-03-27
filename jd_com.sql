-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-03-27 10:53:07
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `jd.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `goods_title` varchar(255) NOT NULL COMMENT '商品名称',
  `goods_price` int(255) NOT NULL COMMENT '商品价格',
  `goods_img` varchar(255) NOT NULL COMMENT '商品图片',
  `goods_stock` int(255) NOT NULL COMMENT '商品库存'
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `goods_title`, `goods_price`, `goods_img`, `goods_stock`) VALUES
(2, 'Apple iPad Pro 11英寸平板电脑 2020年新款(128G WLAN版/全面屏/A12Z/Face ID/MY232CH/A) 深空灰色', 6229, '[{ \"src\": [\"../img/J_feeds/goods2_img1.jpg\",\"../img/J_feeds/goods2_img1_1.jpg\",\"../img/J_feeds/goods2_img2.jpg\",\"../img/J_feeds/goods2_img2_1.jpg\",\"../img/J_feeds/goods2_img3.jpg\",\"../img/J_feeds/goods2_img3_1.jpg\"] }]', 200),
(3, 'Apple MacBook Air 13.3 新款八核M1芯片(7核图形处理器) 8G 256G SSD 深空灰 笔记本电脑 MGN63CH/A', 7999, '[{ \"src\": [\"../img/J_feeds/goods3_img1.jpg\",\"../img/J_feeds/goods3_img1_1.jpg\",\"../img/J_feeds/goods3_img2.jpg\",\"../img/J_feeds/goods3_img2_1.jpg\",\"../img/J_feeds/goods3_img3.jpg\",\"../img/J_feeds/goods3_img3_1.jpg\"] }]', 200),
(1, 'Apple iPhone 12 Pro (A2408) 128GB 海蓝色 支持移动联通电信5G 双卡双待手机', 8499, '[{ \"src\": [\"../img/J_feeds/goods1_img1.jpg\",\"../img/J_feeds/goods1_img1_1.jpg\",\"../img/J_feeds/goods1_img2.jpg\",\"../img/J_feeds/goods1_img2_1.jpg\",\"../img/J_feeds/goods1_img3.jpg\",\"../img/J_feeds/goods1_img3_1.jpg\"] }]', 100),
(4, 'Apple AirPods Pro 主动降噪无线蓝牙耳机 适用iPhone/iPad/Apple Watch', 1799, '[{ \"src\": [\"../img/J_feeds/goods4_img1.jpg\",\"../img/J_feeds/goods4_img1_1.jpg\",\"../img/J_feeds/goods4_img2.jpg\",\"../img/J_feeds/goods4_img2_1.jpg\",\"../img/J_feeds/goods4_img3.jpg\",\"../img/J_feeds/goods4_img3_1.jpg\"] }]', 200),
(5, 'Apple Watch Series 6智能手表 GPS款 40毫米蓝色铝金属表壳 深海军蓝色运动型表带 MG143CH/A', 2869, '[{ \"src\": [\"../img/J_feeds/goods5_img1.jpg\",\"../img/J_feeds/goods5_img1_1.jpg\",\"../img/J_feeds/goods5_img2.jpg\",\"../img/J_feeds/goods5_img2_1.jpg\",\"../img/J_feeds/goods5_img3.jpg\",\"../img/J_feeds/goods5_img3_1.jpg\"] }]', 200);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'zhangsan', '123'),
(2, 'wangwu', '123456789'),
(3, 'maliu', 'aaa'),
(4, 'chenqi', 'aaabbb'),
(33, 'zhangsan1', '123456aA');

--
-- 转储表的索引
--

--
-- 表的索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
