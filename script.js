tinymce.init({
      selector: '#myTinymceTextarea',
            autoresize_on_init: false,
            plugins : 'math advlist table autolink directionality textcolor\
            autoresize emoticons print  link bbcode fullscreen lists\
            charmap help media searchreplace code wordcount image tabfocus paste',
            suffix: '.min',
            hidden_input: false,
            min_height: 350,
            max_height: 350,
            language: 'en',
            toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | forecolor backcolor |  numlist bullist | outdent indent | charmap emoticons | image media link | print fullscreen | math | ',
            toolbar_mode: 'wrap',
            help_tabs: ['shortcuts'],
            paste_as_text: true,
            menu: {
                file: { title: 'File', items: 'newdocument | print ' },
                edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                view: { title: 'View', items: 'fullscreen' },
                insert: { title: 'Insert', items: 'image link media inserttable | charmap emoticons ' },
                format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | blockformats align | forecolor backcolor ' },
                tools: { title: 'Tools', items: 'wordcount' },
                table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
                help: { title: 'Help', items: 'help' }
            },
            external_plugins: {
      
            }
    }).then(function(editors) {
  
    });
   