(function () {
    require.config({
        paths: {
            echarts: 'echarts'
        },
        packages: [
            {
                name: 'BMap',
                location: 'BMap',
                main: 'main'
            }
        ]
    });
    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('main').height(),
            width: $('main').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: 116.412979,
            y: 39.933368
        };
        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 4);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
                  {
                       "featureType": "water",
                       "elementType": "all",
                       "stylers": {
                            "color": "blue"
                       }
                  },
                  {
                       "featureType": "land",
                       "elementType": "all",
                       "stylers": {
                            "color": "green"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#064f85"
                       }
                  },
                  {
                       "featureType": "railway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#00508b"
                       }
                  },
                  {
                       "featureType": "poi",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "green",
                       "elementType": "all",
                       "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "subway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "manmade",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "local",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "on"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#029fd4"
                       }
                  },
                  {
                       "featureType": "building",
                       "elementType": "all",
                       "stylers": {
                            "color": "#1a5787"
                       }
                  },
                  {
                       "featureType": "label",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "on"
                       }
                  }
            ]
        });
        option = {
            color: ['gold','aqua','lime'],
            title : {
                text: '',
                //subtext:'。。。。。。',
                x:'center',
                textStyle : {
                    color:  '#FFFF00',
					fontFamily:'KaiTi',
					fontSize: 50,
					
					
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (v) {
                    return v[1].replace(':', ' > ');
                }
            },
            legend: {
                orient: 'horizontal',
                x:'left',
                data:['一大', '二大', '三大','四大','五大','六大','七大','八大','光辉历程'],
                selectedMode: 'single',
                selected:{
                    '二大' : false,
                    '三大' : false,
                    '四大':false,'五大':false,'六大':false,'七大':false,'八大':false,'光辉历程':false
                },
                textStyle : {
                    color: '#fff',
					fontSize: 22
                }
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    
                    dataView : {show: true, 
					readOnly: true,
					optionToContent:function aa(){
								var table = '<table  class="table table-condensed "   width=100%  ><tr  id="tr"   >'
                                 +'<td  id=“td” align=middle>' + '届数' + '</td>'
								 +'<td id=“td” align="center" >' + '时间' + '</td>'
								  +'<td id=“td” align="center">' + '地点' + '</td>'
                                 + '<td align="center" >' +'变更内容' + '</td>'
                                 + '</tr>'
								 +'<tr id="tr" class="active">'
						/*一大*/		 +'<td id=“td” align="center">' +' <a href="./content/一大内容.html" class="button button-primary button-pill button-small">1</a>' +'</td>'
						         +'<td id=“td” align="center">' + '1921/7/23' + '</td>'
								 +'<td id=“td” align="center">' + '上海' + '</td>'
                                 + '<td>' +'1921年7月在上海召开的中国共产党第一次全国代表大会，讨论和通过了《中国共产党纲领》。这是党的历史上关于党的                                 建设的第一个马克思主义的光辉文献。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr  id="tr">'
						/*二大*/		 +'<td align="center">' + ' <a href="./content/二大内容.html" class="button button-primary button-pill button-small">2</a>' + '</td>'
						         +'<td align="center">' + '1922/7/16' + '</td>'
								 +'<td align="center">' + '上海' + '</td>'
                                 + '<td>' +'1922年7月在上海召开的中国共产党第二次全国代表大会，讨论和通过了《中国共产党章程》 。这部章程是中国共产党第一部比较完整的章程，共六章，二十九条。章程第一次明确提出了彻底地反对帝国主义和反对封建主义的民主革命纲领，即党的最低纲领；第一次详尽地规定了党员条件和入党手续，对党的组织原则、组织机构、党的纪律和制度，也都作了具体的规定。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr  id="tr" class="active">'
						/*三大*/		 +'<td align="center">' + ' <a href="./content/三大内容.html" class="button button-primary button-pill button-small">3</a>' + '</td>'
						         +'<td align="center">' + '1923/6/12' + '</td>'
								 +'<td align="center">' + '广州' + '</td>'
                                 + '<td>' +'1923年6月在广州召开的中国共产党第三次全国代表大会，通过了《中国共产党第一次修正章程 》。章程共六章，三十条。它和二大通过的党章相比较，基本是二大党章原来的结构的内容，只是个别条文的改动。如在关于党员入党手续方面，第一次规定了新党员候补期（劳动者三个月，非劳动者六个月）。党章还分别规定了候补党员和正式党员的权利和义务。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*四大*/		 +'<td align="center" >' + ' <a href="./content/四大内容.html" class="button button-primary button-pill button-small">4</a>' + '</td>'
						         +'<td align="center">' + '1925/1/11' + '</td>'
								 +'<td align="center">' + '上海' + '</td>'
                                 + '<td>' +'1925年1月在上海召开的中国共产党第四次全国代表大会，通过了《中国共产党第二次修正章程 》。章程规定，“凡有党员三人以上均得成立一支部”，在党的历史上第一次将党的支部规定为党的基层单位。并规定从四大开始对中央委员会委员长的职务，改称为“总书记”；地方各级党的执行委员会的委员长职务，改称为“书记”。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr  id="tr" class="active">'
						/*五大*/		 +'<td align="center">' +' <a href="./content/五大内容.html" class="button button-primary button-pill button-small">5</a>' + '</td>'
						         +'<td align="center">' + '1927/4/21' + '</td>'
								 +'<td align="center">' + '武汉' + '</td>'
                                 + '<td>' +'五大的修正议决案共有十二章，八十五条，对四大通过的《中国共产党第二次修正章程》作了许多新的补充和修正，特别是在党的组织系统方面，作出了远较前四个党章详尽系统的规定。其中，第一次明确规定“党部的指导原则为民主集中制”。这是在我们党的根本法规上，第一次出现民主集中制的提法。同时，第一次规定入党者的年龄必须在18岁以上。第一次把党与青年团的关系列入党章，并规定“青年团中央，应派代表出席党的中央政治局会议，各级团部亦应派代表参加各级党部机关之常务委员会议，此等团部之出席代表应有表决权。”修正章程在“党的中央机关”一章中，明文规定中央委员会除选举正式中央委员一人为总书记外，还要选举“中央正式委员若干人组织中央政治局指导全国一切政治工作”，体现了加强集体领导的精神。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*六大*/		 +'<td align="center">' + ' <a href="./content/六大内容.html" class="button button-primary button-pill button-small">6</a>' + '</td>'
						         +'<td align="center">' + '1928/2/18' + '</td>'
								 +'<td align="center">' + '莫斯科' + '</td>'
                                 + '<td>' +'六大党章基本保持了五大党章的基本内容，在结构上作了一些调整。六大党章较以前几部党章，更加突出地强调了共产国际的领导。在第一章规定“中国共产党为共产国际之一部分，命名为‘中国共产党’，为共产国际支部”；在第二章规定“凡承认共产国际和本党党纲及党章，加入党的组织之一，在其中积极工作，服从共产国际和本党一切决议案且经常缴纳党费者，均得为本党党员”，这是按照列宁建党思想对党员资格作了更为完整的表述。在关于执行党的民主集中制的组织原则方面，规定党员及地方组织要无条件地执行“共产国际代表大会或本党代表大会，或党内指导机关所提出的某种决议”，并规定党的全国代表大会要“得共产国际同意后召集之”。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr  id="tr" class="active">'
						/*七大*/		 +'<td align="center">' + ' <a href="./content/七大内容.html" class="button button-primary button-pill button-small">7</a>' + '</td>'
						         +'<td align="center">' + '1945/4/23' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1945年4月至6月在延安召开的中国共产党第七次全国代表大会，通过了《中国共产党章程》，是我党独立自主制定的第一部党章。七大党章共有十一章七十条。它的主要特点是：第一，在党章发展史上第一次增加了党章的总纲部分。总纲是党的最基本的政治纲领和组织纲领，是党章的前提和总则，是每一个党员“一切活动的准则”。总纲总结了党成立二十四年来的斗争经验，以简洁的文字阐明了党的性质与理论，中国革命的性质、动力、任务和特点，党领导中国革命的基本方针和必须具备的条件。第二，确定了毛泽东思想为全党的指导思想。第三，特别强调了党的群众路线。第四，更加完善了党的民主集中制的原则，对扩大党内民主和实行集中统一领导作了详细的规定。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*八大*/		 +'<td align="center">' + ' <a href="./content/八大内容.html" class="button button-primary button-pill button-small">8</a>' + '</td>'
						         +'<td align="center">' + '1956/9/15' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1956年9月26日中共第八次全国代表大会通过的《中国共产党章程》，是中国共产党执政以后制定的第一部党章。新党章根据执政党的特点，提出了全面开展社会主义建设的任务。总纲规定：“中国共产党的任务，就是有计划地发展国民经济，尽可能迅速地实现国家工业化，有系统、有步骤地进行国民经济的技术改造，使中国具有强大的现代化的工业、现代化的农业、现代化的交通运输业和现代化的国防。”党章对贯彻党的民主集中制的根本原则作出了许多新规定。针对党处于执政党地位的情况，强调“必须不断地发扬党的工作中的群众路线的传统”。此外，八大党章对党的组织机构也作了一些新的规定。如中央委员会除选举中央政治局以外，还选举中央政治局的常务委员会；党的监察委员会增加了要积极检查党员遵守党的章程、党的纪律、共产主义道德和国家法规、法令的状况；明确共产主义青年团是党的助手，在党的领导下进行工作等。八大党章还首次把“各尽所能，按劳取酬”的分配原则写进党章。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr" class="active">'
						/*九大*/		 +'<td align="center">' + ' <a href="./content/九大内容.html" class="button button-primary button-pill button-small">9</a>' + '</td>'
						         +'<td align="center">' + '1969/4/1' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1969年4月14日中共第九次全国代表大会通过的《中国共产党章程》，体现了九大在思想上、政治上和组织上的错误方针。九大党章背离了八大党章的正确纲领，在党章中肯定了根据“无产阶级专政下的继续革命”的错误理论发动的“文化大革命”。在总纲里充满了个人崇拜的错误。特别是把林彪作为“毛泽东同志的亲密战友和接班人”列入党章，这在党章的历史上是从未有过的。九大党章否定了八大已经明确的党的工作重点的转移和党领导社会主义四个现代化的任务；在党员条件上，取消了党员权利和入党预备期，把八大党章规定的党员十条义务改变为“活学活用马克思主义、列宁主义、毛泽东思想”等五项接班人的条件。在组织原则上，取消了八大党章中关于发扬党内民主，加强党的集体领导，发挥下级组织的积极性、创造性等条文，并取消了五大以来设立的党的监察委员会。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*十大*/		 +'<td align="center">' + ' <a href="./content/十大内容.html" class="button button-primary button-pill button-small">10</a>' + '</td>'
						         +'<td align="center">' + '1973/8/24' + '</td>' 
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1973年8月28日中共第十次全国代表大会通过的《中国共产党章程》继续了九大的“左”的错误，沿袭了九大党章的总纲和条文，只作了个别的修改和补充。由于林彪反革命集团的败露，十大党章删去了九大党章中有关林彪为接班人的内容。十大党章继续肯定了“文化大革命”，并且强调“这样的革命，今后还要进行多次。”' + '</td>'
                                 + '</tr>'
							 
						         +'<tr id="tr" class="active">'
						/*十一大*/		 +'<td align="center">' + ' <a href="./content/十一大内容.html" class="button button-primary button-pill button-small">11</a>' + '</td>'
						         +'<td align="center">' + '1977/8/12' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1977年8月18日中共第十一次全国代表大会通过的《中国共产党章程》是十年内乱以后的第一部党章。它恢复了八大关于把中国建设成四个现代化的社会主义强国的提法。在内容上与九大、十大党章比较作了较多的修改。譬如：在总纲及有关条款中增写了关于民主集中制的内容；在党的中央委员会，地方县和县以上、军队团和团以上各级党的委员会，都设立纪律检查委员会；提出党要认真执行“任人唯贤”的干部政策等等。但是，由于十一大仍然肯定十大的政治路线和组织路线是正确的，十一大党章没能清除“左”倾错误的影响，继续沿用了“文化大革命”的错误理论、政策和口号。这些错误在党的十一届三中全会后才得到彻底的纠正。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*十二大*/		 +'<td align="center">' + ' <a href="./content/十二大内容.html" class="button button-primary button-pill button-small">12</a>' + '</td>'
						         +'<td align="center">' + '1982/9/1' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1982年9月6日中共第十二次全国代表大会审议通过了《中国共产党章程》。这部党章吸取了历届党章正反两方面的经验，是在七大、八大党章的基础上发展、提高而写成的，也是吸取了九大、十大党章的教训并彻底清除了十一大党章中存在的“左”的错误而写成的。十二大党章的重要特点是：第一，有一个比八大党章更为充实完整的总纲，总纲对党的性质和党的指导思想，对科学社会主义的理论和实践，对社会主义制度的优越性，对中国现阶段社会主义的主要矛盾和党的总任务，对加强党的建设基本要求，对党在国家生活中如何正确发挥作用，都作了马克思主义的规定。对毛泽东思想，新党章在十一届二中全会通过的《关于建国以来党的若干历史问题的决议》的基础上，作了比七大更科学的表述。第二，新党章对全体党员、党的干部提出比过去历次党章更加严格的要求。党章规定，共产党员必须是“中国工人阶级的有共产主义觉悟的先锋战士”，要求党员“永远是劳动人民的普通一员”，党的干部“是人民的公仆”等。第三，对党的民主集中制作了比较充分、比较具体的规定。而且吸取了历史教训，明确规定“党禁止任何形式的个人崇拜”，“凡属重大问题都要由党的委员会民主讨论，作出决定”。“不允许任何领导人实行个人专断和把个人凌驾于组织之上”。第四，新党章对党的中央和地方组织体制作了重要的改变和新的规定，规定党的全国代表大会在选举中央委员会时，还要选举中央顾问委员会和中央纪律检查委员会。还规定党中央只设总书记，不再设主席和副主席，“总书记必须从中央政治局常务委员会委员中产生。”第五，对加强和改善执政党的领导也作了一系列具体的规定。另外，十二大新党章首次将入党誓词载入党章。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr" class="active">'
						/*十三大*/		 +'<td align="center">' + ' <a href="./content/十三大内容.html" class="button button-primary button-pill button-small">13</a>' + '</td>'
						         +'<td align="center">' + '1987/10/25' + '</td>'
								 +'<td align="center">' + '北京' + '</td>'
                                 + '<td>' +'1987年11月1日中共第十三次全国代表大会通过的《中国共产党章程部分条文修正案》，对十二大通过的党章部分条文的内容作了修正。修改部分涉及到十二大党章的十个条款，即第十一、十六、十九、二十一、二十二、三十、三十三、四十三、四十六、四十八条。' + '</td>'
                                 + '</tr>'
								 
								  +'<tr id="tr">'
						/*十四大*/		 +'<td id="td" align="center">' + ' <a href="./content/十四大内容.html" class="button button-primary button-pill button-small">14</a>' + '</td>'
						         +'<td id="td" align="center">' + '1992/10/12' + '</td>'
								 +'<td id="td" align="center">' + '北京' + '</td>'
                                 + '<td id="td">' +'1992年10月18日中共第十四次全国代表大会通过的《中国共产党章程》，共有十章，五十条，是对党的十二大通过的党章的进一步修正，突出了建设有中国特色社会主义的理论和党的基本路线，并将其贯穿党章全文。新党章在总纲部分，增加了关于党的十一届三中全会以来历史进程的表述，阐明十一届三中全会以来的历史是我们党开创建设有中国特色社会主义道路并不断前进的历史。把这一段历史写入党章，反映了建设有中国特色社会主义的理论的形成和发展过程。新党章把邓小平同志建设有中国特色社会主义的理论和在这个理论指导下制定的党的“一个中心、两个基本点”的基本路线及一系列方针载入党章，并对党的工作和党的建设提出了切合实际的新要求。根据中央顾问委员会向党的十四大提出的建议，从十四大起，不再设立党的中央顾问委员会和省、自治区、直辖市顾问委员会。鉴此，党章删去有关顾问委员会的条文。' + '</td>'
                                 + '</tr>'
								 
								   +'<tr id="tr" class="active">'
						/*十五大*/		 +'<td id="td" align="center" >' + ' <a href="./content/十五大内容.html" class="button button-primary button-pill button-small">15</a>' + '</td>'
						         +'<td id="td" align="center">' + '1997/9/12' + '</td>'
								 +'<td id="td" align="center">' + '北京' + '</td>'
                                 + '<td id="td">' +'1997年9月18日中共第十五次全国代表大会通过了《中国共产党章程修正案》。这次修改党章集中在一个重大问题上，即在党章中明确规定，把邓小平理论确立为党的指导思想。党章总纲规定：“中国共产党以马克思列宁主义、毛泽东思想、邓小平理论作为自己的行动指南。”党章总纲在原来关于马克思列宁主义的论述和关于毛泽东思想的论述之后，对原来有关建设有中国特色社会主义理论的内容加以调整补充，形成了关于邓小平理论的论述：“十一届三中全会以来，以邓小平同志为主要代表的中国共产党人，总结建国以来正反两方面的经验，解放思想，实事求是，实现全党工作中心向经济建设的转移，实行改革开放，开辟了社会主义事业发展的新时期，逐步形成了建设有中国特色社会主义的路线、方针、政策，阐明了在中国建设社会主义、巩固和发展社会主义的基本问题，创立了邓小平理论。邓小平理论是马克思列宁主义的基本原理同当代中国实践和时代特征相结合的产物，是毛泽东思想在新的历史条件下的继承和发展，是马克思主义在中国发展的新阶段，是当代中国的马克思主义，是中国共产党集体智慧的结晶，引导着我国社会主义现代化事业不断前进。”修正后的党章对第三条第一款、第三十一条第二款、第三十四条第一款的文字作了相应的调整，规定党员和党的干部要认真学习马克思列宁主义、毛泽东思想、邓小平理论。' + '</td>'
                                 + '</tr>'
								 
								   +'<tr id="tr">'
						/*十六大*/		 +'<td id="td" align="center">' + ' <a href="./content/十六大内容.html" class="button button-primary button-pill button-small">16</a>' + '</td>'
						         +'<td id="td" align="center">' + '2002/11/8' + '</td>'
								 +'<td id="td" align="center">' + '北京' + '</td>'
                                 + '<td id="td">' +'2002年11月14日，中国共产党第十六次全国代表大会通过了关于《中国共产党章程（修正案）》的决议，把“三个代表”重要思想同马克思列宁主义、毛泽东思想、邓小平理论一道确立为党必须长期坚持的指导思想。这次党章修改工作，突出了“三个代表”重要思想对新形势下党的工作和党的建设的指导作用，坚持了与时俱进和改革创新的精神，在保持党章整体框架不变的前提下，对一些内容作了适当修改或补充完善。十六大对党章作了几项重要修改 ，第一、党章总纲部分，增加了关于党的十三届四中全会以来历史进程的表述，阐述了“三个代表”重要思想的历史地位和重要作用。第二、对党的性质作了进一步阐述。第三、结合中国实际对马克思列宁主义关于人类社会发展规律的表述作了新的概括。第四、总纲中对我国新世纪新阶段经济和社会发展的战略目标和指导原则增加了新内容。第五、对党的建设和党的领导提出了新要求。第六、对党员队伍和干部队伍建设提出了新要求。第七、对党的基层组织的有关规定作了补充和修改。第八、对党的纪律检查机关的职责和任务作了补充规定。第九、对中国共产主义青年团的性质作了进一步的表述。第十、增写了党徽党旗一章，作为第十一章。' + '</td>'
                                 + '</tr>'
								 
								   +'<tr id="tr" class="active">'
						/*十七大*/		 +'<td id="td" align="center"  >' +' <a href="./content/十七大内容.html" class="button button-primary button-pill button-small">17</a>' + '</td>'
						         +'<td id="td" align="center">' + '2007/11/5' + '</td>'
								 +'<td id="td" align="center">' + '北京' + '</td>'
                                 + '<td id="td">' +'2007年10月21日，中国共产党第十七次全国代表大会通过了《中国共产党章程（修正案）》，科学发展观、中国特色社会主义道路和中国特色社会主义理论体系等马克思主义中国化的最新成果，新增入党章。' + '</td>'
                                 + '</tr>'
								 
								   +'<tr id="tr">'
						/*十八大*/		 +'<td id="td" align="center">' + ' <a href="./content/十八大内容.html" class="button button-primary button-pill button-small">18</a>' + '</td>'
						         +'<td id="td" align="center">' + '2012/11/8' + '</td>'
								 +'<td id="td" align="center">' + '北京' + '</td>'
                                 + '<td id="td">' +'2012年11月14日，中国共产党第十八次全国代表大会通过了关于《中国共产党章程（修正案）》的决议。大会一致同意把党的十七大以来建设实践发展的新成果、新认识、新要求充实到党章关于党的建设总体要求中：在党章中把科学发展观同马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想一道确立为党的行动指南；把中国特色社会主义制度同中国特色社会主义道路、中国特色社会主义理论体系一道写入党章；将生态文明建设写入党章并作出阐述；坚持改革开放，是我们的强国之路。只有改革开放，才能发展中国、发展社会主义、发展马克思主义。' + '</td>'
                                 + '</tr>'
								 
								 
							
								 
								 '+</table>'

								return table;
						}
					},
                   
                }
            },
            dataRange: {
                min : 1920,
                max : 2012,
                range: {
                    start: 0,
                    end: 100
                },
                x: 'right',
                calculable : true,
                color: ['#ff0000', '#f70909', '#ee1111','#e61a1a','#cc3333'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name:'一大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    geoCoord: {
                        '上海': [121.4648,31.2891],
                        '东莞': [113.8953,22.901],
                        '东营': [118.7073,37.5513],
                        '中山': [113.4229,22.478],
                        '临汾': [111.4783,36.1615],
                        '临沂': [118.3118,35.2936],
                        '丹东': [124.541,40.4242],
                        '丽水': [119.5642,28.1854],
                        '乌鲁木齐': [87.9236,43.5883],
                        '佛山': [112.8955,23.1097],
                        '保定': [115.0488,39.0948],
                        '兰州': [103.5901,36.3043],
                        '包头': [110.3467,41.4899],
                        '北京': [116.4551,40.2539],
                        '北海': [109.314,21.6211],
                        '南京': [118.8062,31.9208],
                        '南宁': [108.479,23.1152],
                        '南昌': [116.0046,28.6633],
                        '南通': [121.1023,32.1625],
                        '厦门': [118.1689,24.6478],
                        '台州': [121.1353,28.6688],
                        '合肥': [117.29,32.0581],
                        '呼和浩特': [111.4124,40.4901],
                        '咸阳': [108.4131,34.8706],
                        '哈尔滨': [127.9688,45.368],
                        '唐山': [118.4766,39.6826],
                        '嘉兴': [120.9155,30.6354],
                        '大同': [113.7854,39.8035],
                        '大连': [122.2229,39.4409],
                        '天津': [117.4219,39.4189],
                        '太原': [112.3352,37.9413],
                        '威海': [121.9482,37.1393],
                        '宁波': [121.5967,29.6466],
                        '宝鸡': [107.1826,34.3433],
                        '宿迁': [118.5535,33.7775],
                        '常州': [119.4543,31.5582],
                        '广州': [113.5107,23.2196],
                        '廊坊': [116.521,39.0509],
                        '延安': [109.1052,36.4252],
                        '张家口': [115.1477,40.8527],
                        '徐州': [117.5208,34.3268],
                        '德州': [116.6858,37.2107],
                        '惠州': [114.6204,23.1647],
                        '成都': [103.9526,30.7617],
                        '扬州': [119.4653,32.8162],
                        '承德': [117.5757,41.4075],
                        '拉萨': [91.1865,30.1465],
                        '无锡': [120.3442,31.5527],
                        '日照': [119.2786,35.5023],
                        '昆明': [102.9199,25.4663],
                        '杭州': [119.5313,29.8773],
                        '枣庄': [117.323,34.8926],
                        '柳州': [109.3799,24.9774],
                        '株洲': [113.5327,27.0319],
                        '武汉': [114.3896,30.6628],
                        '汕头': [117.1692,23.3405],
                        '江门': [112.6318,22.1484],
                        '沈阳': [123.1238,42.1216],
                        '沧州': [116.8286,38.2104],
                        '河源': [114.917,23.9722],
                        '泉州': [118.3228,25.1147],
                        '泰安': [117.0264,36.0516],
                        '泰州': [120.0586,32.5525],
                        '济南': [117.1582,36.8701],
                        '济宁': [116.8286,35.3375],
                        '海口': [110.3893,19.8516],
                        '淄博': [118.0371,36.6064],
                        '淮安': [118.927,33.4039],
                        '深圳': [114.5435,22.5439],
                        '清远': [112.9175,24.3292],
                        '温州': [120.498,27.8119],
                        '渭南': [109.7864,35.0299],
                        '湖州': [119.8608,30.7782],
                        '湘潭': [112.5439,27.7075],
                        '滨州': [117.8174,37.4963],
                        '潍坊': [119.0918,36.524],
                        '烟台': [120.7397,37.5128],
                        '玉溪': [101.9312,23.8898],
                        '珠海': [113.7305,22.1155],
                        '盐城': [120.2234,33.5577],
                        '盘锦': [121.9482,41.0449],
                        '石家庄': [114.4995,38.1006],
                        '福州': [119.4543,25.9222],
                        '秦皇岛': [119.2126,40.0232],
                        '绍兴': [120.564,29.7565],
                        '聊城': [115.9167,36.4032],
                        '肇庆': [112.1265,23.5822],
                        '舟山': [122.2559,30.2234],
                        '苏州': [120.6519,31.3989],
                        '莱芜': [117.6526,36.2714],
                        '菏泽': [115.6201,35.2057],
                        '营口': [122.4316,40.4297],
                        '葫芦岛': [120.1575,40.578],
                        '衡水': [115.8838,37.7161],
                        '衢州': [118.6853,28.8666],
                        '西宁': [101.4038,36.8207],
                        '西安': [109.1162,34.2004],
                        '贵阳': [106.6992,26.7682],
                        '连云港': [119.1248,34.552],
                        '邢台': [114.8071,37.2821],
                        '邯郸': [114.4775,36.535],
                        '郑州': [113.4668,34.6234],
                        '鄂尔多斯': [108.9734,39.2487],
                        '重庆': [107.7539,30.1904],
                        '金华': [120.0037,29.1028],
                        '铜川': [109.0393,35.1947],
                        '银川': [106.3586,38.1775],
                        '镇江': [119.4763,31.9702],
                        '长春': [125.8154,44.2584],
                        '长沙': [113.0823,28.2568],
                        '长治': [112.8625,36.4746],
                        '阳泉': [113.4778,38.0951],
                        '青岛': [120.4651,36.3373],
                        '韶关': [113.7964,24.7028],
                        '莫斯科':[37.847898,55.883561]
                    },
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                           /* [{name:'北京'}, {name:'上海',value:95}],
                            [{name:'北京'}, {name:'广州',value:90}],
                            [{name:'北京'}, {name:'大连',value:80}],
                            [{name:'北京'}, {name:'南宁',value:70}],
                            [{name:'北京'}, {name:'南昌',value:60}],
                            [{name:'北京'}, {name:'拉萨',value:50}],
                            [{name:'北京'}, {name:'长春',value:40}],
                            [{name:'北京'}, {name:'包头',value:30}],
                            [{name:'北京'}, {name:'重庆',value:20}],*/
                           // [{name:'北京'}, {name:'东莞',value:10}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'上海',value:1921},
                          // {name:'广州',value:90},
                           //  {name:'大连',value:80},
                            /* {name:'南宁',value:70},
                            {name:'南昌',value:60},
                            {name:'拉萨',value:50},
                            {name:'长春',value:40},
                            {name:'包头',value:30},
                            {name:'重庆',value:20},
                            {name:'常州',value:10}*/
                        ]
                    }

                },
                {
                    name:'二大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                         /*   [{name:'上海'},{name:'包头',value:95}],
                            [{name:'上海'},{name:'昆明',value:90}],
                            [{name:'上海'},{name:'广州',value:80}],
                            [{name:'上海'},{name:'郑州',value:70}],
                            [{name:'上海'},{name:'长春',value:60}],
                            [{name:'上海'},{name:'重庆',value:50}],
                            [{name:'上海'},{name:'长沙',value:40}],
                            [{name:'上海'},{name:'北京',value:30}],
                            [{name:'上海'},{name:'丹东',value:20}],
                            [{name:'上海'},{name:'大连',value:10}]*/
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'上海',value:1922},
                          /*  {name:'昆明',value:90},
                            {name:'广州',value:80},
                            {name:'郑州',value:70},
                            {name:'长春',value:60},
                            {name:'重庆',value:50},
                            {name:'长沙',value:40},
                            {name:'北京',value:30},
                            {name:'丹东',value:20},
                            {name:'大连',value:10}*/
                        ]
                    }
                },
                {
                    name:'三大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'上海'},{name:'广州',value:1923}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'上海',value:1922},
                            {name:'广州',value:1923}
                        ]
                    }
                },
                {
                    name:'四大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'广州'},{name:'上海',value:1925}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'上海',value:1925},
                            {name:'广州',value:1923}
                        ]
                    }
                },
                {
                    name:'五大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'上海'},{name:'武汉',value:1927}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'上海',value:1925},
                            {name:'武汉',value:1927}
                        ]
                    }
                },
                {
                    name:'六大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'武汉'},{name:'莫斯科',value:1928}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'武汉',value:1927},
                            {name:'莫斯科',value:1928}
                        ]
                    }
                },
                {
                    name:'七大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'莫斯科'},{name:'延安',value:1945}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'延安',value:1945},
                            {name:'莫斯科',value:1928}
                        ]
                    }
                },
                  {
                    name:'八大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                            [{name:'延安'},{name:'北京',value:1956}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            
                            {name:'延安',value:1945},
                            {name:'北京',value:1956}
                        ]
                    }
                },
                {
                    name:'光辉历程',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:3,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                          
                             
							 [{name:'上海'},{name:'广州',value:1923}],
							 [{name:'上海'},{name:'武汉',value:1925}],
                             [{name:'广州'},{name:'上海',value:1927}],
                             [{name:'武汉'},{name:'莫斯科',value:1928}],
                             [{name:'莫斯科'},{name:'延安',value:1945}],
							 [{name:'延安'},{name:'北京',value:1956}],
                            
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 15
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'上海',value:1956},
                            {name:'广州',value:1956},
                            {name:'武汉',value:1956},
                            {name:'莫斯科',value:1956},
                            {name:'延安',value:1956},
                            {name:'北京',value:1956}
                        ]
                    }
                },
                {
                    name:'十大',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],
                        symbolSize : 1,
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:1,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },
                        data : [
                           /* [{name:'北京'},{name:'包头'}],
                            [{name:'北京'},{name:'北海'}],
                            [{name:'北京'},{name:'广州'}],
                            [{name:'北京'},{name:'郑州'}],
                            [{name:'北京'},{name:'长春'}],
                            [{name:'北京'},{name:'长治'}],
                            [{name:'北京'},{name:'重庆'}],
                            [{name:'北京'},{name:'长沙'}],
                            [{name:'北京'},{name:'成都'}],
                            [{name:'北京'},{name:'常州'}],
                            [{name:'北京'},{name:'丹东'}],
                            [{name:'北京'},{name:'大连'}],
                            [{name:'北京'},{name:'东营'}],
                            [{name:'北京'},{name:'延安'}],
                            [{name:'北京'},{name:'福州'}],
                            [{name:'北京'},{name:'海口'}],
                            [{name:'北京'},{name:'呼和浩特'}],
                            [{name:'北京'},{name:'合肥'}],
                            [{name:'北京'},{name:'杭州'}],
                            [{name:'北京'},{name:'哈尔滨'}],
                            [{name:'北京'},{name:'舟山'}],
                            [{name:'北京'},{name:'银川'}],
                            [{name:'北京'},{name:'衢州'}],
                            [{name:'北京'},{name:'南昌'}],
                            [{name:'北京'},{name:'昆明'}],
                            [{name:'北京'},{name:'贵阳'}],
                            [{name:'北京'},{name:'兰州'}],
                            [{name:'北京'},{name:'拉萨'}],
                            [{name:'北京'},{name:'连云港'}],
                            [{name:'北京'},{name:'临沂'}],
                            [{name:'北京'},{name:'柳州'}],
                            [{name:'北京'},{name:'宁波'}],
                            [{name:'北京'},{name:'南京'}],
                            [{name:'北京'},{name:'南宁'}],
                            [{name:'北京'},{name:'南通'}],
                            [{name:'北京'},{name:'上海'}],
                            [{name:'北京'},{name:'沈阳'}],
                            [{name:'北京'},{name:'西安'}],
                            [{name:'北京'},{name:'汕头'}],
                            [{name:'北京'},{name:'深圳'}],
                            [{name:'北京'},{name:'青岛'}],
                            [{name:'北京'},{name:'济南'}],
                            [{name:'北京'},{name:'太原'}],
                            [{name:'北京'},{name:'乌鲁木齐'}],
                            [{name:'北京'},{name:'潍坊'}],
                            [{name:'北京'},{name:'威海'}],
                            [{name:'北京'},{name:'温州'}],
                            [{name:'北京'},{name:'武汉'}],
                            [{name:'北京'},{name:'无锡'}],
                            [{name:'北京'},{name:'厦门'}],
                            [{name:'北京'},{name:'西宁'}],
                            [{name:'北京'},{name:'徐州'}],
                            [{name:'北京'},{name:'烟台'}],
                            [{name:'北京'},{name:'盐城'}],
                            [{name:'北京'},{name:'珠海'}],
                            [{name:'上海'},{name:'包头'}],
                            [{name:'上海'},{name:'北海'}],
                            [{name:'上海'},{name:'广州'}],
                            [{name:'上海'},{name:'郑州'}],
                            [{name:'上海'},{name:'长春'}],
                            [{name:'上海'},{name:'重庆'}],
                            [{name:'上海'},{name:'长沙'}],
                            [{name:'上海'},{name:'成都'}],
                            [{name:'上海'},{name:'丹东'}],
                            [{name:'上海'},{name:'大连'}],
                            [{name:'上海'},{name:'福州'}],
                            [{name:'上海'},{name:'海口'}],
                            [{name:'上海'},{name:'呼和浩特'}],
                            [{name:'上海'},{name:'合肥'}],
                            [{name:'上海'},{name:'哈尔滨'}],
                            [{name:'上海'},{name:'舟山'}],
                            [{name:'上海'},{name:'银川'}],
                            [{name:'上海'},{name:'南昌'}],
                            [{name:'上海'},{name:'昆明'}],
                            [{name:'上海'},{name:'贵阳'}],
                            [{name:'上海'},{name:'兰州'}],
                            [{name:'上海'},{name:'拉萨'}],
                            [{name:'上海'},{name:'连云港'}],
                            [{name:'上海'},{name:'临沂'}],
                            [{name:'上海'},{name:'柳州'}],
                            [{name:'上海'},{name:'宁波'}],
                            [{name:'上海'},{name:'南宁'}],
                            [{name:'上海'},{name:'北京'}],
                            [{name:'上海'},{name:'沈阳'}],
                            [{name:'上海'},{name:'秦皇岛'}],
                            [{name:'上海'},{name:'西安'}],
                            [{name:'上海'},{name:'石家庄'}],
                            [{name:'上海'},{name:'汕头'}],
                            [{name:'上海'},{name:'深圳'}],
                            [{name:'上海'},{name:'青岛'}],
                            [{name:'上海'},{name:'济南'}],
                            [{name:'上海'},{name:'天津'}],
                            [{name:'上海'},{name:'太原'}],
                            [{name:'上海'},{name:'乌鲁木齐'}],
                            [{name:'上海'},{name:'潍坊'}],
                            [{name:'上海'},{name:'威海'}],
                            [{name:'上海'},{name:'温州'}],
                            [{name:'上海'},{name:'武汉'}],
                            [{name:'上海'},{name:'厦门'}],
                            [{name:'上海'},{name:'西宁'}],
                            [{name:'上海'},{name:'徐州'}],
                            [{name:'上海'},{name:'烟台'}],
                            [{name:'上海'},{name:'珠海'}],
                            [{name:'广州'},{name:'北海'}],
                            [{name:'广州'},{name:'郑州'}],
                            [{name:'广州'},{name:'长春'}],
                            [{name:'广州'},{name:'重庆'}],
                            [{name:'广州'},{name:'长沙'}],
                            [{name:'广州'},{name:'成都'}],
                            [{name:'广州'},{name:'常州'}],
                            [{name:'广州'},{name:'大连'}],
                            [{name:'广州'},{name:'福州'}],
                            [{name:'广州'},{name:'海口'}],
                            [{name:'广州'},{name:'呼和浩特'}],
                            [{name:'广州'},{name:'合肥'}],
                            [{name:'广州'},{name:'杭州'}],
                            [{name:'广州'},{name:'哈尔滨'}],
                            [{name:'广州'},{name:'舟山'}],
                            [{name:'广州'},{name:'银川'}],
                            [{name:'广州'},{name:'南昌'}],
                            [{name:'广州'},{name:'昆明'}],
                            [{name:'广州'},{name:'贵阳'}],
                            [{name:'广州'},{name:'兰州'}],
                            [{name:'广州'},{name:'拉萨'}],
                            [{name:'广州'},{name:'连云港'}],
                            [{name:'广州'},{name:'临沂'}],
                            [{name:'广州'},{name:'柳州'}],
                            [{name:'广州'},{name:'宁波'}],
                            [{name:'广州'},{name:'南京'}],
                            [{name:'广州'},{name:'南宁'}],
                            [{name:'广州'},{name:'南通'}],
                            [{name:'广州'},{name:'北京'}],
                            [{name:'广州'},{name:'上海'}],
                            [{name:'广州'},{name:'沈阳'}],
                            [{name:'广州'},{name:'西安'}],
                            [{name:'广州'},{name:'石家庄'}],
                            [{name:'广州'},{name:'汕头'}],
                            [{name:'广州'},{name:'青岛'}],
                            [{name:'广州'},{name:'济南'}],
                            [{name:'广州'},{name:'天津'}],
                            [{name:'广州'},{name:'太原'}],
                            [{name:'广州'},{name:'乌鲁木齐'}],
                            [{name:'广州'},{name:'温州'}],
                            [{name:'广州'},{name:'武汉'}],
                            [{name:'广州'},{name:'无锡'}],
                            [{name:'广州'},{name:'厦门'}],
                            [{name:'广州'},{name:'西宁'}],
                            [{name:'广州'},{name:'徐州'}],
                            [{name:'广州'},{name:'烟台'}],
                            [{name:'广州'},{name:'盐城'}]*/
                        ]
                    }
                }
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);
    }
);
})();

