
var HealthKnowledge = db.collection('healthknowledgedata')

var addHealthKnowledge = async(req, res) => {
    var healthknowledge = req.body['healthknowledge']
    console.log(healthknowledge.title)
    var data = {}
    var sametitile = await HealthKnowledge.find({title:healthknowledge.title}).toArray()
    console.log(sametitile[0])
    if(sametitile[0]==undefined){
        data.title = healthknowledge.title
        data.content = healthknowledge.content
        data.date = healthknowledge.date
        data.author = healthknowledge.author
        try{
            await HealthKnowledge.insert(data)
            console.log(data)
        } catch(err) {
            return res.json({ success: false, error: 'addhealthknowledge fail'+err})
        }
    }else{
        console.log("titlename is repeat")
    }
}

var getHealthKnowledgeList = async(req, res) => {
    let data = {}
    try{
        var healthknowledgelist = await HealthKnowledge.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getHealthKnowledgeList fail'+err})
    }
    data = {}
    data.list = healthknowledgelist
    return res.json({data: data})
}

var delHealthKnowledge = async(req, res) => {
    var healthknowledge = req.body['healthknowledge']
    console.log(healthknowledge)
    var data = {}
    try{
        await HealthKnowledge.remove({title:healthknowledge.title})
        var healthknowledgelist = await HealthKnowledge.find({}).toArray()
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = healthknowledgelist
    return res.json({data: data})
}

module.exports = {
	addHealthKnowledge,
    getHealthKnowledgeList,
    delHealthKnowledge
}