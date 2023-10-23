# ReadMeGenius

## 📂 Table of Contents 
- [Description](#wave-description)
- [User Story](#open_book-user-story)
- [Resources Used](#floppy_disk-resources-used)
- [Usage](#minidisc-usage)
- [Contributors](#paperclip-contributors)
- [Contact Information](#e-mail-contact-information)

## :wave: Description

### 🛠️ Build Your Documentation
In the realm of software development, effective documentation is paramount. Enter ReadMeGenius, your trusted ally in project documentation. As a meticulously designed markdown file generator, ReadMeGenius empowers you to streamline the documentation process with ease. Elevate your project's professionalism and ensure comprehensive documentation with this invaluable tool. Here's an interesting tidbit, the baseline for this README was *generated* by this very project! 

### 🚀 Features
- **Guided README Creation**: Easily create README files by answering guided questions.
- **Customizable Content**: Tailor READMEs by choosing which sections to include.
- **Multiple Inputs**: Add multiple inputs within a single section.
- **Ready-to-Use READMEs**: Generate complete README files for immediate use.
- **Foundation for Customization**: Build upon generated READMEs for further customization.

### 🌐 Open
ReadMeGenius is an open-source project built with the goal of making project documentation easier and more accessible to everyone. My commitment to openness means that this repository is open to the public, inviting exploration and encouraging creativity. Please feel free to delve into the codebase, generate markdown files, fork the project, and customize it to suit your specific needs. 

### 💭 Developer Notes
- ReadMeGenius' Inquirer package has been updated to use version `^9.2.8.`
- Asynchronous operations now utilize Async/Await expressions, moving away from promises.
- Users now have the ability to add multiple inputs within each section.

The creation of ReadMeGenius was an educational journey. Throughout the development process, I used the opportunity to solidify my coding knowledge, building upon the concepts I had previously learned from a different project, PortfolioForge. Simultaneously, I used this experience to introduce new ideas and improve the content of this markdown generator.

For example: 
1. generateMarkdown.js utilizes regex and .replace() to remove extra spacing
  - `data.replace(/^(?:\t| {2,})/gm, '')`
2. Using newly learned syntax to create a new line for each section/subsection
  - `\n`

In the future I'd like to create a more extensive version of ReadMeGenius that allows users to add more to their markdown files. Such as images, bullet points, and so on.

### 🙏 Thank You!
So much for checking out ReadMeGenius, my intention is that it proves helpful to you in creating documentation for your own projects. Furthermore I hope the code base itself is able to help you out however possible. Please feel free to fork this repo, I hope you find ReadMeGenius a helpful addition to your development toolkit and happy coding! 

## :open_book: User Story
- WHEN I am prompted for information about my application repository
  - THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

- WHEN I enter my project title
  - THEN this is displayed as the title of the README

- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  - THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

- WHEN I choose a license for my application from a list of options
  - THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

- WHEN I enter my GitHub username
  - THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

- WHEN I enter my email address
  - THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

- WHEN I click on the links in the Table of Contents
  - THEN I am taken to the corresponding section of the README

## :floppy_disk: Resources Used
- JavaScript
- Node.js
- NPM (Node Package Manager)
- Inquirer (v. ^9.2.8)

## :minidisc: Usage
To get started with ReadMeGenius, follow these steps:
1. **Navigate to the Main Directory**: Open your terminal or command prompt and navigate to the main directory of the ReadMeGenius project.
2. **Run the Application**: Type the following command and press Enter to run the application: `node index`
3. **Answer Guided Questions**: You will guided through a series of questions to help you decide what sections and content you want to include in your README file. These questions cover various aspects of your project documentation.
4. **Provide Section Details**: After answering the initial questions, you'll be prompted to provide specific details for each selected section of your README. Follow the prompts to enter your project's information, such as project title, description, user stories, resources used, and so on.
5. **Console Guidance**: Helpful console messages are displayed throughout the process to assist you and ensure that you provide the necessary information.
6. **Completion Notification**: Once you've finished providing all the required details, you'll receive a notification indicating the successful creation of your README file. In case of any errors or missing information, you'll be notified to address them.

Generating professional-grade README files for your projects becomes a straightforward and guided process with ReadMeGenius. Start using it today to streamline your project documentation efforts!

## :paperclip: Contributors
- jwilferd10

## :e-mail: Contact Information

- GitHub: [jwilferd10](https://github.com/jwilferd10)
  - Email: jwilferd10@yahoo.com
