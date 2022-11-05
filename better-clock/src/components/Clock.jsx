const Clock = ({ props }) => {

	const milliseconds = new Date().getTime();
	const now = new Date().getTime();


	setInterval(function () {
		const hours = new Date().getHours();
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		const millisesconds = new Date().getMilliseconds();
		const currentMillis = (hours * 3600 + minutes * 60 + seconds) * 1000 + millisesconds;
		const seans = Math.floor((currentMillis - (currentMillis % 8640000)) / 8640000);
		const ceras = Math.floor((currentMillis - seans * 8640000) / 86400);
		const jays = Math.floor((currentMillis - seans * 8640000 - ceras * 86400) / 864);
		const percentage = Math.floor((currentMillis / 86400000) * 1000)

		document.getElementById("test").innerHTML = seans + ":" + ceras + ":" + jays;
	}, 864);

	setInterval(function () {
		const hours = new Date().getHours() % 12;
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
	}, 1000)

	return (
		<div class='text-3xl mt-5'>
			<div>

			</div>
			Normal Clock: <span id='clock'>0:00:00</span>
			<br />
			Better Clock: <span id='test'>0:00:00</span>
		</div>
	);
};

export default Clock;
