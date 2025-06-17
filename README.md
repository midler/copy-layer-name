# Copy Layer Name

This is a Figma plugin designed to help you quickly copy layer names directly. It becomes particularly useful when you need to quickly copy the name of selected layers in Figma's development mode, a functionality currently missing in Figma's native interface.

## Features

- **Single Layer Copy**: Easily copy the name of a single selected layer with one click
- **Multiple Layer Support**: When multiple layers are selected, the plugin displays all names and allows copying them as a comma-separated list
- **History Feature**: Access and reuse previously copied layer names without having to reselect layers
- **Clear Selection**: Clear your current selection directly from the plugin interface
- **Visual Feedback**: The plugin provides clear visual feedback when names are copied
- **Theme-aware UI**: The plugin UI adjusts to Figma's light/dark mode settings
- **Responsive Design**: The plugin interface adapts to different screen sizes

## Usage

1. Install the plugin
2. Select the layer(s) whose name(s) you want to copy
3. Run the plugin
4. Click the "Copy" button to copy the layer name(s) to your clipboard
5. Use the "Clear" button to clear your current selection
6. Click the "History" dropdown to view and reuse previously copied layer names

### Using the History Feature

The history feature allows you to:
- View up to 10 most recently copied layer names
- Click on any history item to make it the current selection
- Copy directly from the history without affecting your current Figma selection
- History persists between plugin sessions and Figma restarts

## Local Installation

To install this plugin locally, follow these steps:

1. Download or clone this repository to your machine
2. In Figma, open the file you want to use the plugin in
3. Go to `Plugins` -> `Development` -> `New Plugin...`
4. Click on `Click to choose a manifest.json file`
5. Navigate to the folder where you downloaded or cloned this repository, and select the `manifest.json` file

Now, the plugin should be available for use in your Figma file under `Plugins` -> `Development`.

## Development

This plugin is built with:
- TypeScript for type-safe code
- Vite for fast building and bundling
- Figma Plugin API for interacting with Figma's interface
- LocalStorage for persisting history data

### Getting Started with Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run watch`
4. Make your changes to the code
5. Build the final version with `npm run build`

## Contributing

This plugin is open-source and we welcome contributions. If you want to contribute, please follow these steps:

1. Fork the repository
2. Clone it to your local machine
3. Make your changes and test them in Figma
4. Push your changes to your forked repository
5. Create a pull request

If you encounter any issues or have suggestions for improvements, please open an issue in the GitHub repository.

## License

This plugin is distributed under the MIT License. See the LICENSE file for more information.
