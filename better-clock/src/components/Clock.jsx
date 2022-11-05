const Clock = ({ props }) => {


	setInterval(function () {
		const hours = new Date().getHours();
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		const millisesconds = new Date().getMilliseconds();
		const currentMillis = (hours * 3600 + minutes * 60 + seconds) * 1000 + millisesconds;
		var seans = Math.floor((currentMillis - (currentMillis % 8640000)) / 8640000);
		var ceras = Math.floor((currentMillis - seans * 8640000) / 86400);
		var jays = Math.floor((currentMillis - seans * 8640000 - ceras * 86400) / 864);

		if (seans < 10) {
			seans = `0${seans}`;
		}
		if (ceras < 10) {
			ceras = `0${ceras}`;
		}
		if (jays < 10) {
			jays = `0${jays}`;
		}

		document.getElementById("test").innerHTML = seans + ":" + ceras + ":" + jays;

		const numDegrees = (currentMillis / 86400000) * 360 - 90;
		var hand = document.getElementById('hourhand')
		hand.style.webkitTransform = 'rotate(' + numDegrees + 'deg)';
		var minute = document.getElementById('minutehand')
		minute.style.webkitTransform = 'rotate(' + (ceras / 100 * 360 - 90) + 'deg)';
		var second = document.getElementById('secondhand')
		second.style.webkitTransform = 'rotate(' + (jays / 100 * 360 - 90) + 'deg)';
	}, 864);

	setInterval(function () {
		const timeString = new Date().toTimeString();
		document.getElementById("clock").innerHTML = timeString.substring(0, timeString.indexOf(' '));
	}, 1000)

	return (
		<div class='text-3xl mt-5' style={{ font: "Poppins", paddingBottom: "30px", "display": "flex", "flexDirection": "column" }}>
			Normal Clock:
			<br />
			<p style={{ "display": "inline" }} id='clock'>0:00:00</p>

			<br />

			Better Clock:
			<br />
			<p id='test'>0:00:00</p>
		</div>
	);
};

export default Clock;
