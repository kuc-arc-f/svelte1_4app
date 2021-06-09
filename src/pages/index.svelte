<script>
import {link} from 'svelte-spa-router'
import Config from '../../app_config'
var config = Config.get_config()
export let cfg = config;
//console.log(cfg)
</script>

<style>
  html,
  body,
  body > div:first-child,
  main,
  .body_wrap
  {
    height: 100%;
  }
  body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  } 
  /* Custom default button */
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
  }
  .cover-container {
    max-width: 42em;
  }
  /*
   * Header
   */
  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }
  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }
  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }
  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }
  .main_cover_wrap{ 
    padding: 10rem 3rem;
  }
  </style>
  
  <svelte:head>
    <title>{config.MY_SITE_NAME}</title>
  </svelte:head>
  <!-- -->
  <link href="/css/cover.css?a2" rel="stylesheet" />
  <div class="body_wrap d-flex text-center text-white myblog_bgcolor_main">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0"></h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="/home" use:link>Home</a>
            <a class="nav-link active" href="/about" use:link>About</a>
            <a class="nav-link active" href="/license" use:link>License</a>
          </nav>
        </div>
      </header>
      <!--  px-3 py-3 -->
      <main class="main_cover_wrap">
        <h1>{cfg.MY_SITE_NAME}</h1>
        <p class="lead">{cfg.MY_SITE_INFO}      
        </p>
        <p class="lead">
          <a href="/home" use:link class="btn btn-lg btn-secondary fw-bold border-white bg-white">
          Learn more</a>
        </p>
      </main> 
      <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">
          Bootstrap 5</a></p>
      </footer>        
    
    </div>
  </div>