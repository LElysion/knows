var app = require('express').Router(); 
var userController = require('./controllers/users.js');
var noticeController = require('./controllers/notices.js')
var healthknowledgeController = require('./controllers/healthknowledge.js')
var drugsController = require('./controllers/drugs.js')
var physicaldataController = require('./controllers/physicaldata.js')
var diagnosisController = require('./controllers/diagnosis.js')
var userBlogController = require('./controllers/userBlog.js')
var hospitalController = require('./controllers/hospital.js')

/*server端*/
// app.post('/todo', userController.addText)
app.post('/knows/userdata', userController.addUser)
app.post('/knows/noticedata', noticeController.addNotice)
app.post('/knows/healthknowledgedata', healthknowledgeController.addHealthKnowledge)
app.post('/knows/drugsdata', drugsController.addDrugs)
app.post('/knows/editdrugsdata', drugsController.editDrugs)
app.post('/knows/login', userController.loginUser)
app.post('/knows/physicaldata', physicaldataController.addPhysical)
app.post('/knows/diagnosisdata', diagnosisController.addDiagnosis)
app.post('/knows/userblogdata', userBlogController.addUserBlog)
app.post('/knows/hospitaldata', hospitalController.addHospital)

app.get('/knows/userlist', userController.getUserList)
app.get('/knows/noticelist', noticeController.getNoticeList)
app.get('/knows/healthknowledgelist', healthknowledgeController.getHealthKnowledgeList)
app.get('/knows/drugslist', drugsController.getDrugsList)
app.get('/knows/physicaldatalist', physicaldataController.getPhysicalDataList)
app.get('/knows/diagnosisdatalist', diagnosisController.getDiagnosisDataList)
app.get('/knows/userbloglist', userBlogController.getUserBlogList)
app.get('/knows/hospitallist', hospitalController.getHospitalList)

app.delete('/knows/userdata', userController.delUser)
app.delete('/knows/noticedata', noticeController.delNotice)
app.delete('/knows/healthknowledgedata', healthknowledgeController.delHealthKnowledge)
app.delete('/knows/admindata', userController.delAdmin)
app.delete('/knows/drugsdata', drugsController.delDrugs)
app.delete('/knows/userblogdata', userBlogController.delUserBlogList)
app.delete('/knows/hospitaldata', hospitalController.delHospital)

app.get('/knows/adminlist', userController.getAdminList)



module.exports = app;
