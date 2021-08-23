(function replacer() {
	// Get the parameters from the terminal
	const myArgs = process.argv.slice(2);

	// If some of the arguments are missing we throw an error.
	if (myArgs.length < 3 ) {
		throw "Invalid parameters, check the command again. Example command: node app.js /var/www/bpm/file.sql wp_ wp_110_";
	}

	const filePath = myArgs[0];
	const searchPhrase = myArgs[1];
	const replacePhrase = myArgs[2];

	// Reading the file and saving it into a string.
	const fs = require("fs");
	const buffer = fs.readFileSync(filePath);
	const sqlStr = buffer.toString();

	const replacedSqlStr = sqlStr.replace(new RegExp(searchPhrase, 'g'), replacePhrase);

	//Generating the new database name. 
	const ts = Date.now();
	const date_ob = new Date(ts);
	const newFileName = 'db-dump-' + date_ob.getDate() + '-' + date_ob.getMonth() + '-' + date_ob.getFullYear() + '-' + date_ob.getUTCMinutes() + '-' + date_ob.getUTCSeconds() + '.sql';
	 
	// Creating new SQL file with the renamed tables
	fs.writeFile(newFileName, replacedSqlStr, (err) => {
		if (err) throw err;

		// success case, the file was saved
		console.log('Your new database is ready for import !');
	});	
}())

//Example usage
//node app.js var/www/bpm-saas/bpm_tooling-2021-08-20-be0e31f.sql wp_ wp_110_