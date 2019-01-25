<template>
	<main>
		<h2>Pins</h2>
		<div class="pins">
			<div class="pin-cart" v-for="item in pinList" :key="item.id">
				<div class="pin">
					<img :src="item.image.original.url">
				</div>
			</div>
		</div>
		<a href="#" class="more-pins" @click.prevent="loadMorePins">More...</a>
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
			console.log(this.$route.query.code)
			this.getPins();
		},
		computed: {
			...mapGetters(['accessToken'])
		},

		methods: {
			...mapActions(['fetchPins']),

			getPins() {
				//this.pinList = [...this.pins.data]

				this.fetchPins(this.$store.state.accessToken).then(
					res => {
						console.log(res.data);
						this.pinList = [...res.data.data]
						//this.next = res.data.page.next;
					},
					err => {
						console.log(err)
					}
				)
			},

			loadMorePins() {
				this.fetchPins();
			}
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