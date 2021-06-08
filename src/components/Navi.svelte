<script>
	import {link} from 'svelte-spa-router'
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" use:link>App1</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home" use:link>Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dev
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/tasks" use:link>Tasks</a></li>
            <li><a class="dropdown-item" href="/books"use:link>Books</a></li>
          </ul>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="/todos" use:link>Todos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mdats" use:link>mData</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/plans" use:link>Plans</a>
        </li>
      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/about" use:link>About</a>
        </li>          
      </ul>
    </div>
  </div>
</nav>

