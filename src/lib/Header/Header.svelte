<header>
	<a href="/">GitHub</a>
	<a href="/">JobHunt</a>
</header>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');

	header {
		font-family: Poppins, sans-serif;
		font-style: normal;
		font-size: 24px;
		line-height: 36px;
		color: #282538;

		width: 83%;
		margin: 0 auto;
		& > a:nth-child(1) {
			font-weight: bold;
			margin-right: 0.3rem;
			cursor: pointer;
			color: inherit;
			text-decoration: none;
		}
		& > a:nth-child(2) {
			font-weight: normal;
			cursor: pointer;
			color: inherit;
			text-decoration: none;
		}
	}

	@media screen and (max-width: 860px) {
		header {
			width: 90%;
		}
	}
</style>
