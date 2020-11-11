

/*
Template for a single time block

<div class="row rounded m-1">
    <div class="col-2 bg-primary rounded-left text-white text-center d-flex flex-column justify-content-center">
        12:00am
    </div>

    <div class="col bg-info d-flex flex-column justify-content-center">
        <input class="bg-transparent border-0 text-white" type="text" placeholder="Add a task here....">
    </div>

    <div class="col-1 bg-warning text-center d-flex flex-column justify-content-center rounded-right text-white">
        <h2><i class="fa fa-save"></i> </h2>
    </div>
</div>
*/

/**
 * @param {string} hourStr leading hour string
 * @param {string?} taskStr existing task
 * @returns {jQuery.fn.init|jQuery|HTMLElement} the time block element
 */
function createTimeBlock(hourStr, taskStr) {
    let $timeBlock = $('<div class="row rounded m-1"></div>');
    $timeBlock.append($(`<div class="col-2 bg-primary rounded-left text-white text-center d-flex flex-column justify-content-center">
        ${hourStr}
    </div>`));
    $timeBlock.append($(`<div class="col bg-info d-flex flex-column justify-content-center">
        <input class="bg-transparent border-0 text-white" type="text" ${taskStr?'value="'+taskStr+'"':'placeholder="Add a task here..."'}>
    </div>`));
    $timeBlock.append($(`<div class="col-1 bg-warning text-center d-flex flex-column justify-content-center rounded-right text-white saveBtn">
        <h2><i class="fa fa-save"></i> </h2>
    </div>`));

    return $timeBlock;
}

//existing elements:
let $container = $('.container');
let $currentDay = $('#currentDay');

//set current date
$currentDay.text(moment(Date.now()).format('LL'));

//loop though the hours
for(let i=0; i<24; i++) {
    //define time string
    let timeStr = (i>9?i:'0'+i)+":00";

    //create time block
    let $timeBlock = createTimeBlock(timeStr, localStorage.getItem(timeStr));
    $container.append($timeBlock);
}

//when save button is clicked
$('.saveBtn').click(function() {
    //get the values associated with the save button
    let hourStr = $(this).siblings()[0].textContent.trim();
    let taskStr = $(this).siblings()[1].children[0].value;

    //save entered values
    if(taskStr) {
        localStorage.setItem(hourStr, taskStr);
    } else {
        //clear save if nothing is entered.
        localStorage.removeItem(hourStr);
    }
});
