
## What Is This Project?
This is a personal website and portfolio for me, Ethan Pollack, that you can visit now at [epoll31.github.io](https://epoll31.github.io).

I have several pages on here that display the following:
* My Research Projects and Classes Taken at [Worcester Polytechnic Institute](https://wpi.edu)
    * My [Major Qualifying Project](https://epoll31.github.io/mqp): Comparative Study of Relational Databases for CS Courses
        * This research project compares Oracle, MySQL, and Postgres databases in a pedagogical setting at Worcester Polytechnic Institute
    * My [Interactive Qualifying Project](https://epoll31.github.io/iqp): Nitrogen Cycle Public Outreach and Game Development
        * During this research project, I made a simple game using React.JS and AR.JS that enables kids at a local Boy's and Girl's Club to learn and understand more about the Nitrogen Life Cycle.
* My Tutoring Business
    * Allowing students and parents to learn more about me and my experiences
    * If they are interested, there is a form that I implemented using a [Formspree API](https://formspree.io) to send me an email with the information that they filled in, allowing me to reach out with more information and schedule a session.

### Inspiration

[Van Holtz Co.](https://vanholtz.co/)

## Development Notes

### Editing the Project

Use the command `npm run dev` to start the project and navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Notes:
* **Common Error:** Make sure that the `next.config.json` file ***does not*** include `output: 'export'` in the configuration while testing. This may cause issues with running the project.
* The page auto-updates as you edit the files.
* This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Deploying the Project

Any push to the `main` branch on GitHub will trigger a GitHub Action that builds and deploys the project to [epoll31.github.io](https://epoll31.github.io).

Notes:
* **Common Error**: Make sure that the `next.config.json` file ***does*** include `output: 'export'` in the configuration before you push your code to `main`.
  * If your configuration does not include this, the GitHub Action will fail to build and the new edits will not deploy.

