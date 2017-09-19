<template>
	<div>
		<div id="header">
			<a onclick="javascript:history.go(-1);" id="a">く</a>
		</div>
		<div class="amap-page-container">
			<el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
				<el-amap-info-window :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
				<el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
				<el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>

			</el-amap>
		</div>

	</div>
</template>

<style>
	#a{
		color: white;
		position: fixed;
		font-size: 0.537037rem;
		top: 0.128205rem;
		left: 0.128205rem;
		z-index: 999;
		padding: 0.128205rem;
		opacity: 0.5;
		background-color: silver;
	}
	.amap-page-container {
		height: 736px;
	}
</style>

<script>
	export default {
		data() {
			return {

				zoom: 15,
				center: [],
				circle: {
					clickable: true,
					center: [],
					radius: 200,
					fillOpacity: 0.3,
					strokeStyle: 'dashed',
					fillColor: '#FFFF00',
					strokeColor: '#00BFFF'
				},
				marker: {
					position: [],
					events: {
						click: () => {
							if(this.mywindow.visible === true) {
								this.mywindow.visible = false
							} else {
								this.mywindow.visible = true
							}
						},
						dragend: (e) => {
							this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
						}
					},
					visible: true,
					draggable: false
				},
				mywindow: {
					position: [],
					visible: true,
					events: {
						close() {
							this.mywindow.visible = false
						}
					}
				},
				plugin: {
					pName: 'Scale',
					events: {
						init(instance) {
							console.log(instance)
						}
					}
				}
			}
		},
		created() {
			this.center = this.$route.query.checkNames;
			this.center = this.center.split(",")

			this.circle.center = this.$route.query.checkNames;
			this.circle.center = this.circle.center.split(",")

			this.marker.position = this.$route.query.checkNames;
			this.marker.position = this.marker.position.split(",")

			this.mywindow.position = this.$route.query.checkNames;
			this.mywindow.position = this.mywindow.position.split(",")

		}

	}
</script>