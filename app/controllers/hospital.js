
var Hospital = db.collection('hospitaldata')

var addHospital = async(req, res) => {
    var hospital = req.body['hospital']
    console.log(hospital.title)
    var data = {}
    var sametitile = await Hospital.find({title:hospital.title}).toArray()
    console.log(sametitile[0])
    if(sametitile[0]==undefined){
        data.title = hospital.title
        data.content = hospital.content
        data.date = hospital.date
        data.author = hospital.author
        try{
            await Hospital.insert(data)
            console.log(data)
        } catch(err) {
            return res.json({ success: false, error: 'addhospital fail'+err})
        }
    }else{
        console.log("titlename is repeat")
    }
}

var getHospitalList = async(req, res) => {
    let data = {}
    try{
        var hospitallist = await Hospital.find({}).toArray()
    }catch(err) {
        return res.json({error: 'gethospitalList fail'+err})
    }
    data = {}
    data.list = hospitallist
    return res.json({data: data})
}

var delHospital = async(req, res) => {
    var hospital = req.body['hospital']
    console.log(hospital)
    var data = {}
    try{
        await Hospital.remove({title:hospital.title})
        var hospitallist = await Hospital.find({}).toArray()
    }catch(err){
        return res.json({success: false, error: 'delete fail' + err})
    }
    data = {}
    data.list = hospitallist
    return res.json({data: data})
}

module.exports = {
	addHospital,
    getHospitalList,
    delHospital
}