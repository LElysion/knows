var Todos = db.collection('todos'); 
var Users = db.collection('userdata')


var delUser = async(req, res) => { //删除用户
    var user = req.body['user']
    console.log(user)
    var data = {}
    try{
        await Users.remove({username:user.username})
        var userlist = await Users.find({}).toArray()
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = userlist
    return res.json({data: data})
}

var delAdmin = async(req, res) => { //删除管理员
    var user = req.body['user']
    console.log(user)
    var data = {}
    try{
        await Users.remove({username:user.username})
        var adminlist = await Users.find({power:"3"}).toArray()
        console.log(adminlist)
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = adminlist
    return res.json({data: data})
}

var addText = async(req, res) => {
    var text = req.body['text']
    var data = {} 
    if (text) {
        data.text = text
        try {
            await Todos.insert(data)
        } catch(err) {
            return res.json({ success: false, error: '添加失败' + err })
        }
    }

    try {
        var todos = await Todos.find({}).toArray()
    } catch(err) {
        return res.json({ success: false, error: err })
    }
    data = {}
    data.list = todos
    return res.json({ success: true, data: data })
}

var getUserList = async(req, res) => {
    let data = {}
    //var userdata = await Users.find().toArray()
    //console.log(userdata)
    try{
        var userlist = await Users.find({power:"1"}).toArray()
    }catch(err){
        return res.json({error: 'getUserList fail' + err})
    }
    data = {}
    data.list = userlist
    return res.json({data: data})
}

var getAdminList = async(req, res) => {
    let data = {}
    //var userdata = await Users.find().toArray()
    //console.log(userdata)
    try{
        var adminlist = await Users.find({power:"3"}).toArray()
    }catch(err){
        return res.json({error: 'getAdminList fail' + err})
    }
    data = {}
    data.list = adminlist
    return res.json({data: data})
}

var addUser = async(req, res) => { /*注册*/
    var user = req.body['user']
    console.log(user.username)
    var data = {}
    var samename = await Users.find({username:user.username}).toArray()
    console.log(samename[0])
    if(samename[0]==undefined){
        data.username = user.username  
        data.password = user.password
        data.power = user.power
        data.email = user.email
        data.mobile = user.mobile
        data.gender = user.gender
        data.realname = user.realname
        data.idcard = user.idcard
        try{
            await Users.insert(data)
            console.log(data)
        } catch(err) {
            return res.json({ success: false, error: 'addUser fail'+err})
        }
    }else{
        console.log("username is repeat")
    }
    // try {
    //     var users = await Users.find({}).toArray()
    // } catch(err) {
    //     return res.json({ success: false, error: err})
    // }
    // data = {}
    // data.list = users
    // return res.json({ success: true, data: data})
    //console.log(data)
}



var loginUser = async(req, res) => {
    var usered = req.body['user']
    console.log(usered.username)
    var data = {}
    var userdata = await Users.find({username:usered.username}).toArray()
    console.log(userdata[0].username)
    try
    {
        if(userdata[0]!=undefined){
            if(usered.password == userdata[0].password){
                var user = userdata[0]
                console.log("you in home")
                //console.log(user)
                return res.json({login:true,user})
            }else{
                console.log("Oh no")
                return res.json({login:false})
            }
        }
    }catch(err){
        return res.json({error: 'loginUser fail' + err})
    }
}


module.exports = {
    addText,
    addUser,
    loginUser,
    getUserList,
    delUser,
    getAdminList,
    delAdmin
}