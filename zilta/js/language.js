const langChange = $('.lang-change');
const dropItem = $('.dropdown-item');

dropItem.each(function() {
    $(this).click(function() {
        langChange.html(dropItem[dropItem.index(this)].innerText);
    });
}); 
