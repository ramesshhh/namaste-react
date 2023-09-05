        // React.createElement is a core react element -> will take 3 parameters ("h1",{function},)React.createElement() takes three arguments. They are:

// type: the type of the HTML element (h1,p,button).
// props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
// children: anything that need to be displayed on the screen.

        const heading = React.createElement("h1",{},"Hello World using React");

        // Everything that is render will render inside the root
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);

        // This is to upload code to github