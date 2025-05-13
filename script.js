// Change the text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function () {
    const text = document.getElementById('dynamic-text');
    text.textContent = 'The text has been changed by JavaScript!';
  });
  
  // Modify CSS styles dynamically
  document.getElementById('toggle-box-btn').addEventListener('click', function () {
    const box = document.getElementById('color-box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  });
  
  // Add or remove an element on button click
  document.getElementById('add-element-btn').addEventListener('click', function () {
    const container = document.getElementById('container');
    const existing = document.getElementById('dynamic-element');
  
    if (existing) {
      // Remove the element if it exists
      container.removeChild(existing);
    } else {
      // Create and add a new element
      const newElement = document.createElement('p');
      newElement.id = 'dynamic-element';
      newElement.textContent = 'This element was added dynamically.';
      container.appendChild(newElement);
    }
  });
  