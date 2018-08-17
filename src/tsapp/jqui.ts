import $ from 'jquery'
import 'jqueryui'

var dContent=$(`<div>
<h2>Szia Mate</h2>
<input></input>
<button>OK</button>
</div>`)

var d = $(dContent).dialog({autoOpen:false, modal: true})
dContent.find('button').on('click', function(){d.dialog('close'); result(dContent.find('input').val())})

var input = $('<input></input>')
$(document.body).append(input)

var button = $('<button>Click me</button>')
$(document.body).append(button)
button.on('click', function(){
    d.dialog('open')
})

function result(resultString){
    $(document.body).append(`<h3>Result ${resultString}</h3>`)
}

