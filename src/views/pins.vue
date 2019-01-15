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
		width: 25%;
		height: 256px;
		//margin: 4px;
		padding: 4px;

		.pin {
			background: #303030;
			//border: 4px solid #ccc;
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
}
</style>