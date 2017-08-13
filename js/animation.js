
var educationTitles = $('.education-header-item').toArray();
// console.log(educationTitles);

educationTitles.forEach(function(element){
    element.addEventListener('click',function(e){
        var theElement = $(this);
        var parent = theElement.parents('.education-wrapper');
        var childrenLi = parent.children('li').toArray();
        childrenLi.forEach(function(li){
            li.classList.add('collapsed');
        });
        theElement.parent('.education-item').removeClass('collapsed');

    });
});