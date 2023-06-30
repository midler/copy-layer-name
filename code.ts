// This plugin will open a tab that indicates that it will monitor the current
// selection on the page. It cannot change the document itself.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".

// This monitors the selection changes and posts the selection to the UI
figma.showUI(__html__, { width: 200, height: 100 });

function updateSelection() {
    let selectedLayers = figma.currentPage.selection;
    if (selectedLayers.length > 0) {
        figma.ui.postMessage({ type: 'copy-to-clipboard', text: selectedLayers[0].name });
    } else {
        figma.ui.postMessage({ type: 'copy-to-clipboard', text: 'No layer selected' });
    }
}

updateSelection();
figma.on('selectionchange', updateSelection);
