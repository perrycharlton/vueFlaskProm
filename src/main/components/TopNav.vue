<template lang="pug">
  header
    h1.logo logo
    input.nav-toggle(type='checkbox' id='nav-toggle')
    nav
      ul
        li
          router-link(to="/" @click.native="selectPage('home')") Home
        template(v-if="currentPage === 'home'")
          li
            router-link(to="/promonitor" @click.native="selectPage('promonitor')") Promonitor 
          li
            router-link(to="/admin" @click.native="selectPage('admin')") Admin            
        li
          router-link(to="/about" @click.native="selectPage('about')") About

    label.nav-toggle-label(for="nav-toggle")
        span
</template>
<script>
export default {
  data: () => {
    return {
      currentPage: "home"
    };
  },
   methods: {
        selectPage(page) { 
            console.log(page)
            this.currentPage = page
        }
    }
};
</script>
<style lang="scss" scoped>

@import '../../scss/custom.scss';
header {
 
    grid-row: 1;
    grid-column: 1;
  background: $header-background;
  text-align: center;
  z-index: 999;
  width: 100%;
}


.nav-toggle {
  display: none;
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1em;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: white;
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}

// .nav-toggle-label span::before,
// .nav-toggle-label span::after {
//   content: "";
//   position: absolute;
// }

// .nav-toggle-label span::before {
//   bottom: 7px;
// }

// .nav-toggle-label span::after {
//   top: 7px;
// }

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: var(--background);
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  margin-bottom: 1em;
  margin-left: 1em;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

nav a:hover {
  color: #000;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    grid-template-columns: 0.5fr auto minmax(600px, 3fr) 1fr;
  }

  .logo {
    grid-column: 2 / 3;
  }

  nav {
    all: unset;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav ul {
    display: flex;
  }

  nav li {
    margin-left: 6em;
    margin-bottom: 0;
  }

  nav a {
    opacity: 1;
    position: relative;
  }

  // nav a::before {
  //   content: "";
  //   display: block;
  //   height: 5px;
  //   background: black;
  //   position: absolute;
  //   top: -0.75em;
  //   left: 0;
  //   right: 0;
  //   transform: scale(0, 1);
  //   transition: transform ease-in-out 250ms;
  // }

  // nav a:hover::before {
  //   transform: scale(1, 1);
  // }
}
</style>