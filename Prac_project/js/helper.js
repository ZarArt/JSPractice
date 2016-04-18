function Helper() {};

Helper.prototype.ParseDate = function () {
	var entryDate = new Date();
	var returnDate = entryDate.getFullYear();
	returnDate += entryDate.getMonth() < 10 ? "-" + "0"+ entryDate.getMonth() : "-" + entryDate.getMonth();
	returnDate += entryDate.getDate() < 10 ? "-" + "0"+ entryDate.getDate() : "-" + entryDate.getDate();
	return returnDate;
}

Helper.prototype.CompareDate = function(lang, comingDate) {
	var entryDate = new Date(comingDate);
	var entryDate2 = comingDate.split(" ");
	var entryDate1 = entryDate.getFullYear() + "-" + "0"+ entryDate.getMonth() + "-" + entryDate.getDate();
	var nowDate = this.ParseDate();
	console.log(entryDate2[0]);
	console.log(nowDate);
	if (entryDate2[0] == nowDate) {
		return entryDate2[1];
	}
	else {
		return this.GetOurMonth(lang, entryDate.getMonth());
	}
};

Helper.prototype.GetOurMonth = function(lang, month) {
	var langs = {
		ru: {
			0: "январь",
			1: "февраль",
			2: "март",
			3: "апрель",
			4: "май",
			5: "июнь",
			6: "июль",
			7: "август",
			8: "сентябрь",
			9: "октябрь",
			10: "ноябрь",
			11: "декабрь"			
		},
		ukr:{
			0: "сичень",
			1: "лютий",
			2: "березень",
			3: "квитень",
			4: "травень",
			5: "червень",
			6: "липень",
			7: "серпень",
			8: "вересень",
			9: "жовтень",
			10: "листопад",
			11: "грудень"
		}
	}
	return langs[lang][month];
};

