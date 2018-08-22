import $ from 'jquery'
import { Modal } from './ui/modal'
import fshtml from '../templates/form-selection.html'

var input = $('<input></input>')
var button = $('<button>Click me</button>')
$(document.body).append(input)
$(document.body).append(button)

button.on('click', showDialog)

function showDialog() {

    var dContent = $(fshtml)

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

