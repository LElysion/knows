var Physical = db.collection('physicaldata')

var addPhysical = async(req, res, next) => {
	var physicaldata = req.body['physicaldata']
	console.log(physicaldata.username)
	var data = {}
	data.username = physicaldata.username
	data.age = physicaldata.age
	data.gender = physicaldata.gender
	data.height = physicaldata.height
	data.weight = physicaldata.weight
	data.leftSight = physicaldata.leftSight
	data.rightSight = physicaldata.rightSight
	data.highPressure = physicaldata.highPressure
	data.color  = physicaldata.color
	data.liver = physicaldata.liver
	data.teeth = physicaldata.teeth
	data.remark = physicaldata.remark
	data.content = physicaldata.content
	data.docter = physicaldata.docter
	data.date = physicaldata.date
	try {
		await Physical.insert(data)
		console.log(data)
	} catch(err) {
		return res.json({ success: false, error: 'addPhysical fail'+err})
	}

}

var getPhysicalDataList = async(req, res) => {
    let data = {}
    try{
        var physicaldatalist = await Physical.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getPhysicalList fail'+err})
    }
    data = {}
    data.list = physicaldatalist
    return res.json({data: data})
}

module.exports = {
	addPhysical,
	getPhysicalDataList
}