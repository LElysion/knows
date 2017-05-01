
var Notices = db.collection('noticedata')

var addNotice = async(req, res) => {
    var notice = req.body['notice']
    console.log(notice.title)
    var data = {}
    var sametitile = await Notices.find({title:notice.title}).toArray()
    console.log(sametitile[0])
    if(sametitile[0]==undefined){
        data.title = notice.title
        data.content = notice.content
        data.date = notice.date
        data.author = notice.author
        try{
            await Notices.insert(data)
            console.log(data)
        } catch(err) {
            return res.json({ success: false, error: 'addNotice fail'+err})
        }
    }else{
        console.log("titlename is repeat")
    }
}

var getNoticeList = async(req, res) => {
    let data = {}
    try{
        var noticelist = await Notices.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getNoticeList fail'+err})
    }
    data = {}
    data.list = noticelist
    return res.json({data: data})
}

var delNotice = async(req, res) => {
    var notice = req.body['notice']
    console.log(notice)
    var data = {}
    try{
        await Notices.remove({title:notice.title})
        var noticelist = await Notices.find({}).toArray()
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = noticelist
    return res.json({data: data})
}

module.exports = {
	addNotice,
    getNoticeList,
    delNotice
}