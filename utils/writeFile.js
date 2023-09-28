import fs from 'fs';

// Function to write README file
export const writeToFile = fileContent => {
    // Wrapping fs.writeFile operation in a Promise constructor to handle asynchronous file writing process more cleanly.
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
                if (err) {
                    reject(err);
                } else {   
                resolve({
                    ok: true,
                    message: 'README File successfully created!'
                });
            }
        });
    });
};