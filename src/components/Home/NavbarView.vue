<template>
  <body>
    <div class="topnav">
      <img src="../../assets/png_logo.png" />
      <a class="active" href="#">Home</a>
      <a href="#shoes">Shoes</a>
      <a href="#backpacks">Backpacks</a>
      <a href="#cart">Cart</a>
      <a href="#about">About</a>
    </div>

    <!-- <div style="padding-left: 16px">
      <h2>Top Navigation Example</h2>
      <p>Some content..</p>
    </div> -->
  </body>
</template>

<script></script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

img {
  margin-left: 10px;
  margin-right: 20px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
  height: 6.5rem;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
}

/* Style the links inside the navigation bar */
.topnav a {
  border-radius: 5px;
  margin: 25px;
  align-items: center;
  float: left;
  color: #c2c2c2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
}

/* Change the color of links on hover */
/* .topnav a:hover {
  background-color: rgb(219, 219, 219);
  color: black;
} */

/* Add a color to the active/current link */
.topnav a.active {
  /* background-color: #04aa6d; */
  color: rgb(255, 255, 255);
}
</style>
