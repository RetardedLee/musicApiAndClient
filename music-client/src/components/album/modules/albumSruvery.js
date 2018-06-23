import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
 class AlbumSurvery extends React.Component{
    render(){
        let{data}=this.props
        return <div className="survery">
        <div className="pic">
            <img src={`${data.picUrl}?param=200y200`} alt={data.name}/>
        </div>
        <div className="info">
            <span className="type">专辑</span>
            <span className="name">{data.name}</span>
            <div className="play-all"><span className="play"><i className="iconfont icon-bofang1" style={{color:"#fff"}}></i>播放全部</span><span className="add" title="添加到播放列表">+</span></div>
            <div className="count" style={{marginTop:20}}>歌手:<span>{data.artists.map((artist,index)=>{
                return <Link to={`/artist/${artist.id}`} key={artist.id} title={artist.name}>{artist.name}</Link>
            })}</span></div>
            <div className="count">时间:<span>{moment(data.publishTime).format("YYYY-MM-DD")}</span></div>
        </div>
        
</div>
    }
}
export default AlbumSurvery


/* {
    "songs": [{
        "rtUrls": [],
        "ar": [{
            "id": 6452,
            "name": "周杰伦",
            "alia": ["Jay Chou"]
        }],
        "al": {
            "id": 38721188,
            "name": "不爱我就拉倒",
            "picUrl": "http://p3.music.126.net/p_EDHIXFJ8eMzo9IzF7PeQ==/109951163299731696.jpg",
            "pic_str": "109951163299731696",
            "pic": 109951163299731700
        },
        "st": -1,
        "mv": 0,
        "fee": 0,
        "cd": "1",
        "no": 1,
        "djId": 0,
        "ftype": 0,
        "rtype": 0,
        "rurl": null,
        "t": 0,
        "v": 2,
        "a": null,
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5902045,
            "vd": 0
        },
        "crbt": null,
        "rtUrl": null,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9836713,
            "vd": 0
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3934711,
            "vd": 0
        },
        "alia": [],
        "pop": 100,
        "rt": null,
        "mst": 9,
        "cp": 0,
        "cf": "",
        "dt": 245899,
        "pst": 0,
        "name": "不爱我就拉倒",
        "id": 561307346,
        "privilege": {
            "id": 561307346,
            "fee": 0,
            "payed": 0,
            "st": -200,
            "pl": 0,
            "dl": 0,
            "sp": 0,
            "cp": 0,
            "subp": 0,
            "cs": false,
            "maxbr": 320000,
            "fl": 0,
            "toast": false,
            "flag": 0,
            "preSell": false
        }
    }],
    "code": 200,
    "album": {
        "songs": [],
        "paid": false,
        "onSale": false,
        "artists": [{
            "img1v1Id": 18686200114669624,
            "topicPerson": 0,
            "briefDesc": "",
            "picId": 0,
            "trans": "",
            "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            "alias": [],
            "musicSize": 0,
            "albumSize": 0,
            "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
            "name": "周杰伦",
            "id": 6452,
            "img1v1Id_str": "18686200114669622"
        }],
        "briefDesc": "",
        "picId": 109951163299731700,
        "artist": {
            "img1v1Id": 18686200114669624,
            "topicPerson": 0,
            "briefDesc": "",
            "picId": 109951163111196200,
            "trans": "",
            "picUrl": "http://p4.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg",
            "alias": ["Jay Chou"],
            "musicSize": 471,
            "albumSize": 33,
            "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
            "name": "周杰伦",
            "id": 6452,
            "picId_str": "109951163111196186",
            "img1v1Id_str": "18686200114669622"
        },
        "copyrightId": 0,
        "tags": "",
        "status": -1,
        "publishTime": 1526313600000,
        "company": "杰威尔音乐有限公司",
        "blurPicUrl": "http://p3.music.126.net/p_EDHIXFJ8eMzo9IzF7PeQ==/109951163299731696.jpg",
        "picUrl": "http://p4.music.126.net/p_EDHIXFJ8eMzo9IzF7PeQ==/109951163299731696.jpg",
        "alias": [],
        "commentThreadId": "R_AL_3_38721188",
        "companyId": 0,
        "pic": 109951163299731700,
        "description": "2018/5/15\n周杰伦即将突袭数位音源榜\n最新单曲全球数位发行\n[不爱我就拉倒]\n\n如果说「等你下课」是青春记忆的奶茶手摇杯\n「不爱我就拉倒」就是浓烈口感的Espresso\n\n整个世界都是他写歌的地方\n随时、随地、随心、随性\n巡演饭店里、记忆里的校园\n口头禅、电话里的一句吵架对白\n都能成为创作灵感\n\n哥有自己的创作节奏\n灵感来袭就尽情拥抱\n抱歉让你等太久\n\n未上架先轰动！ 乐坛天王周杰伦今年生日推出单曲「等你下课」，一上架就在各大数位排行榜创下佳绩！而他即将于5月15日再推出单曲「不爱我就拉倒」，也是未上架先轰动！他日前在Instagram预告这首歌曲，旋即在粉丝圈掀起高热度，歌迷更创造出不少「不××就拉倒」的造词，演唱会点歌时段更有成群歌迷高喊「不点我就拉倒」，果然成功吸引周天王注意！歌曲还没推出，歌名就成为流行用语，粉丝期待的程度可见一斑！而周杰伦也在马不停蹄的工作行程中完成这首歌的录制、Mix（混音)，更花了两天的时间拍摄MV，再忙也要给歌迷新作品！\n\n在爱情路上跌倒\n安全帽也保护不了头脑\n再厚的外套也抵挡不了爱情寒流来袭\n\n不爱了就拉倒\n只要你幸福就好\n\n以一句话：「不要就拉倒」延伸出一个情节：在寒流来袭的夜，男人骑着机车准备接女友，但是女友反应冷淡、男人还是献殷勤的为她戴好安全帽、骑上车的时候拉着她冰冷的双手放进自己口袋取暖；一路上两人无语，面对不想被套牢的女人，男人也感受到彼此的感情温度已经降至冰点，内心不段挣扎呐喊：「难道别的怀抱比我温暖吗？！」即使如此，还是希望帅气的面对，不爱就拉倒，只要你幸福就好。\n\n整首歌曲以迷离忧郁的钢琴前奏展开这场爱情征途，寒流来袭，眼前是迷雾，是凄冷的雨，还是泪？两人之间的气氛比你冰冷的双手还冷，当一切都变了，再厚的外套口袋也无法让它变暖，安全帽也保护不了逝去的爱情。\n英式摇滚基底的电吉他冲刷出失速的爱情；爱已失控，不爱了就拉倒，不强求，急速重拍不断重击心脏，一路向前，脑中画面却不段闪回过去回忆；间奏一段钢琴与鼓的交织狂飙，表现出内心的混乱思绪、不安、纠结；最后还是帅气的唱出一句「不爱我就拉倒」，展现出最后的一丝自尊与细腻体贴，「只要你幸福就好」。\n\n随时随地都可以创作的周杰伦，某天灵感一触即发，在演唱会结束后跟乐手老师借了一把吉他，又找弹头到他房间一起写歌词，弹头对周董的行动力超敬佩！因为他才唱完40几首歌的个人演唱会，竟然马上又要埋首创作了！周杰伦以一把吉他写出一首走心的旋律，这首歌虽然悲伤，但歌词还是保有周氏幽默，像是「哥练的胸肌，如果你还想靠，好胆你就麦造」值得玩味！周董花了两天的时间执导、拍摄MV，一下以乐团主唱之姿诠释这首英式摇滚的曲风，场景一下又转换到室内弹琴对嘴，灰色调的场景、灰色的钢琴，呼应忧郁的心情，大片落地窗外的滂沱大雨也是心境的写照，搭配周杰伦弹奏的旋律，情感动人不已！\n\n一新粉丝目光！周董复刻学生时代中分头 MV里成忧郁型男\n\n令人眼睛为之一亮的还有周董学生时代的中分头，周杰伦将这个元素复刻进MV里，仿佛90年代的偶像风华再现，随着新歌的推出势必再掀起一股风潮！此外，周董还邀来自己的健身教练浩克演出MV故事里的情伤男孩，浩克骑重机的帅气镜头就是导演周杰伦坐在前方车上卖力执导拍摄的！眼尖粉丝也不难发现部分谈情说爱的画面在Machi Coffee取景，揉合爱情甜蜜与苦涩的这支MV，伴随英式摇滚的曲风宣泄情绪！将是粉丝在KTV里痛快淋漓飙歌的歌曲！",
        "subType": "录音室版",
        "name": "不爱我就拉倒",
        "id": 38721188,
        "type": "EP/Single",
        "size": 1,
        "picId_str": "109951163299731696",
        "info": {
            "commentThread": {
                "id": "R_AL_3_38721188",
                "resourceInfo": {
                    "id": 38721188,
                    "userId": -1,
                    "name": "不爱我就拉倒",
                    "imgUrl": null,
                    "creator": null
                },
                "resourceType": 3,
                "commentCount": 0,
                "likedCount": 0,
                "shareCount": 58,
                "hotCount": 0,
                "latestLikedUsers": null,
                "resourceId": 38721188,
                "resourceOwnerId": -1,
                "resourceTitle": "不爱我就拉倒"
            },
            "latestLikedUsers": null,
            "liked": false,
            "comments": null,
            "resourceType": 3,
            "resourceId": 38721188,
            "shareCount": 58,
            "commentCount": 0,
            "likedCount": 0,
            "threadId": "R_AL_3_38721188"
        }
    }
} */