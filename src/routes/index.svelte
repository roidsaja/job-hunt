<script>
	import Footer from '$lib/Footer/Footer.svelte';
	import Header from '$lib/Header/Header.svelte';
</script>

<div class="home">
	<!-- Search Bar -->
	<div class="search">
		<input />
		<button>Search</button>
	</div>

	<div class="home__flex">
		<!-- Side Bar Menus -->
		<div class="sidebar">
			<div>
				<input type="checkbox" />
				<span>Entry Level</span>
			</div>
			<div>
				<input type="checkbox" />
				<span>Mid Level</span>
			</div>
			<div>
				<input type="checkbox" />
				<span>Senior Level</span>
			</div>
			<div>
				<input type="checkbox" />
				<span>Management</span>
			</div>
			<div>
				<input type="checkbox" />
				<span>Internship</span>
			</div>
		</div>

		<!-- Main List -->
		<div class="companies">
			<div class="companies__job">
				<div class="companies__job-logo">
					<img src="static/Thinking face-cuate.svg" alt="No Image" />
				</div>
				<div class="companies__job__info">
					<div class="companies__job__info-top">
						<span>GitHub</span>
						<span>Frontend Developer</span>
					</div>
					<div class="companies__job__info-bottom">
						<button>Full time</button>
						<div>
							<div>
								<span>Location</span>
							</div>
							<div>
								<span>Schedule</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.home {
		&__flex {
			display: flex;
			margin: 0 auto;
			justify-content: space-between;
			width: 83%;
		}
		.sidebar {
			width: 31%;
		}

		.companies {
			width: 65%;
			&__job {
				display: flex;
				align-items: center;
				margin-bottom: 2rem;

				height: 7.125rem;
				background: #fff;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
				border-radius: 4px;
				&:hover {
					cursor: pointer;
					box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
				}
				&-logo {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-right: 1rem;
					margin-left: 0.75rem;

					width: 5.625rem;
					height: 5.625rem;
					border-radius: 4px;
					border: 1px solid darkslategray;
				}
				&__info {
					width: 80.5%;
					font-family: sans-serif;
					&-top {
						justify-content: space-evenly;
						& > span:nth-child(1) {
							display: block;
							font-style: normal;
							font-weight: bold;
							font-size: 16px;
							line-height: 14px;
							color: #334680;
							margin-bottom: 0.5rem;
						}
						& > span:nth-child(2) {
							display: block;
							font-style: normal;
							font-weight: normal;
							font-size: 16px;
							line-height: 21px;
							color: #334680;
							margin-bottom: 0.75rem;
						}
					}
					&-bottom {
						display: flex;
						justify-content: space-between;
						width: 100%;

						color: lightgrey;
						font-style: normal;
						font-size: 12px;
						font-weight: 500;
						line-height: 14px;
						& > button {
							width: 3.938rem;
							height: 1.625rem;
							border: 1px solid #334680;
							box-sizing: border-box;
							border-radius: 4px;
							cursor: pointer;

							background-color: #fff;
							font-family: sans-serif;
							font-style: normal;
							font-weight: bold;
							font-size: 12px;
							line-height: 14px;
							color: #334680;
							white-space: nowrap;
						}
						& > div {
							display: flex;
							& > div:nth-child(1) {
								display: flex;
								align-items: center;
								& > span:nth-child(1) {
									font-size: medium;
									margin-right: 0.469rem;
									margin-top: 0.11rem;
								}
								margin-right: 1.781rem;
							}
							& > div:nth-child(2) {
								display: flex;
								align-items: center;
								& > span:nth-child(1) {
									margin-top: 0.11rem;
									font-size: medium;
									margin-right: 0.469rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
