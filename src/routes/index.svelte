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
			<span>Company 1</span>
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
		}
	}
</style>
