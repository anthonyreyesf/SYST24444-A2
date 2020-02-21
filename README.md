<h1>Assignment 2 (10%) / jQuery - AJAX - JSON - Media Queries</h1>

<ul>
  <li>Create a mobile web site (Create a new folder to hold all files/folders)</li>
    <ul>
      <li>index.html</li>
      <li>css folder that includes a css file that is named yourUserName.css (ex. doej.css)</li>
      <li>js folder that includes your personal .js script file that is named using yourUserName.js (ex. doej.js) AND a link to jquery.js</li>
      <li>images folder to hold any images needed for exercise</li>
      <li>pages folder to hold the 2nd page of the assignment called from index.html</li>
      <li>data folder to hold the JSON file</li>
    </ul>
    <li>Enter YOUR NAME in the <title> tags AND your name and student number in a comment at the top of the index.html</li>
    <li>Be sure to include the viewport setting in your index.html</li> 
    <hr>   
    <li>Download this JSON file: A2-JSON.zip unzip and save into your data folder</li>
    <li>Download this zip file of images: flowerImages.zip and include all images in your images folder</li>    
    <br>  
    <li>Edit the .json file and include your personal information where indicated</li>
    <li>On load of site (in document.ready):</li>
      <ul>
        <li>Retrieve the .json file using an AJAX call</li>
        <li>Retrieve the .json file using an AJAX callRetrieve your personal information into variables and save to local storage so this information can be used on the second page</li>
        <li>Save the categories from the JSON file into an array</li>
        <li>Create an array of all the flower information (flowerlist in JSON file) using a Class with a Constructor; Save this array in local storage (remember arrays have to be stringified before saving to local storage)</li>
      </ul>
    <hr>
    <li>Header area that includes Assignment #2 / Your Name (from variable that holds data from .json file) / Your Student Number (from variable that holds data from .json file); This header must be on both pages; (Hint: Build entire header using template literal in script)</li>
    <li>Footer line that includes Your Login Name (from variable that holds data from .json file)/ Your Campus (from variable that holds data from .json file); this footer must be on both pages.</li>
    <br>
    <li>Content area on the main page:</li>
    <ul>
      <li>Use the categories array built from the JSON file and create a list of anchor links using each category (anchor links must be formatted to look more like buttons); these links will send the user to the 2nd page; these must be created dynamically in the .js file;</li>
      <li>Use the categories array build from the JSON File and display the images attached to each category; the images must be created dynamically in the .js file;</li>
      <li>Layout and formatting is your choice but all must fit in the mobile view (Landscape only);</li>
      <li>When a selection is clicked, save category chosen to local storage and traverse to the 2nd page</li>
    </ul>
    <hr>
    <li>Content on the individual page (a separate page with a separate .js and .css files) will include the following:</li>
      <ul>
        <li>Retrieve your personal data, the user's choice of category and the array of flower data from local storage</li>
        <li>Create Header and Footer as on main page pulling data from variables retrieved from local storage</li>
        <li>Under the header, display the category chosen as a list header</li>
        <li>Use the category picked and the array of flower data to create a list of all items for the specific category chosen displaying the name, the photo, the price and the instructions;</li>
        <li>Formatting must be used and layout of data is your choice; this page can have scrolling but not excessive (make sure images are mobile size)</li>
        <li>Include a back button somewhere on the page to return to index.html</li>
      </ul>
      <hr>
      <h3>How I will be grading exercise...</h3>
      <li>I will be using Chrome's Toggle Device Bar for Galaxy S5 in Landscape mode only</li>
      <li>Remember, this is a mobile site so formatting and layout should reflect this; too much scrolling or whitespace will reduce your mark.</li>
      <hr>
      <h3>What to submit...</h3>
      <li>ZIP the entire completed exercise folder and submit to the appropriate DropBox in SLATE by the Due Date indicated</li>
      <li>Publish and include the URL to the site</li>
      <li>Remember: You have 3 days past the due date with 10% off per day to submit</li>
      <li>Each assignment must be done individually.</li>
      <li>I will be checking for copying especially if the assignments look similar and will file an academic integrity breach if necessary</li>
      <li>This is not an assignment that should be started the day it is due.</li>
      <li>Since you have 2 weeks to complete the assignment, NO EXTENSIONS to the due date will be given.</li>
</ul>
<hr>
<h3>Grading Rubric...</h3>
<table>
  <tr>
    <td>Header and Footer</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Main page (mobile), layout, formatting, JSON/AJAX, Class with Constructor and local storage</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Individual page setup (mobile), layout formatting, and local storage</td>
    <td>4</td>
  </tr>
</table>
