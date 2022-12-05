function openCloseDiv(element){

    const faqAnswer = element.nextElementSibling;
    const icon = element.querySelector(':scope > .list-item-button-icon');

    if(faqAnswer.classList.contains('list-item-closed')){
        replaceElementClass(faqAnswer, 'list-item-closed', 'list-item-open');
        replaceElementClass(icon, 'icon-closed', 'icon-open');
    }else{
        replaceElementClass(faqAnswer, 'list-item-open', 'list-item-closed');
        replaceElementClass(icon, 'icon-open', 'icon-closed');
    }    

}

function replaceElementClass(element, oldClass, newClass){
    element.classList.remove(oldClass);
    element.classList.add(newClass);
}
