const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketListModel = function(url){
  this.url = url;
  this.request = new Request(this.url)

}

BucketListModel.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:submitted-data-sent',(evt) => {
    this.saveItem(evt.detail);
  })

  PubSub.subscribe('RenderView:delete-button-clicked',(evt) => {
    this.deleteItem(evt.detail);
  })
  PubSub.subscribe('RenderView:slider-changed',(evt) => {
    this.updateItem(evt.detail);
  })

};

BucketListModel.prototype.getData = function () {
  this.request.get()
    .then((data) => {
      PubSub.publish('BucketListModel:All-data-ready',data)
    })
};

BucketListModel.prototype.saveItem = function (payload) {
  this.request.post(payload)
    .then((data) => {
      PubSub.publish('BucketListModel:All-data-ready',data)
    })
};

BucketListModel.prototype.deleteItem = function (payload) {
  this.request.delete(payload)
    .then((data) => {
      PubSub.publish('BucketListModel:All-data-ready',data)
    })
};

module.exports = BucketListModel;
