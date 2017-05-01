
var Drugs = db.collection('drugsdata')

var addDrugs = async(req, res) => {
    var drugs = req.body['drugs']
    console.log(drugs.title)
    var data = {}
    var sametitile = await Drugs.find({title:drugs.title}).toArray()
    console.log(sametitile[0])
    if(sametitile[0]==undefined){
        data.title = drugs.title
        data.content = drugs.content
        data.date = drugs.date
        data.author = drugs.author
        try{
            await Drugs.insert(data)
            console.log(data)
        } catch(err) {
            return res.json({ success: false, error: 'addDrugs fail'+err})
        }
    }else{
        console.log("titlename is repeat")
    }
}

var getDrugsList = async(req, res) => {
    let data = {}
    try{
        var drugslist = await Drugs.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getDrugsList fail'+err})
    }
    data = {}
    data.list = drugslist
    return res.json({data: data})
}

var delDrugs = async(req, res) => {
    var drugs = req.body['drugs']
    console.log(drugs)
    var data = {}
    try{
        await Drugs.remove({title:drugs.title})
        var drugslist = await Drugs.find({}).toArray()
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = drugslist
    return res.json({data: data})
}

var editDrugs = async(req, res) => {
    console.log("now you editDrugs")
    var drugs = req.body['drugs']
    console.log(drugs)
    var data = {}
    try{
        await Drugs.update({title:drugs.title}, {$set:{content:drugs.content}})
        var drugslist = await Drugs.find({}).toArray()
    }catch(err) {
        return res.json({success: false, error: 'edit fail' + err})
    }
    data = {}
    data.list = drugslist
    return res.json({data: data})
}

module.exports = {
	addDrugs,
    getDrugsList,
    delDrugs,
    editDrugs
}