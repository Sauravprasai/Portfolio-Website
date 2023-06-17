# Portfolio Website

Welcome to my personal portfolio website! This repository contains the source code for my portfolio site, built using the MEAN stack framework. The website is designed to showcase my projects, provide information about me, and offer a contact form for reaching out to me. With a responsive design and customized content, it aims to leave a lasting impression.

## Technologies Used

- **MEAN Stack**: The website leverages the power of the MEAN stack, combining MongoDB, Express.js, Angular, and Node.js. This robust technology stack ensures efficient development and seamless integration between the front-end and back-end components.
- **Bootstrap**: Bootstrap, a popular front-end framework, is utilized to enhance the visual appeal of the website and ensure a responsive layout that adapts well to different screen sizes.
- **Custom CSS**: The `style.css` file contains additional custom styles tailored to create a unique and visually appealing experience.

## Structure

The repository is structured as follows:

- `index.html`: The main HTML file serves as the entry point for the website and establishes the structure of the pages.
- `app.js`: This file contains the server-side code written in Node.js, utilizing the Express.js framework to handle routing and server configuration.
- `routes/`: The `routes/` directory contains the route definitions responsible for handling different endpoints and rendering the appropriate views.
- `controllers/`: Inside the `controllers/` directory, you'll find the controllers that define the logic for each route, ensuring seamless functionality.
- `models/`: The `models/` directory contains the MongoDB schema models used to interact with the database and manage data.
- `public/`: The `public/` directory houses the static files, including CSS and client-side JavaScript files, that are necessary for the proper functioning and styling of the website.
- `views/`: The `views/` directory contains the EJS templates responsible for rendering dynamic content, providing flexibility in displaying the website's various sections.

## Usage

To use this project locally, follow these steps:

1. Clone this repository to your local machine using the command `git clone https://github.com/Sauravprasai/Portfolio-Website`.
2. Ensure you have MongoDB installed and running on your system.
3. Install the project dependencies by running `npm install` in the root directory of the project.
4. Start the server by running `node app.js` or `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to access the website.

## Customization

Feel free to customize this portfolio website to match your preferences and needs. Here are a few areas you can customize:

- **Content**: Update the content of the website to reflect your own projects, skills, and experiences. Modify the text in the EJS templates located in the `views/` directory.
- **Styling**: Customize the visual appearance by modifying the CSS in `public/css/style.css`. Experiment with different colors, fonts, and layout adjustments to create your desired look.
- **Functionality**: Extend the website's functionality by adding new routes, controllers, and views. You can create additional sections, implement new features, or integrate third-party APIs to enhance the user experience.

## Contributions

Contributions to this project are highly appreciated! If you encounter any bugs, have suggestions for improvements, or wish to add new features, please submit a pull request. Let's collaborate and make this portfolio website even better!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or require further assistance, please don't hesitate to reach out. You can contact me through the contact form on my portfolio website or via email at [sauravprasai2016@gmail.com]
