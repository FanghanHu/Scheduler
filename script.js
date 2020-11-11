

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
    $timeBlock.append($(`<div class="col-1 bg-warning text-center d-flex flex-column justify-content-center rounded-right text-white">
        <h2><i class="fa fa-save"></i> </h2>
    </div>`));

    return $timeBlock;
}

$('.container').append(createTimeBlock('11;00am'));
$('.container').append(createTimeBlock('12;00am', 'asdasdasd'));