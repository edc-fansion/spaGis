

// 初始化地图
var map = new BMap.Map("main")
var point = new BMap.Point(116.417854, 30.921988)
map.centerAndZoom(point, 6)        // 设置中心点位置
map.enableScrollWheelZoom(true) // 设置是否可缩放

var data_info = [[118.08,	24.48, "<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445807.html' target='_blank'>厦门大学以调查研究为抓手 破解为民服务难题</a>"],
[110.88,33.53,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445799.html' target='_blank'>陕西省商南县：以脱贫攻坚成果体现主题教育成效</a>"],
[116.98,36.67,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445770.html' target='_blank'>山东：统筹联动整改，解决实际问题</a>"],
[119.3,26.08,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445715.html' target='_blank'>于伟国主持召开福建省委“不忘初心、牢记使命”主题教育领导小组会议</a>"],
[120.75,30.75,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445596.html' target='_blank'>浙江嘉兴9张清单抓实主题教育</a>"],
[119.22,34.6,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445529.html' target='_blank'>江苏省连云港市“开门搞教育”正视差距查找不足</a>"],
[125.32,43.9,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445307.html' target='_blank'>吉林省委省政府召开县市双周四晚重点工作调度和工作交流例会 巴音朝鲁主持</a>"],
[106.63,26.65,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445256.html' target='_blank'>贵州仁怀着力推动非公企业主题教育走深走实</a>"],
[116.4,39.9,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445237.html' target='_blank'>中储粮集团公司党组班子成员深入基层指导第二批主题教育</a>"],
[131.15,46.63,"<a href='http://chuxin.people.cn/n1/2019/1108/c428144-31445235.html' target='_blank'>黑龙江省双鸭山市推行“无假日社区”错时工作</a>"],
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