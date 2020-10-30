function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar' || e.target.id == 'fechar'){
                modal.classList.remove('mostrar');
            }
        }); 
    }
    
}

const popUp = document.querySelector('.principal .botoes .botao');
popUp.addEventListener('click', () => iniciaModal('pop-up'))


