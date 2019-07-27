import axios from 'axios';
export default (editor, config = {}) => {
    const c = config;
    if(c.panelManager){
        // save command actions
        const actions = {
            run(editor){
                let html = '<style> '+ editor.getCss() +' </style> ' + editor.getHtml();
                let name = 'test';
                let data = new FormData;
                data.append('name', name);
                data.append('html',html);
                axios.post('http://localhost/grapesjs-blocks-bootstrap4/api/pages/create.php',data)
                .then((response) => {
                    console.log(response);
                })
            }
        }
        const panels = editor.Panels;
        const commands = editor.Commands;
        const panelCommands = panels.getPanel('options');
        const panelBtns = panelCommands.get('buttons');     
        // add button to options panel
        panelBtns.add([{
            id:'save-button',
            className: 'fa fa-save',
            command: 'save-command',
            attributes: {title: 'Save Page to DB'},
        }]);
        // add command and bind to actions
        commands.add('save-command',actions);
    }
}