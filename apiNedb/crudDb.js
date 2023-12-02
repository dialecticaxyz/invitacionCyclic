

function createdDB(dat,col){
  return new Promise((resolve,reject)=>{
    resolve(true)
  })
}
function readAllDB(col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readTimeDB(t,col){/*time mayores*/
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readUserDB(us){/// especifico ususarios
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readTimeTimeDB(dat){///especifico para ventas "fechVent"
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readTimeTimeUserDB(dat){/// especifico ventas "fechVent" "cel"
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readTimeUserDB(dat){/// especifico ventas "fechVent" "cel"
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function readIdDB(id,col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function updateDB(id,dat,col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function deleteDB(id,col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
};
function readIdsDB(col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
function countDB(col){
  return new Promise(function(resolve,reject){
    resolve(true)
  })
}
module.exports = {
  createdDB,
  readAllDB,
  readTimeDB,
  readTimeUserDB,
  readTimeTimeDB,
  readTimeTimeUserDB,
  readIdDB,
  readUserDB,
  updateDB,
  deleteDB,
  readIdsDB,
  countDB
}
