import fs from 'fs';

// Function to write README file
export const writeToFile = fileContent => {
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: 'README File successfully created!'
        });
    });
};