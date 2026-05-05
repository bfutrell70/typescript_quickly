// listing 7.11 - index.ts: the soruce code of our app

/// <reference types="jquery" />
/// <reference types="jqueryui" />

const shapesElement = $('#shapes');
const errorElement = $('#error');
const infoElement = $('#info');

$('#selector').autocomplete

$('#selector').autocomplete({
    source: (
        // request is the search criterion
        request: { term: string}, 
        // resonse is a callback to modify the DOM
        response: ([]) => void) => {
        try {
            // finds the elements with the shapes that match the criterion
            const elements = $(request.term, shapesElement);
            // finds the IDs of shapes that meet the criterion
            const ids = elements.map((_index, dom) => ({label: $(dom).attr('id'), value: request.term})).toArray();
            
            // invokes the callback, passing the autocomplete values
            response(ids);

            infoElement.text(`Found ${elements.length} element(s)`);
            errorElement.text('');
        } catch (e) {
            response([]);
            infoElement.text('');
            errorElement.text('Invalid selector');
            $('*', shapesElement).css({border: 'none'});
        }
    },
    // handles the event fired when the focus moves to one of the IDs
    focus: (_event, ui) => {
        // removes teh borders from the shapes, if any
        $('*', shapesElement).css({border: 'none'});
        // adds a red border to the DOM element with the selected ID
        $(`#${ui.item.label}`, shapesElement).css({border: '5px solid red'});
    }
});


// $('#selector').on('input', (event: JQuery.TriggeredEvent<HTMLInputElement>) => {
//     if (!event.target.value) {
//         // resets all previous selections and
//         $('*', shapesElement).css({border: 'none'});
//         errorElement.text('');
//         infoElement.text('');
//     }
// });

$('#selector').on('input', (event) => {
    const target = event.currentTarget as HTMLInputElement;
    
    if (!target.value) {
        // resets all previous selections and messages
        $('*', shapesElement).css({border: 'none'});
        errorElement.text('');
        infoElement.text('');
    }
});