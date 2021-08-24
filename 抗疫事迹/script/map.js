

// 初始化地图
var map = new BMap.Map("main")
var point = new BMap.Point(116.417854, 30.921988)
map.centerAndZoom(point, 6)        // 设置中心点位置
map.enableScrollWheelZoom(true) // 设置是否可缩放

var data_info = [[116.417854, 30.921988, "<a href='https://www.xuexi.cn/lgpage/detail/index.html?id=8646949008716367039&amp;item_id=8646949008716367039' target='_blank'>南京邮电大学：“在线”坚守 育人初心</a>"],
  [104.61,34.98,"<a href='https://mp.weixin.qq.com/s/OMsrE1Tl3CJHZRzJ_p_hCw' target='_blank'>退役军人、国旗护卫队柚子，他挺身战疫一线</a>"],
  [114.39,31.02,"<a href='https://mp.weixin.qq.com/s/P4U30OTth3cqSWh26-StFA' target='_blank'>致敬校友——武汉疫情下的装维人</a>"],
  [121.66,31.81,"<a href='https://mp.weixin.qq.com/s/E6IPBi9p-Kuz0t7UsrZXPg' target='_blank'>邮子 | 祖孙三代齐上阵！正能量柚子传递榜样的力量</a>"],
  [120.3,31.57,"<a href='https://mp.weixin.qq.com/s/_8DMILXjzQnM52UMDwA34Q' target='_blank'>点赞 | 南邮校友李懿心系祖国 筹措捐赠医疗物资</a>"],
  [117.18,34.27,"<a href='http://youth.njupt.edu.cn/2020/0323/c7535a163363/page.htm' target='_blank'>抗疫“邮”我，风雨同行——现代邮政学院2018级学生投身抗击疫情志愿服务</a>"],
  [121.14,31.55,"<a href='http://youth.njupt.edu.cn/2020/0323/c7535a163363/page.htm' target='_blank'>抗疫“邮”我，风雨同行——现代邮政学院2018级学生投身抗击疫情志愿服务</a>"],
  [118.93,32.12,"<a href='https://mp.weixin.qq.com/s/Vy1U7vhAYdr26POBn7FjwQ' target='_blank'>“艺”起抗疫！南邮为中国加油！</a>"],
  [109.5,34.52,"<a href='https://mp.weixin.qq.com/s/uqCSzUBWrjC9_cKJerCjUw' target='_blank'>3·5特辑 | 谢谢你，每一个逆风而行的防疫志愿者</a>"],
  [118.17,39.63,"<a href='https://mp.weixin.qq.com/s/uqCSzUBWrjC9_cKJerCjUw' target='_blank'>3·5特辑 | 谢谢你，每一个逆风而行的防疫志愿者</a>"],
  [119.44,32.20,"<a href='https://mp.weixin.qq.com/s/uqCSzUBWrjC9_cKJerCjUw' target='_blank'>3·5特辑 | 谢谢你，每一个逆风而行的防疫志愿者</a>"],
  [119.80,33.76,"<a href='https://mp.weixin.qq.com/s?src=11&timestamp=1600910463&ver=2603&signature=AM240NSHHh7jl6*O2sKpuKQBuDqRrbCe6LNqMP9f31GM9mBSwLt7-3vtOt7br-*8qKMt4ZIHYh4JVkDvl2zYk1AC27f1QqGeJzxQUERnGp2NHCisGNRQzMiH9N0phMm1&new=1' target='_blank'>【南邮退役大学生士兵优秀代表】景步阳：退伍不褪色，抗疫我当先</a>"],
  [120.12,30.16,"<a href='https://cn.uniview.com/About_Us/News/Media_Boardcast/202006/805949_140493_0.htm' target='_blank'>南邮浙江校友会：宇视校友捐赠热影设备支援南邮抗疫</a>"],
  [111.25,35.12,"<a href='https://so.html5.qq.com/page/real/search_news?docid=70000021_4745f16eba306414' target='_blank'>我校两名学生荣获“江苏省大学生抗疫先进个人”称号</a>"],
  [118.32,31.84,"<a href='http://lxy.njupt.edu.cn/2020/0325/c2166a163450/page.htm' target='_blank'>战“疫”青春，理柚同行</a>"],
  [113.32,30.35,"<a href='http://njupt.cuepa.cn/show_more.php?doc_id=3395735' target='_blank'>“在线”育人守初心——记身处湖北的南邮老师们</a>"],
];
var opts = {
  width: 250,     // 信息窗口宽度
  height: 80,     // 信息窗口高度
  title: "", // 信息窗口标题
}
for (var i = 0; i < data_info.length; i++) {
  var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]));  // 创建标注
  var content = data_info[i][2];
  map.addOverlay(marker);               // 将标注添加到地图中
  marker.addEventListener("click",function(e){
    openInfo(content,e)
  })
}

function openInfo(content,e){
  var point = new BMap.Point(e.point.lng, e.point.lat);
  var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
  map.openInfoWindow(infoWindow, point); //开启信息窗口
}