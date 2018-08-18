import $ from 'jquery'
import 'jqueryui'

export class Modal {
    dialog: JQuery;

    constructor(private title: string, private content: JQuery, private buttons: string[]) {
    }

    open() {

        var pressedButtonText;

        var dButtons = this.buttons.map(b => ({
            text: b,
            click: function (e) {
                pressedButtonText = b;
                $(this).dialog('close')
            }
        })) as JQueryUI.DialogButtonOptions[];

        var dialog = $(this.content).dialog({
            title: this.title,
            modal: true,
            buttons: dButtons
        });

        this.dialog = dialog
        var d = $.Deferred()
        dialog.on('dialogclose', function (event) {
            if (pressedButtonText) {
                d.resolve(pressedButtonText)
            } else {
                d.reject()
            }
        })
        return d.promise()
    }

    close() {
        this.dialog.dialog('close')
    }

    static create(title: string, content: JQuery, buttons: string[]) {
        return new Modal(title, content, buttons)
    }
}