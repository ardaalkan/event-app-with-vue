<template>
  <form action="action">
    <div class="container_login">
      <h1>Login</h1>
      <hr />

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
      <hr />

      <router-link :to="{ name: 'Register' }">Register</router-link>
      <button type="submit" class="registerbtn">Login</button>
    </div>

    <!-- <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div> -->
  </form>
</template>

<script></script>

<style>
/* Add padding to containers */
.container_login {
  padding: 16px;
  width: 40%;
  margin: auto;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
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
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
