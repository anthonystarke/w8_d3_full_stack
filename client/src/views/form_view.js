const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

}

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#form');
  form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    const newItemData = this.createBLItem(evt.target)
    PubSub.publish('FormView:submitted-data-sent',newItemData);
    // evt.reset();
  })
};

FormView.prototype.createBLItem = function (evt) {
  return {
    name: evt['item-name'].value,
    timeScale: evt['select-time-scale'].value,
    completed: false
  }
};

module.exports = FormView
