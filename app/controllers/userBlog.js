var UserBlog = db.collection('userblogdata')

var addUserBlog = async(req, res, next) => {
	var userblog = req.body['userblog']
	console.log(userblog.title)
	var data = {}
	data.title = userblog.title
	data.content = userblog.content
	data.author = userblog.author
	data.date = userblog.date
	data.comment = userblog.comment
	data.commenter = userblog.commenter
	try {
		await UserBlog.insert(data)
		console.log(data)
	} catch(err) {
		return res.json({ success: false, error: 'addUserBlog fail'+err})
	}

}

var getUserBlogList = async(req, res) => {
    let data = {}
    try{
        var userbloglist = await UserBlog.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getUserBlogList fail'+err})
    }
    data = {}
    data.list = userbloglist
    return res.json({data: data})
}

var delUserBlogList = async(req, res) => {
	var userblog = req.body['userblog']
	var user = req.body['user']
	console.log(user)
	console.log(userblog)
	var data = {}
	try {
		await UserBlog.remove({title:userblog.title})
		var userbloglist = await UserBlog.find({}).toArray()
	} catch(err) {
		return res.json({success: false, error: 'delete fail ' + err})
	}
	data = {}
	data.list = userbloglist
	return res.json({data: data})

}

module.exports = {
	addUserBlog,
	getUserBlogList,
	delUserBlogList
}