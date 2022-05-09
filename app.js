const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (let item of empty) {
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", dragDrop);
}

// is fired when the user starts dragging an element or text selection.
function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "";
  }, 0);
}

// is fired when a drag operation is being ended
function dragEnd() {
  this.className = "fill";
}

// is fired when a dragged element or text selection enters a valid drop target.
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

// is fired when an element or text selection is being dragged over a valid drop target in every few hundred milliseconds
function dragOver(e) {
  e.preventDefault();
}

// is fired when a dragged element or text selection leaves a valid drop target.
function dragLeave() {
  this.className = "empty";
}

// is fired when an element or text selection is dropped on a valid drop target.
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}

/**
 * Valid drop target:

   Almost all elements support the drop target events (dragenter, dragover, dragleave, and drop). However, they don’t allow dropping by default.

   If you drop an element over a drop target that doesn’t allow to drop, the drop event won’t fire.

   To turn an element into a valid drop target, you can override the default behavior of both dragenter and dragover events by calling the event.preventDefault() method in their corresponding event handlers.

 */
