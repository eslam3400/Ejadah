const firebase = require('firebase-admin');
var serviceAccount = require("../ejadah-a407c-firebase-adminsdk-44oz8-52e748d404.json");
firebase.initializeApp({ credential: firebase.credential.cert(serviceAccount) });

const db = firebase.firestore();

class Model {

  collectionName = null;

  getOne(where = { feild, operator, value }, callback = (docId, docData) => { }) {
    db.collection(this.collectionName).where(where.feild, where.operator, where.value).get()
      .then(data => {
        console.log(data[0])
        if (data[0] == undefined)
          callback(null, null)
        else
          data.forEach((doc) => callback(doc.id, doc.data()))
      })
  }

  getOneByDocId(id, callback = (docData) => { }) {
    db.collection(this.collectionName).doc(id).get()
      .then(data => callback(data.data()));
  }

  getAll(options = { where: { feild, operator, value }, order: { feild, value } }, callback = result => { }) {
    let docsId = [];
    let docsData = [];
    if (options == null) {
      db.collection(this.collectionName).get()
        .then(data => {
          data.forEach(doc => {
            docsId.push(doc.id)
            docsData.push(doc.data())
          });
          let finalData = { docsId, docsData }
          callback(finalData);
        });
    } else if (options.order == null) {
      db.collection(this.collectionName).where(options.where.feild, options.where.operator, options.where.value).get()
        .then(data => {
          data.forEach(doc => {
            docsId.push(doc.id)
            docsData.push(doc.data())
          });
          let finalData = { docsId, docsData }
          callback(finalData);
        });
    } else if (options.where == null) {
      db.collection(this.collectionName)
        .orderBy(options.order.feild, options.order.value)
        .get()
        .then(data => {
          data.forEach(doc => {
            docsId.push(doc.id)
            docsData.push(doc.data())
          });
          let finalData = { docsId, docsData }
          callback(finalData);
        });
    } else {
      db.collection(this.collectionName)
        .where(options.where.feild, options.where.operator, options.where.value)
        .orderBy(options.order.feild, options.order.value)
        .get()
        .then(data => {
          data.forEach(doc => {
            docsId.push(doc.id)
            docsData.push(doc.data())
          });
          let finalData = { docsId, docsData }
          callback(finalData);
        });
    }
  }

  update(id, update = {}, callBack = () => { }) {
    db.collection(this.collectionName).doc(id)
      .update(update)
      .then(callBack())
  }

  delete(id, callBack = () => { }) {
    db.collection(this.collectionName).doc(id)
      .delete()
      .then(callBack())
  }

  add(data, callBack = () => { }) {
    db.collection(this.collectionName).add(data)
      .then(callBack())
  }
}

module.exports = Model;