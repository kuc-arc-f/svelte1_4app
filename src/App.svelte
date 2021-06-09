<script>
import Router from 'svelte-spa-router'
import Navi from './components/Navi.svelte'
import index from './pages/index.svelte'
import home from './pages/home.svelte'
import about from './pages/about.svelte'
import license from './pages/license.svelte'
//
import test from  './pages/test.svelte'
import tasks from './pages/tasks/index.svelte'
import tasks_create from './pages/tasks/create.svelte'
import tasks_show from './pages/tasks/show.svelte'
import tasks_edit from './pages/tasks/edit.svelte'
//todos
import todos from './pages/todos/index.svelte'
import todos_create from './pages/todos/create.svelte'
import todos_show from './pages/todos/show.svelte'
import todos_edit from './pages/todos/edit.svelte'
//books
import books from './pages/books/index.svelte'
import books_create from './pages/books/create.svelte'
import books_show from './pages/books/show.svelte'
import books_edit from './pages/books/edit.svelte'
//mdats
import mdats from './pages/mdats/index.svelte'
import mdats_create from './pages/mdats/create.svelte'
import mdats_chart from './pages/mdats/chart.svelte'
import mdats_show from './pages/mdats/show.svelte'
import mdats_edit from './pages/mdats/edit.svelte'
//plans
import plans from './pages/plans/index.svelte'
import plans_create from './pages/plans/create.svelte'
import plans_show from './pages/plans/show.svelte'
import plans_edit from './pages/plans/edit.svelte'

export const routes = {
  '/': index,
  '/home': home,
  '/about': about,
  '/license': license,
  '/test': test,
  '/tasks/': tasks,
  '/tasks/create': tasks_create,
  '/tasks/show/:id': tasks_show,
  '/tasks/edit/:id': tasks_edit,
  '/todos/': todos,
  '/todos/create': todos_create,
  '/todos/show/:id': todos_show,
  '/todos/edit/:id': todos_edit,  
  '/books/': books,
  '/books/create': books_create,
  '/books/show/:id': books_show,
  '/books/edit/:id': books_edit, 
  '/mdats/': mdats,
  '/mdats/create': mdats_create,
  '/mdats/chart': mdats_chart,
  '/mdats/show/:id': mdats_show,
  '/mdats/edit/:id': mdats_edit,
  '/plans/': plans,
  '/plans/create': plans_create,
  '/plans/edit/:id': plans_edit,
  
}	
</script>

<!-- main -->
<main>
  <Router {routes} />
</main>

<style>
  /*
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
  */
</style>