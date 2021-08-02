# Adzooma Code Test - Junior Front-end Developer

This exercise is the final code test of the recruitment process. It will test the following skills:

* React and React Hooks
* HTML, CSS and JavaScript ES6
* Responsive CSS
* NPM and Git Source Control

### The Test

Given a near-completed product, implement the missing feature and meet the functional requirements described below.

#### Football Dream Team App

This code base is for a fantasy dream team picker app. The user selects their football players and team formation of choice.

The formation determines the number of defenders, midfielders and forwards they may pick. For example, selecting the "4-4-2" formation means four defenders, four midfielders and two forwards.

The user's input is stored in their browser's localStorage so the state of the app is maintained as they refresh the browser or return to the app later. As the user progresses they may save their team to the Firebase database and compare their team with those of other users.

#### Your Task

**You must implement the `SlideShow` component used for the purpose of selecting a team formation.**

Everything else beyond the formation selection functionality has been imlpemented and is <u>not</u> an area of focus during this test.

Inside the `/docs` folder you will find `EndResult-Desktop.png` and `EndResult-Mobile.png` which demonstrate how the app should look on both desktop and mobile. Moreover, you will find the video `EndResult-Behaviour.mp4` which demonstrates how the app should behave in relation to selecting a team formation.

The effect that the formation selection has on validating or invalidating the player selection, demonstrated in the above-mentioned video, has been implemented, as has the storing of the user's input in localStorage. But to reproduce this required behaviour, your `SlideShow` implementation must utilise the variables/objects provided when rendering the component from within the `FormationSelector` component. See the `FormationSelector` component for details.

**The files you will be amending are as follows:**

* `FormationSelector` component - Contains access to the user's session data and needs to utilise the common `SlideShow` component to provide the formation selection functionality.
  * `src/components/FormationSelector/FormationSelector.js`
* `SlideShow` component - Common slideshow component in need of implementation. Will receive slide data and user session update function from parent `FormationSelector` component.
  * `src/components/common/SlideShow/SlideShow.js` (React component)
  * `src/components/common/SlideShow/SlideShow.css` (component styles)
* For reference purposes, the slide data imported into the `FormationSelector` component can be inspected here:
  * `src/data/formations.js`

#### Functional Requirements:

To score as highly as possible your solution will need to adhere to the following requirements:

* Render the slideshow as pictured with one slide showing at a time  (formation image + caption).
* Render a button with the label "Change Formation" that changes the slide to the next slide, and then to the first slide again when pressed on the last slide.
* Implement a default button label of "Next Slide" within the `SlideShow` component that is overridden if alternative text is specified by the parent component (`FormationSelector`).
* Render a row of dots to show the number of slides and one marked with a green tick to show the current slide.
* Use markup from the 'Material Icons' library to render the icons for the slideshow dots (library CSS already imported and ready to use).
* Render the `SlideShow` component vertically when viewed on a mobile device as pictured in `docs/EndResult-Mobile.png`.
* Ensure that the following pre-implemented behaviour features in your solution upon each change of team formation (as discussed above):
  - Formation selection remembered upon browser refresh
  - Required number of players as determined by the formation printed and kept up-to-date in the tabs (e.g. "Defenders 0/4")
  - User's player selection is validated or invalidated upon formation change.

#### Setting Up

Feel free to use your favourite code editor as you complete the test.

Having checked out this repository, the very first step of the test is to utilise NPM in your favourite command line app to install the project's dependencies.

Once the dependencies are installed, the `start` command via NPM will start a local development server and load the app within the browser. Any changes to the project's files will trigger an automatic reload without needing to manually refresh the browser.

### Submitting Your Solution / Git Source Control

Create a new branch off `master` called `candidate/[yourname]`, e.g. `candidate/joeblogs`.

Rather than committing once at the end, commit your work at regular intervals as you would in a professional environment.

To submit your finished solution, simply push your branch to the remote and notify Peter Mitchell (Development Manager) peter.m@clicktech.com.

### Need Any Help?

If you get stuck or something is not clear, feel free to reach out to Chris Mendes (Senior Front-end Developer) chris.m@clicktech.com, CC'ing Peter Mitchell (above)

If you run into difficutly, it is much better to ask for a hint than to give up altogether.

### Final Word

Good luck! We look forward to reviewing your solution very shortly.