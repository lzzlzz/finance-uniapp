<template>
	<view>
		<view  class="weui-switch" :class="{'weui-switch-on' : isChecked}" 
		:value="value" :sid="sid" @tap.stop="toggle" 
		:style="{color:bgcolor, width: width+'px'}">
			<view v-if="isChecked && direction.length > 0" class="switch-checked" >
				{{direction[0]}}
			</view>
			<view v-if="!isChecked && direction.length > 0" class="switch-ischecked">
				{{direction[1]}}
			</view>
		</view>
	</view>
</template>

<script>
	 export default {
        name: 'switchComponent',
        props: {
			value: {
				type: Boolean,
				default: true,
			},
			//背景颜色
			 bgcolor: {
			 	type: String,
			 	default: "#c6acff"
			 },
			//宽度 px
			width: {
				type: Number,
				default: 52
			},
			text: {
				type: String,
				default: ''
			},
			sid: {
				type: Number,
				default: 0,
			}
        },
        data () {
            return {
                isChecked: this.value,
            }
        },
        computed: {
            direction () {
                if (this.text) {
                    return this.text.split('|')
                } else {
                    return []
                }
            }
        },
        watch: {
			value (val) {
				this.isChecked = val
			},
			isChecked(val) {
				let textTemp = '';
				if(val) {
					textTemp = this.text.split('|')[0];
				} 
				if(!val) {
					textTemp = this.text.split('|')[1];
				}
				let ob = {
					sid: this.sid,
					value: val,
					text: textTemp
				}
				this.$emit('change', ob);
			}
        },
        methods: {
          toggle(e) {
            this.isChecked = !this.isChecked;
          }
        }
    }   
</script>

<style lang="scss" scoped>
	
	.weui-switch {
		position:relative;
        display: block;
        position: relative;
        width: 154px;
        height: 26px;
		border: 2px solid #f8f8f8;
        outline: 0;
        border-radius: 16px;
        box-sizing: border-box;
        background-color: #DFDFDF;
        transition: background-color 0.1s, border 0.1s;
        cursor: pointer;
    }
	
    .weui-switch:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 47px;
        height: 22px;
        border-radius: 16px;
        background-color: $uni-bg-color-end;
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }
	/* 按钮 */
    .weui-switch:after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 16px;
        background-color: #FFF;
		border: 2px solid $uni-bg-color-start ;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
	
    .weui-switch-on {
		border-color: #f0f0f0;
        background-color: $uni-bg-color-end;
    }
	
	/* 背景颜色设计 */
    .weui-switch-on:before {
        border-color: #f0f0f0;
		background-color: $uni-bg-color-end;
    }
	
    .weui-switch-on:after {
		border-color: $uni-bg-color-start;
        transform: translateX(50rpx);
    }
	
	.switch-checked {
		width:100%;
		height:100%;
		position:absolute;
		padding:0 5px;
		line-height:20px;
		color:#FFF;
		user-select:none;
	}
	
	.switch-ischecked {
		width:100%;
		height:100%;
		position:absolute;
		padding:0 5px;
		right:2px;
		line-height:22px;
		color:#FFF;
		text-align:right;
		user-select:none;
	}
</style>
