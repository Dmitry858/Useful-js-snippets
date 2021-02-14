const getSelectedText = function() {
    let text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection) {
        text = document.selection.createRange().text;
    }
    return text;
};

document.querySelector('.content').addEventListener('mouseup', function() {
    let text = getSelectedText().trim();
    if (text != '') {
        alert(text);
    }
});
