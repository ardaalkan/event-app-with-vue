<template>
  <NavbarView />
  <h1 class="about_text">Contact page</h1>
  <hr />
  <div action="action">
    <div class="container_register">
      <h1>Send Ticket</h1>
      <p>Please fill in this form to create an ticket.</p>
      <hr />
      <label for="email"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" id="name" required />

      <label for="psw"><b>Username</b></label>
      <input type="text" placeholder="Enter Password" name="psw" id="psw" required />

      <label for="psw-repeat"><b>Contact / Description</b></label>
      <input class="textarea-input" type="text" placeholder="Text area" name="psw-repeat" id="psw-repeat" required />
      <hr />

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button class="sendbtn">Submit</button>
    </div>
  </div>
</template>

<script></script>

<style>
.about_text {
  padding: 20px;
  text-align: center;
}
/* Add padding to containers */
.container_register {
  padding: 16px;
  width: 40%;
  margin: auto;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

.textarea-input {
  margin: 30px;
  height: 100px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.sendbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.sendbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.container_signin {
  padding: 10px;
  text-align: center;
}
</style>
