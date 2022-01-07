const puppeteer = require('puppeteer');

;(async () => {

	const browser = await puppeteer.launch({
		executablePath: process.env.CHROMIUM_PATH
	});
	const page = await browser.newPage();

  await page.goto(`http://www.agenda21-treffpunkt.de/daten/COVID-19-Verlauf.php?sg=${process.argv[2]}`);

	const inzidenz = await page.$eval("table:nth-child(7) tr:nth-child(3) td:nth-child(7)", el => el.innerText);

  await browser.close();

	console.log(inzidenz);

})();
