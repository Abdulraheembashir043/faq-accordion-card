const question = document.querySelectorAll(`#question`);

question.forEach(quest => {
  quest.addEventListener('click', (e) => {
    
    const parent = e.target.parentElement;
    parent.classList.toggle('drop');

    question.forEach(lquest => {
      if(lquest !== quest) {
        lquest.classList.remove('drop');
      }
    })
  })
})