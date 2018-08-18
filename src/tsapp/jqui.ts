import $ from 'jquery'
import { Modal } from './ui/modal'

var input = $('<input></input>')
var button = $('<button>Click me</button>')
$(document.body).append(input)
$(document.body).append(button)

button.on('click', showDialog)

function showDialog() {

    var dContent = $(
        `<div>
<label for="form-select">Choose a form:</label>
    <select id="form-select">
    <option value="">--</option>
    <option value="rectangle">rectangle</option>
    <option value="circle">circle</option>
    </select>
    <div id="opts">
        <div id="rectangle" style="display: none">
            <label>width:</label><input id="width"/>
            <label>height:</label><input id="height"/>
        </div>
        <div id="circle" style="display: none">
            <label>radius:</label><input id="radius"/>
        </div>
    </div>
</div>`
    )

    dContent.find('#form-select').on('change', e=>{
        var form = $(e.target).val()
        if(form){
            dContent.find('#opts').children('#'+form).show()
            dContent.find('#opts').children().not('#'+form).hide()
        }
        else{
            dContent.find('#opts').children().hide()
        }
    });


    var response = Modal.create('Form selection', dContent, ['OK']).open()

    response.then(() => {
        var choice = dContent.find('#form-select').val()
        result(choice);
    });
}

function result(resultString) {
    $(document.body).append(`<h3>Result ${resultString}</h3>`)
}

