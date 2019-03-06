const PubSub = require('../helpers/pub_sub.js');
const RenderView = require('./render_view.js')
const FormView = require('./form_view.js');

const ParentView = function(container){
  this.container = container;

}

ParentView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketListModel:All-data-ready', (evt)=>{
    this.render(evt.detail);
  });

  formView = new FormView();
  formView.bindEvents();
};

ParentView.prototype.render = function (data) {
  this.container.innerHTML = '';
  renderView = new RenderView(this.container);

  data.forEach((item) => {
    renderView.render(item);
  })
};


module.exports = ParentView;
