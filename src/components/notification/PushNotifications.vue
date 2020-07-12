<template>
	<div class='PushNotifications'>
		<transition-group
				name="v-transition-animate"
				class="messages_list"
		>
			<div
					class="PushNotifications__content"
					v-for="(message, index) in messages"
					:key="message.id"
					:class="message.type"
			>
				<div class="content__text">
					<span>{{message.name}}</span>
				</div>
				<div class="content__buttons">
					<button class="button left" v-if="message.leftButton" @click="clickLeft(index)">{{message.leftButton}}</button>
					<button class="button right" v-if="message.rightButton" @click="clickRight(index)">{{message.rightButton}}</button>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
		name: "PushNotifications",
		props: {
			timeout: {
				type: Number,
				default: 1000
			}
		},
		data() {
			return {
				count: 0
			}
		},
		methods: {
			hideNotification(lastInd) {
				let vm = this;
				if (this.messages.length>0 && this.messages[lastInd].time>0 && lastInd>=0) {
					setTimeout(function () {
						vm.messages.splice(lastInd, 1)
					}, vm.messages[lastInd].time)
				}
			},
            clickLeft: function (ind) {
				this.$eventBus.$emit(this.messages[ind].action+'-left')
                this.messages[ind].time = 200;
                this.hideNotification(ind)
            },
            clickRight: function (ind) {
                this.$eventBus.$emit(this.messages[ind].action+'-right')
                this.messages[ind].time = 200;
                this.hideNotification(ind)
                // this.$eventBus.$on('test-left', data => {
                //     this.flag = true
                // })
            }
		},
		watch: {
			messages() {
				this.hideNotification(this.messages.length - 1)
			}
		},
        computed: {
            ...mapGetters({
                messages: 'getMessages',
            }),
        },
	}
</script>

<style lang="scss">
	.PushNotifications {
		position: fixed;
		top: 80px;
		right: 16px;
		z-index: 10;
		&__messages_list {
			display: flex;
			flex-direction: column-reverse;
		}
		&__content {
			padding: 5px 16px 5px 16px;
			border-radius: 4px;
			color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			white-space: pre-wrap;
			margin-bottom: 16px;
			background: green;
			&.error {
				background: #ff2f38;
			}
			&.warning {
				background: #c8a442;
			}
			&.success {
				background: #7ecf6d;
			}
		}
		.content {
			&__text {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			&__buttons {
				.button {
					cursor: pointer;
					border: none;
					margin-left: 4px;
					background: none;
					border-radius: 200px;
					padding: 6px;
				}
				.left {
					border: 2px solid green;
				}
				.right {
					border: 2px solid red;
				}
			}
		}
	}

	.v-transition-animate {
		&-enter {
			transform: translateX(120px);
			opacity: 0;
		}
		&-enter-active {
			transition: all .6s ease;
		}
		&-enter-to {
			opacity: 1;
		}

		&-leave {
			height: 50px;
			opacity: 1;
		}
		&-leave-active {
			transition: transform .6s ease, opacity .6s, height .6s .2s;
		}
		&-leave-to {
			height: 0;
			transform: translateX(120px);
			opacity: 0;
		}

		&-move {
			transition: transform .6s ease;
		}

	}
</style>
