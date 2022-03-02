<script lang="ts">
	const category = [
		{ text: 'All category' },
		{ text: 'Accounting' },
		{ text: 'Account Management/Customer Success' },
		{ text: ' Corporate' },
		{ text: 'Customer Service Career' },
		{ text: 'Data Science' },
		{ text: 'Design' },
		{ text: 'Editor' },
		{ text: 'Education' },
		{ text: 'HR' },
		{ text: 'IT' },
		{ text: 'Law' },
		{ text: 'Marketing' },
		{ text: 'Mechanic' },
		{ text: 'Mental Health' },
		{ text: 'Nurses' },
		{ text: 'Office Administration' },
		{ text: 'Physical Assistant' },
		{ text: 'Product' },
		{ text: 'Project Management' },
		{ text: 'Public Relations' },
		{ text: 'Recruiting' },
		{ text: 'Retail' },
		{ text: 'Sales' },
		{ text: 'Software Engineer' },
		{ text: 'UX' },
		{ text: 'Videography' },
		{ text: 'Writer' }
	];

	const level = [
		{ text: 'All level' },
		{ text: 'Entry Level' },
		{ text: 'Mid Level' },
		{ text: 'Senior Level' },
		{ text: 'Management' },
		{ text: 'Internship' }
	];

	//Filter level and category
	const handleOnChooseLevel = (level: any) => {
		return level.target.value;
	};

	const handleOnChooseCategory = (category: any) => {
		return category.target.value;
	};
</script>

