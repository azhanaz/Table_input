# CSV Processing Website

This simple website reads data from a CSV file named `Table_Input.csv` and displays the information in two tables. The first table (`Table 1`) shows the raw data from the CSV file, while the second table (`Table 2`) performs some calculations based on the data from `Table 1`.

## Usage

1. **Serve the Website:**

    Before running the website, you need to serve it through a local server. You can use the Python SimpleHTTPServer (for Python 2) or http.server (for Python 3). Follow these steps:

    - Open a terminal or command prompt.
    - Navigate to the directory containing your HTML and CSV files using the `cd` command.
    - For Python 2, run:
        ```bash
        python -m SimpleHTTPServer
        ```
    - For Python 3, run:
        ```bash
        python -m http.server
        ```
    - Open your browser and navigate to `http://localhost:8000` or `http://127.0.0.1:8000`.

2. **View the Website:**

    - Once the server is running, open your browser and go to `http://localhost:8000` or `http://127.0.0.1:8000`.
    - The website will automatically load the data from `Table_Input.csv` and display it in the tables.

## Files

- **index.html:** The main HTML file containing the structure of the website.
- **script.js:** The JavaScript file responsible for fetching and processing the CSV data.
- **styles.css:** The CSS file for styling the website.

## Notes

- Ensure that `Table_Input.csv` is in the same directory as your HTML file.
- If you encounter CORS issues, serve the website through a local server as described above.

---
I was unable to make a more advanced version so i would recommend running it on local host instead (I am traveling while doing this)
