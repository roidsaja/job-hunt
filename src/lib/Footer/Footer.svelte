<footer>
	<span>
		Developed by <a href="https://github.com/roidsaja/job-hunt">roidsaja</a> using SvelteKit</span
	>
</footer>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		justify-content: space-between;
		& > span {
			font-family: Poppins, sans-serif;
			font-style: normal;
			font-size: 12px;
			line-height: 36px;
			color: #282538;

			& > a {
				text-decoration: none;
				color: #2cb4cc;
				font-weight: 600;
			}
		}
	}
</style>