<div class="home">
	<!-- Search Bar -->
	<div class="search">
		<div class="search__container">
			<input
				class="search__container-large"
				type="text"
				placeholder="Title, companies, expertise or benefits"
			/>
			<button> Search </button>
		</div>
	</div>

	<div class="home__flex">
		<!-- Side Bar Menus -->
		<div class="sidebar">
			<div class="sidebar__container">
				<h1>OCCUPATION</h1>
				<div class="sidebar__container-checkbox">
					<input type="checkbox" />
					<span>Full time</span>
				</div>
				<div class="sidebar__container-location">
					<h1>LOCATION</h1>
					<div>
						<input type="text" placeholder="City, state, zip code or country" />
						<span class="toolTipText"> Press Enter to search </span>
					</div>
				</div>
				<div class="sidebar__container-filter">
					<div>
						<label>Category</label>
						<select on:change={handleOnChooseCategory}>
							{#each category as ctg}
								<option value={ctg}>
									{ctg.text}
								</option>
							{/each}
						</select>
					</div>
					<div>
						<label>Level</label>
						<select on:change={handleOnChooseLevel}>
							{#each level as lvl}
								<option value={lvl}>
									{lvl.text}
								</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>

		<!-- Main List -->
		<div class="companies">
			<div class="companies__job">
				<div class="companies__job-logo">
					<img src="Thinking face-cuate.svg" alt="No Image" />
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
		.search {
			width: 83%;
			height: 8.625rem;
			margin: 0 auto;
			margin-top: 2rem;
			margin-bottom: 2.625rem;

			background-image: url('/mesh.png');
			background-position: center;
			background-size: cover;
			border-radius: 8px;
			position: relative;
			display: flex;
			& input {
				width: 66%;
				height: 3.438rem;
				background: #ffffff;
				box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				display: block;
				margin: 0 auto;

				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;

				border: none;
				padding-left: 2.625rem;
				font-family: Arial, Helvetica, sans-serif;
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 14px;
				color: #b9bdcf;
				&:focus {
					color: #000;
					outline: none;
					border: 1px solid #b9bdcf;
				}
			}
			& button {
				border: none;
				width: 14%;
				height: 2.938rem;
				background: #1e86ff;
				border-radius: 4px;
				cursor: pointer;

				font-family: Arial, Helvetica, sans-serif;
				font-style: normal;
				font-weight: 500;
				font-size: 16px;
				line-height: 19px;
				color: #ffffff;

				position: absolute;
				top: 0;
				bottom: 0;
				left: 51.3%;
				right: 0;
				margin: auto;
				&:hover {
					background: #0571ec;
				}
			}
		}
		&__flex {
			display: flex;
			margin: 0 auto;
			justify-content: space-between;
			width: 83%;
		}
		.sidebar {
			width: 31%;
			&__container {
				& > h1 {
					font-family: Arial, Helvetica, sans-serif;
					font-weight: bold;
					font-size: 14px;
					line-height: 21px;
					color: #b9bdcf;
				}
				&-checkbox {
					display: flex;
					align-items: center;
					margin-left: 0.75rem;
					margin-bottom: 2.063rem;
					& > input {
						border: 1px solid #b9bdcf;
						box-sizing: border-box;
						border-radius: 2px;
						width: 1.125rem;
						height: 1.125rem;
					}
					& > span {
						font-family: Arial, Helvetica, sans-serif;
						font-style: normal;
						font-weight: 500;
						font-size: 14px;
						line-height: 21px;
						color: #334680;
					}
				}
				&-location {
					font-family: Arial, Helvetica, sans-serif;
					font-style: normal;
					font-weight: bold;
					font-size: 14px;
					line-height: 21px;
					text-transform: uppercase;
					color: #b9bdcf;
					& > h1 {
						display: block;
						margin-bottom: 0.875rem;
						font-size: 14px;
						font-weight: bold;
						line-height: 21px;
					}
					& > div {
						// border: 1px solid blue;
						display: flex;
						align-items: center;
						position: relative;
						& > span:first-child {
							position: absolute;
							font-size: x-large;
							padding-left: 0.75rem;
						}
						.toolTipText {
							visibility: hidden;
							width: 70%;
							background-color: #b9bdcf;
							color: #fff;
							text-align: center;
							border-radius: 6px;
							padding: 5px 0;

							font-family: Arial, Helvetica, sans-serif;
							font-style: normal;
							font-weight: normal;
							font-size: 12px;
							line-height: 14px;
							/* Position the tooltip */
							position: absolute;
							left: 30%;
							bottom: 100%;
							z-index: 1;
						}
						& > input {
							width: 100%;
							height: 48px;
							background: #ffffff;
							box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
							border-radius: 4px;

							border: none;
							padding-left: 2.813rem;
							font-family: Roboto;
							font-style: normal;
							font-weight: normal;
							font-size: 12px;
							line-height: 14px;
							color: #b9bdcf;

							&:focus {
								outline: none;
								color: black;
							}
							&:hover {
								box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
								& + .toolTipText {
									visibility: visible;
								}
							}
						}
						margin-bottom: 1.5rem;
					}
				}
				&-filter {
					& > div:nth-child(1) {
						& > label {
							font-family: Arial, Helvetica, sans-serif;
							font-style: normal;
							font-weight: bold;
							font-size: 14px;
							line-height: 21px;
							text-transform: uppercase;
							color: #b9bdcf;

							display: inline-block;
							margin-bottom: 0.875rem;
						}
						& > select {
							width: 100%;
							height: 2rem;
							font-family: Roboto;
							font-style: normal;
							font-weight: normal;
							font-size: 14px;
							line-height: 14px;
							color: #3a3a3a;

							border: 1px solid #334680;
							background: #ffffff;
							box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
							border-radius: 4px;
							cursor: pointer;
							padding-left: 0.5rem;
							&:hover {
								box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
							}
						}
						margin-bottom: 1.5rem;
					}
					& > div:nth-child(2) {
						& > label {
							font-family: Arial, Helvetica, sans-serif;
							font-style: normal;
							font-weight: bold;
							font-size: 14px;
							line-height: 21px;
							text-transform: uppercase;
							color: #b9bdcf;

							display: inline-block;
							margin-bottom: 0.875rem;
						}
						& > select {
							width: 100%;
							height: 2rem;
							font-family: Roboto;
							font-style: normal;
							font-weight: normal;
							font-size: 14px;
							line-height: 14px;
							color: #3a3a3a;

							border: 1px solid #334680;
							background: #ffffff;
							box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
							border-radius: 4px;
							cursor: pointer;
							padding-left: 0.5rem;

							&:hover {
								box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
							}
						}
						margin-bottom: 1.5rem;
					}
				}
			}
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
