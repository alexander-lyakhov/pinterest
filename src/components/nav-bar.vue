<template>
	<nav>
		<ul class="menu">
			<li class="menu--item">
				<router-link to="pins">Pins</router-link>
			</li>
			<li class="menu--item">
				<router-link to="boards">Boards</router-link>
			</li>
			<li class="menu--item">
				<router-link to="about">About</router-link>
			</li>
			<li class="login">
				<router-link to="/">Login</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style lang="scss" scoped>

nav {
	background: #fff;
	box-shadow: 0 4px 8px rgba(0,0,0,0.25);
	width: 100%;
	height: 40px;
	position: fixed;
	left: 0;
	top: 0;

	.menu {
		height: 100%;
		display: flex;
		align-items: center;
		padding: 1px;

		.menu--item {
			color: #404040;
			min-width: 80px;
			height: 100%;
			padding: 1px;

			a {
				/*
				border-top: 4px solid #c00;
				border-bottom: 4px solid #fff;
				*/
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				position: relative;
				overflow: hidden;

				&:hover {
					color: #000;
					&:after {
						content: '';
						display: block;
						background: #c00;
						width: 8px;
						height: 8px;
						position: absolute;
						transform: rotate(45deg);
						top: -4px;
					}
				}

				&.router-link-active {
					color: #fff;
					background: #c00;
					border: none;
				}
			}
		}
		.login {
			color: #c00;
		}
	}
}
</style>