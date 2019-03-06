const BucketListModel = require('./models/bucket_list_model.js');
const ParentView = require('./views/parent_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const blContainer = document.querySelector('#bl-container');
  const parentView = new ParentView(blContainer);
  parentView.bindEvents();

  const blURL = 'http://localhost:3000/api/bucket-list'
  bucketListModel = new BucketListModel(blURL);
  bucketListModel.bindEvents();
  bucketListModel.getData();

  // const slider = document.querySelector('.inputType');
  // slider.addEventListener('change',() => {
  //   console.log(slider.checked);

  // })


});
