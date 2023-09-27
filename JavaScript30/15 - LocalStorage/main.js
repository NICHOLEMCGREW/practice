const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const btnClear = document.querySelector('button');
  const inputs = document.querySelectorAll('input');

  btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
  })
 
  
  function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]')).value;
      const item = {
          text,
          done: false
        };


    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function populateList(plates = [], platesList) {
   platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" 
        ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
    console.log(plates)
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList)

  }

  
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('submit', toggleDone);

//   btnClear.addEventListener('click', () => {
//     inputs.forEach(input => input.value = '')
//   })

  populateList(items, itemsList)