<template>
	<main>
		<h2>Pins {{pins.length}} *</h2>
		<div class="pins" v-if="pins.length > 0">
			<div class="pin-cart" v-for="item in pins" :key="item.id">
				<div class="pin">
					<img :src="item.image.original.url">
				</div>
			</div>
		</div>
		<a href="#" class="more-pins" @click.prevent="getPins">More...</a>
	</main>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex';

	export default {
		name: 'pins',

		data() {
			return {
				pinList: []
			}
		},

		created() {
			this.getPins();
		},
		computed: {
			...mapGetters(['accessToken', 'pins'])
		},

		methods: {
			...mapActions(['fetchPins']),

			getPins() {
				this
					.fetchPins(this.accessToken)
					.catch(err => console.log('fetchPins ERROR', err))
			},
		}
	}
</script>

<style lang="scss" scoped>

main {
	text-align: center;
	padding-bottom: 32px;

	.pins {
		display: flex;
		flex-wrap: wrap;
		padding: 0 4px 32px;
	}

	.pin-cart {
		//background: #404040;
		width: 16.66%;
		height: 256px;
		//margin: 4px;
		padding: 4px;

		.pin {
			background: #303030;
			//border: 3px solid #39c;
			//border-radius: 12px;
			widows: 100%;
			height: 100%;
			padding: 6px;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				transition: all 0.2s;
				cursor: pointer;
			}
		}
	}

	/*
	.more-pins {
		margin: 0 auto;
	}
	*/

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