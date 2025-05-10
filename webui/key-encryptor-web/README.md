# Key Encryptor Web Application

This project is a web interface for a key encryptor application originally implemented in Python. It allows users to encode and decode messages using a simple and intuitive interface.

## Project Structure

```
key-encryptor-web
├── public
│   └── index.html        # Main HTML document for the web interface
├── src
│   ├── app.js            # Main JavaScript file for handling user interactions
│   ├── styles.css        # Styles for the web interface
│   └── utils
│       └── encryptor.js  # Utility functions for encoding and decoding
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd key-encryptor-web
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   You can use a local server to serve the `public/index.html` file. For example, you can use `live-server` or any other static server of your choice.

## Usage Guidelines

- Open the application in your web browser.
- Choose whether to encode or decode a message.
- Enter the message and any required parameters (e.g., Caesar key).
- Click the appropriate button to process the message.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.