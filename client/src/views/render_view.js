const PubSub = require('../helpers/pub_sub.js');

const RenderView = function(container){
  this.container = container;

}

RenderView.prototype.createElement = function (element,content,container,addClass="") {

  const newItem = document.createElement(element);
  newItem.textContent = content;

  if(addClass != ""){
    newItem.classList.add(addClass);
  }
  container.appendChild(newItem);
};

RenderView.prototype.createSlider = function (completed,container) {
  const itemSliderLabel = document.createElement('label');
  itemSliderLabel.classList.add('switch');

  const itemSliderInput = document.createElement('input');
  itemSliderInput.setAttribute('type','checkbox');
  itemSliderInput.checked = completed;

  const itemSliderSpan = document.createElement('span');
  itemSliderSpan.classList.add("slider","round");

  container.appendChild(itemSliderLabel);
  itemSliderLabel.appendChild(itemSliderInput);
  itemSliderLabel.appendChild(itemSliderSpan);

  itemSliderInput.addEventListener('change',(evt) =>{
    PubSub.publish('RenderView:slider-changed',evt.target.checked);
  })

};

RenderView.prototype.render = function (object) {
  const itemDiv = document.createElement('div');
  this.container.appendChild(itemDiv);
  itemDiv.classList.add('blItem');

  this.createElement('h2',object.name,itemDiv);
  this.createElement('h4',`Completed: ${object.completed}`,itemDiv,"completed");

  this.createSlider(object.completed,itemDiv);

  const itemButton = this.createButton(object._id,itemDiv);
};

RenderView.prototype.createButton = function (id,container) {
  const itemButton = document.createElement('button');
  itemButton.textContent = "Delete";
  itemButton.classList.add('delete-button');
  itemButton.value = id;
  container.appendChild(itemButton);

  itemButton.addEventListener('click',(evt) => {
    PubSub.publish('RenderView:delete-button-clicked',evt.target.value);
    })
  return itemButton;
};

module.exports = RenderView;
