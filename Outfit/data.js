
'use strict';

// 服裝資料庫
// styles：風格
// part：服裝部位
// genders：性別傾向
// seasons：適合季節
// occasions：適合場合

const OUTFIT_CATALOG = {
    styles: [
        // 基本風格
        '日常', '休閒', '學院', '古典', '哥德', '冒險',
        '都會', '復古', '舞台', '和風', '甜酷', '甜美',
        '機能', '正式', '奇幻', '運動', '海灘', '街頭',

        // 特殊服裝風格
        '洛麗塔', '森系', '龐克', '偶像', '女僕', '執事',
        '宮廷', '婚紗', '睡衣', '泳裝', '民族', '中華風',

        // 裝備與戰鬥風格
        '騎士', '軍裝', '戰術', '重裝', '輕裝', '忍者',
        '海盜', '西部', '探險', '修道',

        // 科幻與幻想風格
        '賽博龐克', '蒸氣龐克', '科幻', '魔法師',
        '巫師', '神秘學', '未來科技',

        // 其他主題
        '偵探', '醫療', '工作服', '校園制服',
        '管家', '旅行', '節慶'
    ],

    items: [

        // ==========================================
        // 上身 Top
        // ==========================================

        // 日常、休閒、學院
        { name: '白襯衫', part: 'top', styles: ['學院', '古典', '正式', '都會', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['school', 'work', 'formal', 'casual'] },
        { name: '蕾絲襯衫', part: 'top', styles: ['哥德', '古典', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'date', 'party'] },
        { name: '高領毛衣', part: 'top', styles: ['日常', '復古', '古典', '森系'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['casual', 'work', 'date'] },
        { name: '寬鬆印花 T-shirt', part: 'top', styles: ['日常', '休閒', '街頭'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['casual', 'outdoor', 'travel'] },
        { name: '連帽上衣', part: 'top', styles: ['日常', '休閒', '運動', '街頭'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['casual', 'outdoor', 'travel'] },
        { name: '短版上衣', part: 'top', styles: ['甜酷', '街頭', '日常'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['casual', 'date', 'party'] },
        { name: '荷葉邊上衣', part: 'top', styles: ['甜美', '古典', '學院', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'school', 'party'] },
        { name: '泡泡袖襯衫', part: 'top', styles: ['古典', '甜美', '奇幻', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['date', 'formal', 'party'] },
        { name: '針織背心', part: 'top', styles: ['學院', '日常', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['school', 'casual', 'work'] },
        { name: '立領襯衫', part: 'top', styles: ['冒險', '古典', '正式', '海盜'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['travel', 'work', 'formal'] },
        { name: '海軍領上衣', part: 'top', styles: ['學院', '日常', '校園制服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['school', 'casual'] },
        { name: '露肩針織衫', part: 'top', styles: ['甜酷', '日常'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['date', 'casual'] },
        { name: '短版針織外套', part: 'top', styles: ['日常', '甜美', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['casual', 'date'] },
        { name: '條紋長袖上衣', part: 'top', styles: ['日常', '休閒', '海灘'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['casual', 'travel'] },
        { name: '荷葉領襯衫', part: 'top', styles: ['古典', '洛麗塔', '甜美'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['date', 'formal', 'party'] },
        { name: '露背上衣', part: 'top', styles: ['甜酷', '舞台', '都會'], genders: ['feminine'], seasons: ['summer'], occasions: ['party', 'date', 'stage'] },
        { name: '高腰馬甲上衣', part: 'top', styles: ['古典', '哥德', '宮廷', '舞台'], genders: ['feminine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'party', 'stage'] },
        { name: '皮革束身衣', part: 'top', styles: ['哥德', '甜酷', '舞台', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['party', 'stage', 'date'] },
        { name: '亮面短版上衣', part: 'top', styles: ['舞台', '甜酷', '偶像'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['stage', 'party'] },
        { name: '和風交領上衣', part: 'top', styles: ['和風', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'festival', 'date'] },
        { name: '海灘罩衫', part: 'top', styles: ['海灘', '泳裝'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '針織短袖', part: 'top', styles: ['日常', '森系', '休閒'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['casual', 'date'] },
        { name: '寬版毛衣', part: 'top', styles: ['森系', '日常', '復古'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['casual', 'travel'] },

        // 洛麗塔、女僕、宮廷
        { name: '高領蕾絲襯衫', part: 'top', styles: ['洛麗塔', '哥德', '宮廷'], genders: ['feminine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '荷葉領女僕上衣', part: 'top', styles: ['女僕', '甜美', '古典'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'party'] },
        { name: '宮廷刺繡上衣', part: 'top', styles: ['宮廷', '古典', '正式'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '蝴蝶結泡泡袖上衣', part: 'top', styles: ['洛麗塔', '甜美', '偶像'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party', 'stage'] },
        { name: '蕾絲短版馬甲', part: 'top', styles: ['洛麗塔', '哥德', '宮廷'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['party', 'formal'] },
        { name: '執事立領襯衫', part: 'top', styles: ['執事', '古典', '正式'], genders: ['masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'work'] },

        // 民族、中華、和風
        { name: '盤扣短衫', part: 'top', styles: ['中華風', '民族', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'festival'] },
        { name: '刺繡立領旗袍上衣', part: 'top', styles: ['中華風', '古典', '宮廷'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'festival'] },
        { name: '和風浴衣上衣', part: 'top', styles: ['和風', '節慶'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['festival', 'casual'] },
        { name: '民族刺繡罩衫', part: 'top', styles: ['民族', '森系', '旅行'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['travel', 'festival'] },

        // 裝備、戰鬥
        { name: '皮革護胸', part: 'top', styles: ['冒險', '輕裝', '騎士'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '板甲胸甲', part: 'top', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'outdoor'] },
        { name: '鎖子甲上衣', part: 'top', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '輕型皮革護甲', part: 'top', styles: ['冒險', '輕裝', '忍者'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '戰術防彈背心', part: 'top', styles: ['戰術', '軍裝', '科幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '軍裝制服上衣', part: 'top', styles: ['軍裝', '正式', '工作服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['work', 'formal'] },
        { name: '迷彩作戰上衣', part: 'top', styles: ['軍裝', '戰術', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '忍者包覆上衣', part: 'top', styles: ['忍者', '輕裝', '和風'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '海盜荷葉襯衫', part: 'top', styles: ['海盜', '復古', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['travel', 'party'] },
        { name: '牛仔皮革背心', part: 'top', styles: ['西部', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '探險者多口袋背心', part: 'top', styles: ['探險', '冒險', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },

        // 科幻、蒸氣龐克、魔法
        { name: '蒸氣龐克束腰上衣', part: 'top', styles: ['蒸氣龐克', '復古', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['party', 'travel'] },
        { name: '機械感立領上衣', part: 'top', styles: ['科幻', '賽博龐克', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'outdoor'] },
        { name: '霓虹機能背心', part: 'top', styles: ['賽博龐克', '機能', '科幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['stage', 'party'] },
        { name: '巫師長袍上衣', part: 'top', styles: ['巫師', '魔法師', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '修道士長袖服', part: 'top', styles: ['修道', '古典', '神秘學'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '星象刺繡上衣', part: 'top', styles: ['神秘學', '魔法師', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'party'] },

        // 其他職業
        { name: '偵探襯衫', part: 'top', styles: ['偵探', '復古', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['work', 'travel'] },
        { name: '白色醫療制服上衣', part: 'top', styles: ['醫療', '工作服', '都會'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['work'] },
        { name: '偶像舞台短版上衣', part: 'top', styles: ['偶像', '舞台', '甜美'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['stage', 'party'] },


        // ==========================================
        // 下身 Bottom
        // ==========================================

        { name: '深色百褶裙', part: 'bottom', styles: ['學院', '古典', '校園制服'], genders: ['feminine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['school', 'casual', 'date'] },
        { name: '格紋短裙', part: 'bottom', styles: ['學院', '復古', '校園制服'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['school', 'casual'] },
        { name: '高腰長裙', part: 'bottom', styles: ['古典', '正式', '奇幻', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'date', 'party'] },
        { name: '皮革窄裙', part: 'bottom', styles: ['哥德', '甜酷', '龐克'], genders: ['feminine'], seasons: ['autumn', 'winter'], occasions: ['party', 'date', 'stage'] },
        { name: '直筒牛仔褲', part: 'bottom', styles: ['日常', '休閒', '街頭'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'travel', 'outdoor'] },
        { name: '工裝長褲', part: 'bottom', styles: ['冒險', '機能', '街頭', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '西裝長褲', part: 'bottom', styles: ['都會', '正式', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['work', 'formal'] },
        { name: '高腰寬褲', part: 'bottom', styles: ['復古', '都會', '日常'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['work', 'casual', 'date'] },
        { name: '束口運動褲', part: 'bottom', styles: ['運動', '休閒', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['casual', 'outdoor', 'travel'] },
        { name: '不對稱舞台長褲', part: 'bottom', styles: ['舞台', '甜酷', '偶像'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['stage', 'party'] },
        { name: '和風袴裙', part: 'bottom', styles: ['和風', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '輕薄沙灘短褲', part: 'bottom', styles: ['海灘', '休閒', '泳裝'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '皮革綁帶長褲', part: 'bottom', styles: ['冒險', '哥德', '海盜'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['travel', 'party'] },
        { name: '蓬裙', part: 'bottom', styles: ['奇幻', '古典', '正式', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'party', 'stage'] },
        { name: '蕾絲荷葉短裙', part: 'bottom', styles: ['洛麗塔', '甜美', '哥德'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party'] },
        { name: '高腰吊帶短褲', part: 'bottom', styles: ['森系', '日常', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['casual', 'travel'] },
        { name: '燈籠褲', part: 'bottom', styles: ['和風', '民族', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['festival', 'travel'] },
        { name: '魚尾長裙', part: 'bottom', styles: ['正式', '宮廷', '古典'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'party'] },
        { name: '皮革短褲', part: 'bottom', styles: ['甜酷', '街頭', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'party', 'stage'] },
        { name: '吊帶長褲', part: 'bottom', styles: ['森系', '休閒', '日常'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'travel'] },
        { name: '西部牛仔褲', part: 'bottom', styles: ['西部', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '海盜寬版長褲', part: 'bottom', styles: ['海盜', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['travel', 'outdoor'] },

        // 戰鬥、裝備風格
        { name: '騎士金屬護腿', part: 'bottom', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '皮革護腿褲', part: 'bottom', styles: ['騎士', '輕裝', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '戰術多口袋長褲', part: 'bottom', styles: ['戰術', '軍裝', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '迷彩作戰褲', part: 'bottom', styles: ['軍裝', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor'] },
        { name: '忍者束口褲', part: 'bottom', styles: ['忍者', '輕裝', '和風'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '金屬片戰裙', part: 'bottom', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'formal'] },
        { name: '蒸氣龐克束帶短褲', part: 'bottom', styles: ['蒸氣龐克', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['travel', 'party'] },
        { name: '機械裝甲護腿', part: 'bottom', styles: ['科幻', '重裝', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '霓虹機能長褲', part: 'bottom', styles: ['賽博龐克', '機能', '科幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['stage', 'outdoor'] },

        // 其他主題
        { name: '旗袍裙褲', part: 'bottom', styles: ['中華風', '古典'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'festival'] },
        { name: '民族刺繡長裙', part: 'bottom', styles: ['民族', '森系', '奇幻'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['festival', 'travel'] },
        { name: '偶像打歌短裙', part: 'bottom', styles: ['偶像', '舞台', '甜美'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['stage', 'party'] },
        { name: '女僕圍裙裙裝', part: 'bottom', styles: ['女僕', '甜美', '古典'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'party'] },
        { name: '修道長裙', part: 'bottom', styles: ['修道', '神秘學', '古典'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'festival'] },


        // ==========================================
        // 連身服 One Piece
        // ==========================================

        { name: '高腰茶會洋裝', part: 'onePiece', styles: ['古典', '甜美', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party', 'formal'] },
        { name: '黑色高領哥德洋裝', part: 'onePiece', styles: ['哥德', '洛麗塔'], genders: ['feminine'], seasons: ['autumn', 'winter'], occasions: ['party', 'formal', 'stage'] },
        { name: '簡約浴衣', part: 'onePiece', styles: ['和風', '節慶'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['festival', 'date', 'casual'] },
        { name: '剪裁俐落的晚宴服', part: 'onePiece', styles: ['正式', '都會', '宮廷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '吊帶連身褲', part: 'onePiece', styles: ['日常', '休閒', '森系'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'travel'] },
        { name: '飛行連身服', part: 'onePiece', styles: ['機能', '冒險', '科幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '燕尾禮服', part: 'onePiece', styles: ['正式', '古典', '執事'], genders: ['masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '星月祭典長袍', part: 'onePiece', styles: ['奇幻', '魔法師', '神秘學'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['festival', 'formal', 'stage'] },
        { name: '海邊細肩帶長裙', part: 'onePiece', styles: ['海灘', '泳裝'], genders: ['feminine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'date'] },
        { name: '亮片舞台連身服', part: 'onePiece', styles: ['舞台', '偶像', '甜酷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '碎花棉麻洋裝', part: 'onePiece', styles: ['森系', '日常', '民族'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['casual', 'travel', 'date'] },
        { name: '蕾絲高腰長洋裝', part: 'onePiece', styles: ['古典', '洛麗塔', '宮廷'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'party'] },
        { name: '蓬袖公主洋裝', part: 'onePiece', styles: ['奇幻', '宮廷', '甜美'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['formal', 'party'] },
        { name: '黑白女僕洋裝', part: 'onePiece', styles: ['女僕', '古典', '甜美'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['casual', 'party'] },
        { name: '洛麗塔蓬裙洋裝', part: 'onePiece', styles: ['洛麗塔', '甜美', '古典'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['party', 'date'] },
        { name: '婚紗長禮服', part: 'onePiece', styles: ['婚紗', '宮廷', '正式'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '簡約西裝連身褲', part: 'onePiece', styles: ['都會', '正式', '工作服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['work', 'formal'] },
        { name: '旗袍', part: 'onePiece', styles: ['中華風', '古典', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'festival', 'party'] },
        { name: '民族刺繡長袍', part: 'onePiece', styles: ['民族', '奇幻', '森系'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['festival', 'travel'] },
        { name: '海盜船長長外衣', part: 'onePiece', styles: ['海盜', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['travel', 'party'] },

        // 裝備型連身服
        { name: '騎士全身鎧甲', part: 'onePiece', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '輕型冒險者護甲套裝', part: 'onePiece', styles: ['冒險', '輕裝', '探險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '軍用作戰連身服', part: 'onePiece', styles: ['軍裝', '戰術', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '忍者夜行服', part: 'onePiece', styles: ['忍者', '輕裝', '和風'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '機械動力裝甲', part: 'onePiece', styles: ['科幻', '重裝', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '太空探索服', part: 'onePiece', styles: ['科幻', '未來科技', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['travel', 'outdoor'] },
        { name: '西部牛仔連身服', part: 'onePiece', styles: ['西部', '復古', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '蒸氣龐克工匠服', part: 'onePiece', styles: ['蒸氣龐克', '工作服', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['work', 'travel'] },
        { name: '修道長袍', part: 'onePiece', styles: ['修道', '神秘學', '古典'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '巫師星象長袍', part: 'onePiece', styles: ['巫師', '魔法師', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['festival', 'formal'] },
        { name: '偵探風衣套裝', part: 'onePiece', styles: ['偵探', '復古', '都會'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['work', 'travel'] },
        { name: '醫療工作服', part: 'onePiece', styles: ['醫療', '工作服', '都會'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['work'] },
        { name: '運動連身服', part: 'onePiece', styles: ['運動', '機能', '日常'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'casual'] },
        { name: '絲質睡袍', part: 'onePiece', styles: ['睡衣', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['casual'] },
        { name: '連身泳裝', part: 'onePiece', styles: ['泳裝', '海灘', '運動'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel'] },


        // ==========================================
        // 外套 Outerwear
        // ==========================================

        { name: '針織開襟衫', part: 'outerwear', styles: ['日常', '學院', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['school', 'casual', 'work'] },
        { name: '飛行夾克', part: 'outerwear', styles: ['街頭', '冒險', '休閒'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['casual', 'travel', 'outdoor'] },
        { name: '格紋大衣', part: 'outerwear', styles: ['復古', '古典', '都會'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['work', 'casual', 'date'] },
        { name: '蕾絲披肩', part: 'outerwear', styles: ['古典', '哥德', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'date', 'party'] },
        { name: '短版皮衣', part: 'outerwear', styles: ['甜酷', '街頭', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['casual', 'party', 'date'] },
        { name: '雙排扣西裝外套', part: 'outerwear', styles: ['都會', '正式', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['work', 'formal'] },
        { name: '短版斗篷', part: 'outerwear', styles: ['冒險', '奇幻', '古典', '騎士'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['travel', 'outdoor', 'formal'] },
        { name: '長版薄紗外套', part: 'outerwear', styles: ['哥德', '奇幻', '洛麗塔'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['party', 'stage', 'formal'] },
        { name: '防風機能外套', part: 'outerwear', styles: ['機能', '運動', '冒險', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '輕薄罩衫', part: 'outerwear', styles: ['海灘', '日常'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '羽織', part: 'outerwear', styles: ['和風', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['festival', 'formal', 'casual'] },
        { name: '長版羊毛大衣', part: 'outerwear', styles: ['古典', '都會', '復古'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['work', 'formal', 'casual'] },
        { name: '毛絨短外套', part: 'outerwear', styles: ['甜美', '日常', '洛麗塔'], genders: ['feminine'], seasons: ['autumn', 'winter'], occasions: ['date', 'casual'] },
        { name: '牛仔外套', part: 'outerwear', styles: ['休閒', '街頭', '日常'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['casual', 'travel'] },
        { name: '披肩式斗篷', part: 'outerwear', styles: ['古典', '奇幻', '哥德'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'travel'] },
        { name: '蕾絲短披肩', part: 'outerwear', styles: ['洛麗塔', '甜美', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party'] },
        { name: '宮廷長披風', part: 'outerwear', styles: ['宮廷', '騎士', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '海盜船長大衣', part: 'outerwear', styles: ['海盜', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['travel', 'party'] },
        { name: '西部流蘇皮衣', part: 'outerwear', styles: ['西部', '復古', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '蒸氣龐克機械外套', part: 'outerwear', styles: ['蒸氣龐克', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['travel', 'work'] },

        // 戰鬥裝備外套
        { name: '板甲肩甲', part: 'outerwear', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '金屬胸肩護甲', part: 'outerwear', styles: ['騎士', '重裝'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '皮革護肩', part: 'outerwear', styles: ['冒險', '輕裝', '海盜'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '戰術防護外套', part: 'outerwear', styles: ['戰術', '軍裝', '機能'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '軍用長大衣', part: 'outerwear', styles: ['軍裝', '正式', '復古'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'work'] },
        { name: '忍者短斗篷', part: 'outerwear', styles: ['忍者', '輕裝', '和風'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '機械動力肩甲', part: 'outerwear', styles: ['科幻', '重裝', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '全息投影披風', part: 'outerwear', styles: ['科幻', '賽博龐克', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '巫師星紋斗篷', part: 'outerwear', styles: ['巫師', '魔法師', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'festival'] },


        // ==========================================
        // 鞋子 Shoes
        // ==========================================

        { name: '樂福鞋', part: 'shoes', styles: ['學院', '古典', '都會', '校園制服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['school', 'work', 'casual'] },
        { name: '瑪莉珍鞋', part: 'shoes', styles: ['古典', '甜美', '學院', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['date', 'school', 'party'] },
        { name: '繫帶厚底靴', part: 'shoes', styles: ['哥德', '甜酷', '龐克'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['party', 'casual', 'stage'] },
        { name: '綁帶長靴', part: 'shoes', styles: ['冒險', '古典', '奇幻', '騎士'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['travel', 'outdoor', 'formal'] },
        { name: '厚底球鞋', part: 'shoes', styles: ['街頭', '日常', '甜酷', '運動'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['casual', 'travel'] },
        { name: '機能登山鞋', part: 'shoes', styles: ['機能', '冒險', '運動', '探險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '尖頭皮鞋', part: 'shoes', styles: ['正式', '都會', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['work', 'formal'] },
        { name: '復古短靴', part: 'shoes', styles: ['復古', '日常', '西部'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['casual', 'date', 'work'] },
        { name: '木屐', part: 'shoes', styles: ['和風', '節慶'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['festival', 'casual'] },
        { name: '綁帶涼鞋', part: 'shoes', styles: ['海灘', '日常', '森系'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '舞台厚底靴', part: 'shoes', styles: ['舞台', '甜酷', '偶像'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '高跟鞋', part: 'shoes', styles: ['正式', '都會', '古典', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'work', 'date'] },
        { name: '蕾絲綁帶鞋', part: 'shoes', styles: ['洛麗塔', '甜美', '古典'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party'] },
        { name: '毛絨雪靴', part: 'shoes', styles: ['日常', '森系', '休閒'], genders: ['feminine', 'masculine'], seasons: ['winter'], occasions: ['casual', 'travel'] },
        { name: '帆布鞋', part: 'shoes', styles: ['日常', '休閒', '學院', '街頭'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['school', 'casual', 'travel'] },
        { name: '尖頭瑪莉珍高跟鞋', part: 'shoes', styles: ['洛麗塔', '古典', '宮廷'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['formal', 'party'] },
        { name: '西部牛仔靴', part: 'shoes', styles: ['西部', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '海盜長筒靴', part: 'shoes', styles: ['海盜', '冒險', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['travel', 'outdoor'] },
        { name: '騎士金屬護脛靴', part: 'shoes', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '輕型皮革護腿靴', part: 'shoes', styles: ['騎士', '輕裝', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '戰術軍靴', part: 'shoes', styles: ['軍裝', '戰術', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '忍者足袋', part: 'shoes', styles: ['忍者', '和風', '輕裝'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '機械關節靴', part: 'shoes', styles: ['科幻', '重裝', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '透明材質高跟鞋', part: 'shoes', styles: ['科幻', '未來科技', '舞台'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['party', 'stage'] },
        { name: '室內毛絨拖鞋', part: 'shoes', styles: ['睡衣', '日常'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['casual'] },
        { name: '泳池夾腳拖', part: 'shoes', styles: ['泳裝', '海灘'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel'] },


        // ==========================================
        // 配件 Accessory
        // ==========================================

        { name: '珍珠耳墜', part: 'accessory', styles: ['古典', '正式', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'date', 'party'] },
        { name: '十字架項鍊', part: 'accessory', styles: ['哥德', '神秘學'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage', 'casual'] },
        { name: '領結', part: 'accessory', styles: ['學院', '古典', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['school', 'formal'] },
        { name: '領帶', part: 'accessory', styles: ['學院', '都會', '正式', '執事'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['school', 'work', 'formal'] },
        { name: '貝雷帽', part: 'accessory', styles: ['復古', '古典', '森系'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['casual', 'date', 'work'] },
        { name: '花冠', part: 'accessory', styles: ['奇幻', '古典', '甜美', '森系'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['festival', 'date', 'party'] },
        { name: '護目鏡', part: 'accessory', styles: ['冒險', '機能', '探險', '蒸氣龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '斜背包', part: 'accessory', styles: ['日常', '都會', '休閒'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['casual', 'work', 'travel'] },
        { name: '皮革腰包', part: 'accessory', styles: ['冒險', '機能', '街頭', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '金屬耳骨夾', part: 'accessory', styles: ['甜酷', '舞台', '街頭', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage', 'date'] },
        { name: '蕾絲手套', part: 'accessory', styles: ['哥德', '古典', '洛麗塔'], genders: ['feminine'], seasons: ['autumn', 'winter'], occasions: ['formal', 'party', 'stage'] },
        { name: '皮革手套', part: 'accessory', styles: ['冒險', '都會', '機能', '西部'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['work', 'outdoor', 'travel'] },
        { name: '髮簪', part: 'accessory', styles: ['和風', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['festival', 'formal', 'date'] },
        { name: '金屬腰鍊', part: 'accessory', styles: ['甜酷', '舞台', '哥德', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },
        { name: '懷錶', part: 'accessory', styles: ['古典', '正式', '奇幻', '蒸氣龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'work', 'party'] },
        { name: '寬簷草帽', part: 'accessory', styles: ['海灘', '日常', '森系'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '星形髮飾', part: 'accessory', styles: ['奇幻', '舞台', '偶像'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party', 'festival'] },
        { name: '運動腕帶', part: 'accessory', styles: ['運動', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'casual'] },
        { name: '珍珠髮箍', part: 'accessory', styles: ['甜美', '古典', '洛麗塔'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['date', 'party'] },
        { name: '絲質頸帶', part: 'accessory', styles: ['古典', '哥德', '宮廷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '蝴蝶結髮夾', part: 'accessory', styles: ['甜美', '洛麗塔', '偶像'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['date', 'school', 'party'] },
        { name: '毛絨耳罩', part: 'accessory', styles: ['日常', '森系', '甜美'], genders: ['feminine', 'masculine'], seasons: ['winter'], occasions: ['casual', 'travel'] },
        { name: '細框眼鏡', part: 'accessory', styles: ['學院', '都會', '偵探'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['school', 'work', 'casual'] },
        { name: '圓框眼鏡', part: 'accessory', styles: ['復古', '森系', '學院'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['school', 'casual'] },
        { name: '小型手提包', part: 'accessory', styles: ['古典', '甜美', '都會'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['date', 'formal', 'party'] },
        { name: '皮革郵差包', part: 'accessory', styles: ['冒險', '旅行', '復古'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['travel', 'casual'] },
        { name: '女僕頭飾', part: 'accessory', styles: ['女僕', '甜美', '古典'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'casual'] },
        { name: '洛麗塔大蝴蝶結', part: 'accessory', styles: ['洛麗塔', '甜美'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'date'] },
        { name: '羽毛髮飾', part: 'accessory', styles: ['奇幻', '海盜', '民族'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['party', 'festival'] },
        { name: '皮革腰帶', part: 'accessory', styles: ['冒險', '西部', '騎士', '軍裝'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel', 'work'] },
        { name: '戰術腰帶', part: 'accessory', styles: ['戰術', '軍裝', '機能'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '金屬護腕', part: 'accessory', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '皮革護腕', part: 'accessory', styles: ['騎士', '輕裝', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '軍用臂章', part: 'accessory', styles: ['軍裝', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '忍者面罩', part: 'accessory', styles: ['忍者', '和風', '輕裝'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '騎士頭盔', part: 'accessory', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '金屬肩飾', part: 'accessory', styles: ['騎士', '宮廷', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '蒸氣龐克單片眼鏡', part: 'accessory', styles: ['蒸氣龐克', '復古', '偵探'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['work', 'party'] },
        { name: '齒輪髮飾', part: 'accessory', styles: ['蒸氣龐克', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },
        { name: '發光電子項圈', part: 'accessory', styles: ['賽博龐克', '科幻', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '全息投影耳環', part: 'accessory', styles: ['科幻', '賽博龐克', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '巫師尖帽', part: 'accessory', styles: ['巫師', '魔法師', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['festival', 'party'] },
        { name: '水晶耳墜', part: 'accessory', styles: ['奇幻', '神秘學', '宮廷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '星月項鍊', part: 'accessory', styles: ['奇幻', '魔法師', '神秘學'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['festival', 'party'] },
        { name: '修道十字架', part: 'accessory', styles: ['修道', '神秘學', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '醫療識別證', part: 'accessory', styles: ['醫療', '工作服', '都會'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['work'] },
        { name: '絲質睡眠眼罩', part: 'accessory', styles: ['睡衣', '日常'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['casual'] },
        { name: '珍珠手鍊', part: 'accessory', styles: ['古典', '宮廷', '甜美'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'date', 'party'] },
        { name: '皮革吊帶', part: 'accessory', styles: ['哥德', '龐克', '甜酷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },


        // ==========================================
        // 服裝細節 Detail
        // ==========================================

        { name: '蕾絲拼接', part: 'detail', styles: ['哥德', '古典', '洛麗塔'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['formal', 'date', 'party'] },
        { name: '格紋滾邊', part: 'detail', styles: ['學院', '復古', '校園制服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['school', 'casual'] },
        { name: '金屬扣環', part: 'detail', styles: ['甜酷', '機能', '街頭', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['casual', 'party', 'stage'] },
        { name: '刺繡花紋', part: 'detail', styles: ['古典', '和風', '奇幻', '民族'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'festival', 'date'] },
        { name: '皮革綁帶', part: 'detail', styles: ['冒險', '哥德', '騎士'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['travel', 'outdoor', 'party'] },
        { name: '反光拼接', part: 'detail', styles: ['機能', '運動', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['outdoor', 'travel'] },
        { name: '珍珠鈕扣', part: 'detail', styles: ['古典', '正式', '宮廷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'work', 'date'] },
        { name: '流蘇裝飾', part: 'detail', styles: ['舞台', '復古', '海灘', '西部'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['stage', 'party', 'outdoor'] },
        { name: '羽毛裝飾', part: 'detail', styles: ['奇幻', '舞台', '古典', '海盜'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party', 'formal'] },
        { name: '鏤空花紋', part: 'detail', styles: ['哥德', '古典', '甜美', '洛麗塔'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['date', 'party', 'formal'] },
        { name: '不對稱剪裁', part: 'detail', styles: ['都會', '舞台', '甜酷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['work', 'stage', 'party'] },
        { name: '大口袋設計', part: 'detail', styles: ['冒險', '機能', '休閒', '戰術'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel', 'casual'] },
        { name: '透明薄紗', part: 'detail', styles: ['哥德', '奇幻', '古典', '洛麗塔'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'party', 'stage'] },
        { name: '海浪刺繡', part: 'detail', styles: ['海灘', '民族'], genders: ['feminine', 'masculine'], seasons: ['summer'], occasions: ['outdoor', 'travel'] },
        { name: '和風花卉紋樣', part: 'detail', styles: ['和風', '中華風', '民族'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['festival', 'formal'] },
        { name: '簡約縫線', part: 'detail', styles: ['日常', '休閒'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['casual', 'work'] },
        { name: '荷葉邊下擺', part: 'detail', styles: ['甜美', '洛麗塔', '古典'], genders: ['feminine'], seasons: ['spring', 'summer'], occasions: ['date', 'party'] },
        { name: '緞帶綁結', part: 'detail', styles: ['甜美', '洛麗塔', '宮廷'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['date', 'party', 'formal'] },
        { name: '雙層蕾絲裙襬', part: 'detail', styles: ['洛麗塔', '哥德', '古典'], genders: ['feminine'], seasons: ['spring', 'autumn'], occasions: ['party', 'formal'] },
        { name: '珍珠滾邊', part: 'detail', styles: ['宮廷', '古典', '婚紗'], genders: ['feminine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['formal', 'party'] },
        { name: '金線刺繡', part: 'detail', styles: ['宮廷', '中華風', '古典'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'festival'] },
        { name: '流蘇肩飾', part: 'detail', styles: ['民族', '海盜', '舞台'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['party', 'stage', 'festival'] },
        { name: '鉚釘裝飾', part: 'detail', styles: ['龐克', '哥德', '甜酷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },
        { name: '金屬鏈條裝飾', part: 'detail', styles: ['龐克', '賽博龐克', '甜酷'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },
        { name: '齒輪裝飾', part: 'detail', styles: ['蒸氣龐克', '復古', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['party', 'work'] },
        { name: '電子發光紋路', part: 'detail', styles: ['科幻', '賽博龐克', '未來科技'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '全息投影圖樣', part: 'detail', styles: ['科幻', '未來科技', '賽博龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['stage', 'party'] },
        { name: '迷彩拼接', part: 'detail', styles: ['軍裝', '戰術', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['outdoor', 'travel'] },
        { name: '金屬護甲紋路', part: 'detail', styles: ['騎士', '重裝', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['outdoor'] },
        { name: '皮革壓紋', part: 'detail', styles: ['騎士', '西部', '冒險'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['travel', 'outdoor'] },
        { name: '繩結裝飾', part: 'detail', styles: ['海盜', '冒險', '民族'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['travel', 'outdoor'] },
        { name: '星月刺繡', part: 'detail', styles: ['魔法師', '巫師', '神秘學', '奇幻'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['festival', 'formal'] },
        { name: '羽翼圖樣', part: 'detail', styles: ['奇幻', '神秘學', '舞台'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn', 'winter'], occasions: ['party', 'stage'] },
        { name: '十字紋樣', part: 'detail', styles: ['哥德', '修道', '神秘學'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn', 'winter'], occasions: ['formal', 'party'] },
        { name: '反摺袖口', part: 'detail', styles: ['日常', '都會', '工作服'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer', 'autumn'], occasions: ['work', 'casual'] },
        { name: '肩部鏤空設計', part: 'detail', styles: ['甜酷', '舞台', '都會'], genders: ['feminine', 'masculine'], seasons: ['spring', 'summer'], occasions: ['party', 'stage'] },
        { name: '雙排扣設計', part: 'detail', styles: ['軍裝', '正式', '古典'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['work', 'formal'] },
        { name: '毛絨滾邊', part: 'detail', styles: ['森系', '洛麗塔', '古典'], genders: ['feminine', 'masculine'], seasons: ['autumn', 'winter'], occasions: ['casual', 'party'] },
        { name: '綁帶交叉設計', part: 'detail', styles: ['哥德', '甜酷', '龐克'], genders: ['feminine', 'masculine'], seasons: ['spring', 'autumn'], occasions: ['party', 'stage'] }
    ]
};
