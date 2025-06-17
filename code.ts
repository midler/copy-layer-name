// This plugin provides tools to easily copy layer names in Figma
// It monitors selection changes and sends layer names to the UI

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// Show the HTML page in "ui.html" with responsive sizing
figma.showUI(__html__, {
  width: 360,
  height: 160,
  themeColors: true
});

// Window size configuration
const UI_SIZES = {
  collapsed: { width: 360, height: 160 },
  expanded: { width: 360, height: 380 }
};

// Maximum number of layer names to show when multiple layers are selected
const MAX_LAYER_NAMES = 5;

// This monitors the selection changes and posts the selection to the UI
function updateSelection() {
  let selectedLayers = figma.currentPage.selection;

  if (selectedLayers.length > 0) {
    if (selectedLayers.length === 1) {
      // Send the name and type of the single selected layer
      const layer = selectedLayers[0];
      const layerName = layer.name;
      const layerType = layer.type; // e.g., FRAME, TEXT, RECTANGLE, etc.

      figma.ui.postMessage({
        type: 'update-text',
        text: layerName,
        layerInfo: {
          type: layerType,
          id: layer.id
        }
      });
    } else {
      // Handle multiple selections with proper limiting and formatting
      const totalCount = selectedLayers.length;
      const layersToShow = selectedLayers.slice(0, MAX_LAYER_NAMES);
      const layerNames = layersToShow.map(layer => layer.name);

      let displayText = '';

      if (totalCount <= MAX_LAYER_NAMES) {
        displayText = layerNames.join(', ');
      } else {
        // Show first few layers and indicate there are more
        displayText = `${layerNames.join(', ')} and ${totalCount - MAX_LAYER_NAMES} more`;
      }

      figma.ui.postMessage({
        type: 'update-text',
        text: displayText,
        layerInfo: {
          count: totalCount
        }
      });
    }
  } else {
    // Send a default message if no layer is selected
    figma.ui.postMessage({
      type: 'update-text',
      text: 'No layer selected'
    });
  }
}

// Listen for messages from the UI
figma.ui.onmessage = message => {
  switch (message.type) {
    case 'clear-selection':
      // Clear the current selection when requested
      figma.currentPage.selection = [];
      break;

    case 'resize-window':
      // Resize the plugin window based on history panel state
      const size = message.expanded ? UI_SIZES.expanded : UI_SIZES.collapsed;
      figma.ui.resize(size.width, size.height);
      break;
  }
};

// Initial update when the plugin is opened
updateSelection();

// Listen for selection changes and update the UI
figma.on('selectionchange', updateSelection);
