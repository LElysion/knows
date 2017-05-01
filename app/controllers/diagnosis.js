var Diagnosis = db.collection('diagnosisdata')

var addDiagnosis = async(req, res, next) => {
	var diagnosisdata = req.body['diagnosisdata']
	console.log(diagnosisdata.username)
	var data = {}
	data.username = diagnosisdata.username
	data.sickcontent = diagnosisdata.sickcontent
	data.drugsneed = diagnosisdata.drugsneed
	data.drugscontent = diagnosisdata.drugscontent
	data.docter = diagnosisdata.docter
	data.date = diagnosisdata.date
	try {
		await Diagnosis.insert(data)
		console.log(data)
	} catch(err) {
		return res.json({ success: false, error: 'addDiagnosis fail'+err})
	}

}

var getDiagnosisDataList = async(req, res) => {
    let data = {}
    try{
        var diagnosisdatalist = await Diagnosis.find({}).toArray()
    }catch(err) {
        return res.json({error: 'getDiagnosisList fail'+err})
    }
    data = {}
    data.list = diagnosisdatalist
    return res.json({data: data})
}

module.exports = {
	addDiagnosis,
	getDiagnosisDataList
}