<template>
  <div class="r-colors">
    <div
      class="r-colors-type"
      v-for="(colorTypes, typeIndex) in rColorList"
      :key="typeIndex"
    >
      <div class="type-title">{{ colorTypes.name }}</div>
      <div class="type-colors">
        <div
          class="type-colors-item"
          v-for="(colorInfo, index) in colorTypes.colors"
          :key="index"
          :style="{ background: colorInfo.color }"
        >
          <div class="item-txt">{{ colorInfo.color }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface colorInfo {
  type: string;
  name: string;
  color: string;
  description: string;
}
interface rColors {
  name: string;
  colors: colorInfo[];
}

const colors: colorInfo[] = [
  {
    type: '红色系',
    name: '浅红色',
    color: '#ffb3a7',
    description: '粉红，即浅红色。别称：妃色 杨妃色 湘妃色 妃红色'
  },
  {
    type: '红色系',
    name: '粉红色',
    color: '#ed5736',
    description: '妃色 妃红色：古同"绯"，粉红色。杨妃色 湘妃色 粉红皆同义。'
  },
  {
    type: '红色系',
    name: '品红',
    color: '#f00056',
    description: '品红：比大红浅的红色'
  },
  {
    type: '红色系',
    name: '桃红',
    color: '#f47983',
    description: '桃红，桃花的颜色，比粉红略鲜润的颜色。'
  },
  {
    type: '红色系',
    name: '海棠红',
    color: '#db5a6b',
    description: '海棠红，淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。'
  },
  {
    type: '红色系',
    name: '石榴红',
    color: '#f20c00',
    description: '石榴红：石榴花的颜色，高色度和纯度的红色。'
  },
  {
    type: '红色系',
    name: '樱桃色',
    color: '#c93756',
    description: '樱桃色：鲜红色'
  },
  {
    type: '红色系',
    name: '银红',
    color: '#f05654',
    description:
      '银红：银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。'
  },
  {
    type: '红色系',
    name: '大红',
    color: '#ff2121',
    description: '大红：正红色，三原色中的红，传统的中国红，又称绛色'
  },
  {
    type: '红色系',
    name: '绛紫',
    color: '#8c4356',
    description: '绛紫：紫中略带红的颜色'
  },
  {
    type: '红色系',
    name: '绯红',
    color: '#c83c23',
    description: '绯红：艳丽的深红'
  },
  {
    type: '红色系',
    name: '胭脂',
    color: '#9d2933',
    description: '胭脂：1，女子装扮时用的胭脂的颜色。2，国画暗红色颜料'
  },
  {
    type: '红色系',
    name: '朱红',
    color: '#ff4c00',
    description: '朱红：朱砂的颜色，比大红活泼，也称铅朱 朱色 丹色'
  },
  {
    type: '红色系',
    name: '丹',
    color: '#ff4e20',
    description: '丹：丹砂的鲜艳红色'
  },
  {
    type: '红色系',
    name: '彤',
    color: '#f35336',
    description: '彤：赤色'
  },
  {
    type: '红色系',
    name: '茜色',
    color: '#cb3a56',
    description: '茜色：茜草染的色彩，呈深红色'
  },
  {
    type: '红色系',
    name: '火红',
    color: '#ff2d51',
    description: '火红：火焰的红色，赤色'
  },
  {
    type: '红色系',
    name: '赫赤',
    color: '#c91f37',
    description: '赫赤：深红，火红。泛指赤色、火红色。'
  },
  {
    type: '红色系',
    name: '嫣红',
    color: '#ef7a82',
    description: '嫣红：鲜艳的红色'
  },
  {
    type: '红色系',
    name: '洋红',
    color: '#ff0097',
    description: '洋红：色橘红'
  },
  {
    type: '红色系',
    name: '炎',
    color: '#ff3300',
    description: '炎：引申为红色。'
  },
  {
    type: '红色系',
    name: '赤',
    color: '#c3272b',
    description: '赤：本义火的颜色，即红色'
  },
  {
    type: '红色系',
    name: '绾',
    color: '#a98175',
    description: '绾：绛色；浅绛色。'
  },
  {
    type: '红色系',
    name: '枣红',
    color: '#c32136',
    description: '枣红：即深红'
  },
  {
    type: '红色系',
    name: '檀',
    color: '#b36d61',
    description: '檀：浅红色，浅绛色。'
  },
  {
    type: '红色系',
    name: '殷红',
    color: '#be002f',
    description: '殷红：发黑的红色。'
  },
  {
    type: '红色系',
    name: '酡红',
    color: '#dc3023',
    description: '酡红：像饮酒后脸上泛现的红色，泛指脸红'
  },
  {
    type: '红色系',
    name: '酡颜',
    color: '#f9906f',
    description: '酡颜：饮酒脸红的样子。亦泛指脸红色'
  },
  {
    type: '黄色系',
    name: '鹅黄',
    color: '#fff143',
    description: '鹅黄：淡黄色'
  },
  {
    type: '黄色系',
    name: '鸭黄',
    color: '#faff72',
    description: '鸭黄：小鸭毛的黄色'
  },
  {
    type: '黄色系',
    name: '樱草色',
    color: '#eaff56',
    description: '樱草色：淡黄色'
  },
  {
    type: '黄色系',
    name: '杏黄',
    color: '#ffa631',
    description: '杏黄：成熟杏子的黄色'
  },
  {
    type: '黄色系',
    name: '杏红',
    color: '#ff8c31',
    description: '杏红：成熟杏子偏红色的一种颜色'
  },
  {
    type: '黄色系',
    name: '橘黄',
    color: '#ff8936',
    description: '橘黄：柑橘的黄色。'
  },
  {
    type: '黄色系',
    name: '橙黄',
    color: '#ffa400',
    description: '橙黄：同上。'
  },
  {
    type: '黄色系',
    name: '橘红',
    color: '#ff7500',
    description: '橘红：柑橘皮所呈现的红色。'
  },
  {
    type: '黄色系',
    name: '姜黄',
    color: '#ffc773',
    description:
      '姜黄：中药名。别名黄姜。为姜科植物姜黄的根茎。又指人脸色不正,呈黄白色 '
  },
  {
    type: '黄色系',
    name: '缃色',
    color: '#f0c239',
    description: '缃色：浅黄色。'
  },
  {
    type: '黄色系',
    name: '橙色',
    color: '#fa8c35',
    description: '橙色：界于红色和黄色之间的混合色。'
  },
  {
    type: '黄色系',
    name: '茶色',
    color: '#b35c44',
    description: '茶色：一种比栗色稍红的棕橙色至浅棕色'
  },
  {
    type: '黄色系',
    name: '驼色',
    color: '#a88462',
    description:
      '驼色：一种比咔叽色稍红而微淡、比肉桂色黄而稍淡和比核桃棕色黄而暗的浅黄棕色 '
  },
  {
    type: '黄色系',
    name: '昏黄',
    color: '#c89b40',
    description: '昏黄：形容天色、灯光等呈幽暗的黄色'
  },
  {
    type: '黄色系',
    name: '栗色',
    color: '#60281e',
    description: '栗色：栗壳的颜色。即紫黑色'
  },
  {
    type: '黄色系',
    name: '棕色',
    color: '#b25d25',
    description:
      '棕色：棕毛的颜色,即褐色。1，在红色和黄色之间的任何一种颜色2，适中的暗淡和适度的浅黑。'
  },
  {
    type: '黄色系',
    name: '棕绿',
    color: '#827100',
    description: '棕绿：绿中泛棕色的一种颜色。'
  },
  {
    type: '黄色系',
    name: '棕黑',
    color: '#7c4b00',
    description: '棕黑：深棕色。'
  },
  {
    type: '黄色系',
    name: '棕红',
    color: '#9b4400',
    description: '棕红：红褐色。'
  },
  {
    type: '黄色系',
    name: '棕黄',
    color: '#ae7000',
    description: '棕黄：浅褐色。'
  },
  {
    type: '黄色系',
    name: '赭',
    color: '#9c5333',
    description: '赭：赤红如赭土的颜料,古人用以饰面 '
  },
  {
    type: '黄色系',
    name: '赭色',
    color: '#955539',
    description: '赭色：红色、赤红色。'
  },
  {
    type: '黄色系',
    name: '琥珀',
    color: '#ca6924',
    description: '琥珀：'
  },
  {
    type: '黄色系',
    name: '褐色',
    color: '#6e511e',
    description: '褐色： 黄黑色 '
  },
  {
    type: '黄色系',
    name: '枯黄',
    color: '#d3b17d',
    description: '枯黄：干枯焦黄'
  },
  {
    type: '黄色系',
    name: '黄栌',
    color: '#e29c45',
    description:
      '黄栌：一种落叶灌木，花黄绿色,叶子秋天变成红色。木材黄色可做染料。'
  },
  {
    type: '黄色系',
    name: '秋色',
    color: '#896c39',
    description:
      '秋色：1，中常橄榄棕色,它比一般橄榄棕色稍暗,且稍稍绿些。2，古以秋为金,其色白,故代指白色。'
  },
  {
    type: '黄色系',
    name: '秋香色',
    color: '#d9b611',
    description: '秋香色：浅橄榄色 浅黄绿色。'
  },
  {
    type: '绿色系',
    name: '嫩绿',
    color: '#bddd22',
    description: '嫩绿：像刚长出的嫩叶的浅绿色'
  },
  {
    type: '绿色系',
    name: '柳黄',
    color: '#c9dd22',
    description: '柳黄：像柳树芽那样的浅黄色'
  },
  {
    type: '绿色系',
    name: '柳绿',
    color: '#afdd22',
    description: '柳绿：柳叶的青绿色'
  },
  {
    type: '绿色系',
    name: '竹青',
    color: '#789262',
    description: '竹青：竹子的绿色'
  },
  {
    type: '绿色系',
    name: '葱黄',
    color: '#a3d900',
    description: '葱黄：黄绿色，嫩黄色'
  },
  {
    type: '绿色系',
    name: '葱绿',
    color: '#9ed900',
    description: '葱绿：1，浅绿又略显微黄的颜色2，草木青翠的样子'
  },
  {
    type: '绿色系',
    name: '葱青',
    color: '#0eb83a',
    description: '葱青：淡淡的青绿色'
  },
  {
    type: '绿色系',
    name: '葱倩',
    color: '#0eb83a',
    description: '葱倩：青绿色'
  },
  {
    type: '绿色系',
    name: '青葱',
    color: '#0aa344',
    description: '青葱：翠绿色,形容植物浓绿 '
  },
  {
    type: '绿色系',
    name: '油绿',
    color: '#00bc12',
    description: '油绿：光润而浓绿的颜色。以上几种绿色都是明亮可爱的色彩。'
  },
  {
    type: '绿色系',
    name: '深绿',
    color: '#0c8918',
    description: '绿沈（沉）：深绿'
  },
  {
    type: '绿色系',
    name: '碧色',
    color: '#1bd1a5',
    description: '碧色：1，青绿色。2，青白色,浅蓝色。'
  },
  {
    type: '绿色系',
    name: '碧绿',
    color: '#2add9c',
    description: '碧绿：鲜艳的青绿色'
  },
  {
    type: '绿色系',
    name: '青碧',
    color: '#48c0a3',
    description: '青碧：鲜艳的青蓝色'
  },
  {
    type: '绿色系',
    name: '翡翠色',
    color: '#3de1ad',
    description: '翡翠色：1，翡翠鸟羽毛的青绿色。2，翡翠宝石的颜色。'
  },
  {
    type: '绿色系',
    name: '草绿',
    color: '#40de5a',
    description: '草绿：绿而略黄的颜色。'
  },
  {
    type: '绿色系',
    name: '青色',
    color: '#00e09e',
    description:
      '青色：1，一类带绿的蓝色,中等深浅,高度饱和。3，本义是蓝色。4，一般指深绿色。5，也指黑色。6，四色印刷中的一色。2，特指三补色中的一色。'
  },
  {
    type: '绿色系',
    name: '青翠',
    color: '#00e079',
    description: '青翠：鲜绿'
  },
  {
    type: '绿色系',
    name: '青白',
    color: '#c0ebd7',
    description: '青白：白而发青,尤指脸没有血色 '
  },
  {
    type: '绿色系',
    name: '鸭卵青',
    color: '#e0eee8',
    description: '鸭卵青：淡青灰色，极淡的青绿色'
  },
  {
    type: '绿色系',
    name: '蟹壳青',
    color: '#bbcdc5',
    description: '蟹壳青：深灰绿色'
  },
  {
    type: '绿色系',
    name: '鸦青',
    color: '#424c50',
    description: '鸦青：鸦羽的颜色。即黑而带有紫绿光的颜色。'
  },
  {
    type: '绿色系',
    name: '绿色',
    color: '#00e500',
    description:
      '绿色：1，在光谱中介于蓝与黄之间的那种颜色。2，本义：青中带黄的颜色。3，引申为黑色，如绿鬓：乌黑而光亮的鬓发。代指为青春年少的容颜。'
  },
  {
    type: '绿色系',
    name: '豆绿',
    color: '#9ed048',
    description: '豆绿：浅黄绿色'
  },
  {
    type: '绿色系',
    name: '豆青',
    color: '#96ce54',
    description: '豆青：浅青绿色'
  },
  {
    type: '绿色系',
    name: '石青',
    color: '#7bcfa6',
    description: '石青：淡灰绿色'
  },
  {
    type: '绿色系',
    name: '玉色',
    color: '#2edfa3',
    description: '玉色:玉的颜色，高雅的淡绿、淡青色 '
  },
  {
    type: '绿色系',
    name: '缥',
    color: '#7fecad',
    description: '缥：绿色而微白'
  },
  {
    type: '绿色系',
    name: '艾绿',
    color: '#a4e2c6',
    description: '艾绿：艾草的颜色。偏苍白的绿色。'
  },
  {
    type: '绿色系',
    name: '松柏绿',
    color: '#21a675',
    description: '松柏绿：经冬松柏叶的深绿'
  },
  {
    type: '绿色系',
    name: '松花绿',
    color: '#057748',
    description: '松花绿：亦作"松花"、"松绿"。偏黑的深绿色,墨绿。'
  },
  {
    type: '绿色系',
    name: '松花色',
    color: '#bce672',
    description:
      '松花色：浅黄绿色。（松树花粉的颜色）《红楼梦》中提及松花配桃红为娇艳 '
  },
  {
    type: '蓝色系',
    name: '蓝',
    color: '#44cef6',
    description: '蓝：三原色的一种。像晴天天空的颜色'
  },
  {
    type: '蓝色系',
    name: '靛青',
    color: '#177cb0',
    description:
      '靛青：也叫"蓝靛"。用蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料。呈深蓝绿色'
  },
  {
    type: '蓝色系',
    name: '靛蓝',
    color: '#065279',
    description: '靛蓝：由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料'
  },
  {
    type: '蓝色系',
    name: '碧蓝',
    color: '#3eede7',
    description: '碧蓝：青蓝色'
  },
  {
    type: '蓝色系',
    name: '蔚蓝',
    color: '#70f3ff',
    description: '蔚蓝：类似晴朗天空的颜色的一种蓝色'
  },
  {
    type: '蓝色系',
    name: '宝蓝',
    color: '#4b5cc4',
    description: '宝蓝：鲜艳明亮的蓝色'
  },
  {
    type: '蓝色系',
    name: '蓝灰色',
    color: '#a1afc9',
    description: '蓝灰色：一种近于灰略带蓝的深灰色'
  },
  {
    type: '蓝色系',
    name: '藏青',
    color: '#2e4e7e',
    description: '藏青：蓝而近黑'
  },
  {
    type: '蓝色系',
    name: '藏蓝',
    color: '#3b2e7e',
    description: '藏蓝：蓝里略透红色'
  },
  {
    type: '蓝色系',
    name: '黛',
    color: '#4a4266',
    description: '黛：青黑色的颜料。古代女子用以画眉。'
  },
  {
    type: '蓝色系',
    name: '黛螺',
    color: '#4a4266',
    description: '黛螺：绘画或画眉所使用的青黑色颜料，代指女子眉妩。'
  },
  {
    type: '蓝色系',
    name: '黛色',
    color: '#4a4266',
    description: '黛色：青黑色。'
  },
  {
    type: '蓝色系',
    name: '黛绿',
    color: '#426666',
    description: '黛绿：墨绿。'
  },
  {
    type: '蓝色系',
    name: '黛蓝',
    color: '#425066',
    description: '黛蓝：深蓝色'
  },
  {
    type: '蓝色系',
    name: '黛紫',
    color: '#574266',
    description: '黛紫：深紫色'
  },
  {
    type: '蓝色系',
    name: '紫色',
    color: '#8d4bbb',
    description:
      '紫色：蓝和红组成的颜色。古人以紫为祥瑞的颜色。代指与帝王、皇宫有关的事物。'
  },
  {
    type: '蓝色系',
    name: '紫酱',
    color: '#815463',
    description: '紫酱：浑浊的紫色'
  },
  {
    type: '蓝色系',
    name: '酱紫',
    color: '#815476',
    description: '酱紫：紫中略带红的颜色'
  },
  {
    type: '蓝色系',
    name: '紫檀',
    color: '#4c221b',
    description: '紫檀：檀木的颜色，也称乌檀色 乌木色 '
  },
  {
    type: '蓝色系',
    name: '绀紫',
    color: '#003371',
    description: '绀青 绀紫：纯度较低的深紫色 '
  },
  {
    type: '蓝色系',
    name: '紫棠',
    color: '#56004f',
    description: '紫棠：黑红色'
  },
  {
    type: '蓝色系',
    name: '青莲',
    color: '#801dae',
    description: '青莲：偏蓝的紫色'
  },
  {
    type: '蓝色系',
    name: '群青',
    color: '#4c8dae',
    description: '群青：深蓝色'
  },
  {
    type: '蓝色系',
    name: '雪青',
    color: '#b0a4e3',
    description: '雪青：浅蓝紫色'
  },
  {
    type: '蓝色系',
    name: '丁香色',
    color: '#cca4e3',
    description: '丁香色：紫丁香的颜色，浅浅的紫色，很娇柔淡雅的色彩'
  },
  {
    type: '蓝色系',
    name: '藕色',
    color: '#edd1d8',
    description: '藕色：浅灰而略带红的颜色'
  },
  {
    type: '蓝色系',
    name: '藕荷色',
    color: '#e4c6d0',
    description: '藕荷色：浅紫而略带红的颜色'
  },
  {
    type: '苍色',
    name: '苍色',
    color: '#75878a',
    description: '苍色'
  },
  {
    type: '苍色',
    name: '苍翠',
    color: '#519a73',
    description: '苍翠'
  },
  {
    type: '苍色',
    name: '苍黄',
    color: '#a29b7c',
    description: '苍黄'
  },
  {
    type: '苍色',
    name: '苍青',
    color: '#7397ab',
    description: '苍青'
  },
  {
    type: '苍色',
    name: '苍黑',
    color: '#395260',
    description: '苍黑'
  },
  {
    type: '苍色',
    name: '苍白',
    color: '#d1d9e0',
    description: '苍白'
  },
  {
    type: '水色',
    name: '水色',
    color: '#88ada6',
    description: '水色'
  },
  {
    type: '水色',
    name: '水红',
    color: '#f3d3e7',
    description: '水红'
  },
  {
    type: '水色',
    name: '水绿',
    color: '#d4f2e7',
    description: '水绿'
  },
  {
    type: '水色',
    name: '水蓝',
    color: '#d2f0f4',
    description: '水蓝'
  },
  {
    type: '水色',
    name: '淡青',
    color: '#d3e0f3',
    description: '淡青'
  },
  {
    type: '水色',
    name: '湖蓝',
    color: '#30dff3',
    description: '湖蓝'
  },
  {
    type: '水色',
    name: '湖绿',
    color: '#25f8cb',
    description: '湖绿，皆是浅色。深色淡色：颜色深的或浅的，不再一一列出。'
  },
  {
    type: '灰白色系',
    name: '精白',
    color: '#ffffff',
    description: '精白：纯白，洁白，净白，粉白。'
  },
  {
    type: '灰白色系',
    name: '象牙白',
    color: '#fffbf0',
    description: '象牙白：乳白色'
  },
  {
    type: '灰白色系',
    name: '雪白',
    color: '#f2fdff',
    description: '雪白：如雪般洁白'
  },
  {
    type: '灰白色系',
    name: '月白',
    color: '#d6ecf0',
    description: '月白：淡蓝色'
  },
  {
    type: '灰白色系',
    name: '缟',
    color: '#f2ecde',
    description: '缟：白色'
  },
  {
    type: '灰白色系',
    name: '素',
    color: '#e0f0e9',
    description: '素：白色，无色'
  },
  {
    type: '灰白色系',
    name: '荼白',
    color: '#f3f9f1',
    description: '荼白：如荼之白色'
  },
  {
    type: '灰白色系',
    name: '霜色',
    color: '#e9f1f6',
    description: '霜色：白霜的颜色。'
  },
  {
    type: '灰白色系',
    name: '花白',
    color: '#c2ccd0',
    description: '花白：白色和黑色混杂的。斑白的 夹杂有灰色的白 '
  },
  {
    type: '灰白色系',
    name: '鱼肚白',
    color: '#fcefe8',
    description: '鱼肚白：似鱼腹部的颜色，多指黎明时东方的天色颜色'
  },
  {
    type: '灰白色系',
    name: '莹白',
    color: '#e3f9fd',
    description: '莹白：晶莹洁白'
  },
  {
    type: '灰白色系',
    name: '灰色',
    color: '#808080',
    description: '灰色：黑色和白色混和成的一种颜色'
  },
  {
    type: '灰白色系',
    name: '牙色',
    color: '#eedeb0',
    description: '牙色：与象牙相似的淡黄色'
  },
  {
    type: '灰白色系',
    name: '铅白',
    color: '#f0f0f4',
    description:
      '铅白：铅粉的白色。铅粉，国画颜料，日久易氧化"返铅"变黑。铅粉在古时用以搽脸的化妆品。'
  },
  {
    type: '黑色系',
    name: '玄色',
    color: '#622a1d',
    description: '玄色：赤黑色，黑中带红的颜色，又泛指黑色'
  },
  {
    type: '黑色系',
    name: '玄青',
    color: '#3d3b4f',
    description: '玄青：深黑色'
  },
  {
    type: '黑色系',
    name: '乌色',
    color: '#725e82',
    description: '乌色：暗而呈黑的颜色'
  },
  {
    type: '黑色系',
    name: '乌黑',
    color: '#392f41',
    description: '乌黑：深黑；漆黑'
  },
  {
    type: '黑色系',
    name: '漆黑',
    color: '#161823',
    description: '漆黑：非常黑的'
  },
  {
    type: '黑色系',
    name: '墨色',
    color: '#50616d',
    description: '墨色：即黑色'
  },
  {
    type: '黑色系',
    name: '墨灰',
    color: '#758a99',
    description: '墨灰：即黑灰'
  },
  {
    type: '黑色系',
    name: '黑色',
    color: '#000000',
    description:
      '黑色：亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。'
  },
  {
    type: '黑色系',
    name: '缁色',
    color: '#493131',
    description: '缁色：帛黑色'
  },
  {
    type: '黑色系',
    name: '煤黑',
    color: '#312520',
    description: '煤黑、象牙黑：都是黑，不过有冷暖之分。'
  },
  {
    type: '黑色系',
    name: '黧',
    color: '#5d513c',
    description: '黧：黑中带黄的颜色'
  },
  {
    type: '黑色系',
    name: '黎',
    color: '#75664d',
    description: '黎：黑中带黄似黎草色'
  },
  {
    type: '黑色系',
    name: '黝',
    color: '#6b6882',
    description: '黝：本义为淡黑色或微青黑色。'
  },
  {
    type: '黑色系',
    name: '黝黑',
    color: '#665757',
    description: '黝黑：（皮肤暴露在太阳光下而晒成的）青黑色'
  },
  {
    type: '黑色系',
    name: '黯',
    color: '#41555d',
    description: '黯：深黑色、泛指黑色'
  },
  {
    type: '金银色',
    name: '赤金',
    color: '#f2be45',
    description: '赤金：足金的颜色'
  },
  {
    type: '金银色',
    name: '金色',
    color: '#eacd76',
    description: '金色：平均为深黄色带光泽的颜色'
  },
  {
    type: '金银色',
    name: '银白',
    color: '#e9e7ef',
    description: '银白：带银光的白色'
  },
  {
    type: '金银色',
    name: '铜绿',
    color: '#549688',
    description: '铜绿'
  },
  {
    type: '金银色',
    name: '乌金',
    color: '#a78e44',
    description: '乌金'
  },
  {
    type: '金银色',
    name: '老银',
    color: '#bacac6',
    description: '老银：金属氧化后的色彩'
  }
];

const colorTypes = [
  '红色系',
  '黄色系',
  '绿色系',
  '蓝色系',
  '苍色',
  '水色',
  '灰白色系',
  '黑色系',
  '金银色'
];
const rColorList: rColors[] = colorTypes.map((colorType) => {
  return {
    name: colorType,
    colors: []
  };
});

colors.forEach((color) => {
  const index = colorTypes.findIndex((colorType) => colorType == color.type);
  if (index > -1) rColorList[index].colors.push(color);
});
</script>

<style scoped lang="scss">
.r-colors {
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background: aliceblue;

  &-type {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .type-title {
      font-size: 24px;
      font-weight: bold;
      margin: 40px 0 10px;
    }
    .type-colors {
      display: flex;
      flex-wrap: wrap;

      &-item {
        position: relative;
        width: 64px;
        height: 64px;

        &:hover,
        &:focus {
          transform: scale (1.2);
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);

          .item-txt {
            visibility: visible;
          }
        }

        &:not(:only-child) {
          margin-top: 3px;
          margin-right: 3px;
        }

        .item-txt {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          visibility: hidden;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
