<template>
	<main>
		<h2>Pins</h2>
		<div class="pins">
			<div class="pin-cart" v-for="item in pins.data" :key="item.id">
				<div class="pin">
					<img :src="item.image.original.url">
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import {mapState} from 'vuex';

	export default {
		name: 'pins',

		computed: {
			...mapState(['pins'])
		}
	}
</script>

<style lang="scss" scoped>

main {
	.pins {
		display: flex;
		flex-wrap: wrap;
		padding: 0 4px;
	}

	.pin-cart {
		//background: #404040;
		width: 16.66%;
		height: 256px;
		//margin: 4px;
		padding: 4px;

		.pin {
			background: #303030;
			border: 3px solid #39c;
			border-radius: 12px;
			widows: 100%;
			height: 100%;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				transition: all 0.2s;
				cursor: pointer;
			}
		}
	}

	@media screen and (max-width: 1600px) {
		.pins .pin-cart {
			min-width: 20%;
		}
	}

	@media screen and (max-width: 1280px) {
		.pins .pin-cart {
			min-width: 25%;
		}
	}

	@media screen and (max-width: 1024px) {
		.pins .pin-cart {
			min-width: 33.33%;
		}
	}

	@media screen and (max-width: 640px) {
		.pins .pin-cart {
			min-width: 50%;
		}
	}

	@media screen and (max-width: 400px) {
		.pins .pin-cart {
			min-width: 100%;
		}
	}
}
</style>