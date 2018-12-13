finPath = "http://localhost:8080"

$("[data-toggle=popover]").popover();


// Nav Buttons
var generalTab = document.getElementById("generalTab")
var revenueTab = document.getElementById("revenueTab")
var payrollTab = document.getElementById("payrollTab")
var expensesTab = document.getElementById("expensesTab")
var investmentsTab = document.getElementById("investmentsTab")
var overviewTab = document.getElementById("overviewTab")
// Progress Bar
var progressBar = document.getElementById("progressBar")
// Section Title
var sectionHeader = document.getElementById("sectionHeaderLabel")

// Next + Prev Buttons
var endingButton = document.getElementById("endingButton")
var nextprevGroup = document.getElementById("buttonGroupWrapper")
var demoHeader = document.getElementById("demoHeader")
var companyName = document.getElementById("companyName")

var nextButton = document.getElementById("nextButton")
var prevButton = document.getElementById("prevButton")

// View Variables
var view0 = document.getElementById("view0")
var view1 = document.getElementById("view1")
var view2 = document.getElementById("view2")
var view3 = document.getElementById("view3")
var view4 = document.getElementById("view4")
var view5 = document.getElementById("view5")

var currentView = view0.id

var showMoreExpenses = document.getElementById("showhideExpensesButton")
var view3_extra = document.getElementById("view3_extra")

var addEmployee = document.getElementById("addEmployeeButton")
var totalEmployees = 1
addEmployee.onmousedown = function(){
	var table = document.getElementById("employeeTable");
   	var row = table.insertRow(totalEmployees);
	var index = row.insertCell(0);
	var role = row.insertCell(1);
	var category = row.insertCell(2);
	var salary = row.insertCell(3);
	var month = row.insertCell(4);
	var year = row.insertCell(5);

	index.innerHTML = totalEmployees
	role.innerHTML = document.getElementById("employeeRole").value
	category.innerHTML = document.getElementById("employeeCategoryDD").innerHTML
	salary.innerHTML = document.getElementById("employeeSalary").value
	month.innerHTML = document.getElementById("employeeMonthDD").innerHTML
	year.innerHTML = document.getElementById("employeeYearDD").innerHTML

	totalEmployees = totalEmployees + 1
}

var addExpenses = document.getElementById("addExpensesButton")
var totalNumExpenses = 1
addExpenses.onmousedown = function(){
	var table = document.getElementById("expensesTable");
   	var row = table.insertRow(totalNumExpenses);
	var index = row.insertCell(0);
	var name = row.insertCell(1);
	var category = row.insertCell(2);
	var amount = row.insertCell(3);
	var frequency = row.insertCell(4);

	index.innerHTML = totalNumExpenses
	name.innerHTML = document.getElementById("expenseName").value
	category.innerHTML = document.getElementById("expenseCategoryDD").innerHTML
	amount.innerHTML = document.getElementById("expenseAmount").value
	frequency.innerHTML = document.getElementById("expenseFrequencyDD").innerHTML

	totalNumExpenses = totalNumExpenses +1
}

var addInvestments = document.getElementById("addInvestmentButton")
var totalNumInvestments = 1
addInvestments.onmousedown = function(){
	var table = document.getElementById("investmentsTable");
   	var row = table.insertRow(totalNumInvestments);
	var index = row.insertCell(0);
	var source = row.insertCell(1);
	var amount = row.insertCell(2);
	var month = row.insertCell(3);
	var year = row.insertCell(4);

	index.innerHTML = totalNumInvestments
	source.innerHTML = document.getElementById("investmentSource").value
	amount.innerHTML = document.getElementById("investmentAmount").value
	month.innerHTML = document.getElementById("investmentMonthDD").innerHTML
	year.innerHTML = document.getElementById("investmentYearDD").innerHTML

	totalNumInvestments = totalNumInvestments +1
}


$(".dropdown-menu button").click(function(){
    $(this).parents(".dropdown").find('.supriv-dd-btn').html($(this).text() );
    $(this).parents(".dropdown").find('.supriv-dd-btn').val($(this).data('value'));
    $(this).parents(".dropdown").find('.supriv-dd-btn-sm').html($(this).text() );
    $(this).parents(".dropdown").find('.supriv-dd-btn-sm').val($(this).data('value'));
});

// Switches "Show More" to "Show Less" and back
showMoreExpenses.onmousedown = function(){
    if(showMoreExpenses.innerHTML == "Show More"){
        showMoreExpenses.innerHTML = "Show Less"
        view3_extra.setAttribute('style', "display : block")
    }
    else{
        showMoreExpenses.innerHTML = "Show More"
        view3_extra.setAttribute('style', "display : none")
    }
}

// Bottom Next and Previous button logic
nextButton.onmousedown = function(){
	loc = parseInt(companyName.getAttribute("page"), 10) + 1
    clicked(loc)
}
prevButton.onmousedown = function(){
    loc = parseInt(companyName.getAttribute("page"), 10) - 1
    clicked(loc)
}

resetAll = function(){
    generalTab.className = "btn btn-secondary nav-btn"
    revenueTab.className = "btn btn-secondary nav-btn"
    payrollTab.className = "btn btn-secondary nav-btn"
    expensesTab.className = "btn btn-secondary nav-btn"
    investmentsTab.className = "btn btn-secondary nav-btn"
    overviewTab.className = "btn btn-secondary nav-btn"
}

// Logic for a nav tab being clicked
clicked = function(loc){
    resetAll()
    objects = [generalTab, revenueTab, payrollTab, expensesTab, investmentsTab, overviewTab]
    headers = ["General Information", "Revenue", "Payroll", "Expenses", "Investments", "Financial Overview"]
    percents = ["15%", "35%", "55%", "75%", "90%", "100%"]
    companyName.setAttribute('page', loc)
    objects[loc].className = "btn btn-secondary curr-nav nav-btn"
    sectionHeaderLabel.innerHTML = headers[loc]
    progressBar.innerHTML = percents[loc]
    progressBar.setAttribute('style', "width: " + percents[loc])
    views = [view0, view1, view2, view3, view4, view5]
    for(var i = 0; i < 6; i++){
        if(i != loc){
            views[i].setAttribute('style', "display : none")
        }
        else{
            views[i].setAttribute('style', "display : block")
			currentView = views[i].id
        }
    }
    if(loc != 0){
        demoHeader.setAttribute('style', "display : none")
		document.getElementById("nextButton").innerHTML = "Next"
    }
    else{
        demoHeader.setAttribute('style', "display : block")
    }
    if(loc == 0){
        endingButton.setAttribute('style', "display : block")
        nextprevGroup.setAttribute('style', "display : none")
        endingButton.innerHTML = "Next"
    }
    else if(loc == 5){
    	endingButton.setAttribute('style', "display : block")
        nextprevGroup.setAttribute('style', "display : none")
        endingButton.innerHTML = "Previous"
    }
    else{
        endingButton.setAttribute('style', "display : none")
        nextprevGroup.setAttribute('style', "display : block")
    }
}
generalTab.onmousedown = function(){
	console.log(currentView)
    clicked(0)
}
revenueTab.onmousedown = function(){
	console.log(currentView)
    clicked(1)
}
payrollTab.onmousedown = function(){
	console.log(currentView)
    clicked(2)
}
expensesTab.onmousedown = function(){
	console.log(currentView)
    clicked(3)
}
investmentsTab.onmousedown = function(){
	console.log(currentView)
    clicked(4)
}
overviewTab.onmousedown = function(){
	console.log(currentView)
    clicked(5)
}

endingButton.onmousedown = function(){
    var tab = companyName.getAttribute("page")
    if(tab == 0){
        clicked(1)
        if(companyName.innerHTML == ""){
            endpoint = "company"
            query = document.getElementById("companyNameInput").value
            path = finPath + "/" + endpoint + "/" + query
			companyName.innerHTML = query
            addCompany(path)
        }
    }
    else{
        clicked(4)
    }
}
nextButton.onmousedown = function(){
	var tab = companyName.getAttribute("page")
	if(tab==1){
		clicked(2)
		endpoint = "revenue"
		var revenue = {};
		revenue["acv"] = [parseInt(document.getElementById("acvYear1").value), parseInt(document.getElementById("acvYear2").value),
parseInt(document.getElementById("acvYear3").value)]
		revenue["numCont"] = [ parseInt(document.getElementById("numContYear1").value),
parseInt(document.getElementById("numContYear2").value), parseInt(document.getElementById("numContYear3").value)]
		path = finPath + "/" + endpoint + "/" + companyName.innerHTML
		console.log(path)
		addRevenue(path, revenue)
	}
	if(tab == 2){
		clicked(3)
		endpoint = "employee"
		employees = []
		var rows = document.getElementById("employeeTable").rows

		for (var i = 1; i < rows.length; i++) {
			console.log(rows[i].children[0].innerHTML)
    		var index = rows[i].children[0].innerHTML
			var role = rows[i].children[1].innerHTML
			var category= rows[i].children[2].innerHTML;
			var salary= rows[i].children[3].innerHTML;
			var month = rows[i].children[4].innerHTML;
			var year = rows[i].children[5].innerHTML;

			var dictEmployee = {}
			dictEmployee["index"] = index
			dictEmployee["role"] = role
			dictEmployee["category"] = category
			dictEmployee["salary"] = salary
			dictEmployee["month"] = month
			dictEmployee["year"] = year

        	employees.push(dictEmployee);
	    }
		console.log(employees)
		path = finPath + "/" + endpoint + "/" + companyName.innerHTML
		console.log(path)
		addPayroll(path, employees)
	}

	if (tab==3){
		clicked(4)
		rent = [parseInt(document.getElementById("rentYear1").value) || 0, parseInt(document.getElementById("rentYear2").value)
||0,parseInt(document.getElementById("rentYear3").value) || 0 ]
		pathRent = finPath + "/rent/" + companyName.innerHTML
		rent = {"rent": rent}
		putRequest(pathRent, rent)

		insurance = [parseInt(document.getElementById("insuranceYear1").value) || 0,
parseInt(document.getElementById("insuranceYear2").value) || 0, parseInt(document.getElementById("insuranceYear3").value) || 0 ]
		pathInsurance = finPath + "/insurance/" + companyName.innerHTML
		insurance = {"insurance": insurance}
		putRequest(pathInsurance, insurance)

		supplies= [parseInt(document.getElementById("suppliesYear1").value) || 0,
parseInt(document.getElementById("suppliesYear2").value) || 0, parseInt(document.getElementById("suppliesYear3").value) || 0 ]
		pathSupplies = finPath + "/supplies/" + companyName.innerHTML
		supplies ={"supplies": supplies}
		putRequest(pathSupplies, supplies)

		utilities= [parseInt(document.getElementById("utilitiesYear1").value) || 0,
parseInt(document.getElementById("utilitiesYear2").value) || 0, parseInt(document.getElementById("utilitiesYear3").value) || 0 ]
		pathUtilities = finPath + "/utilities/" + companyName.innerHTML
		utilities ={"utilities": utilities}
		putRequest(pathUtilities, utilities)

		addTableExpenses()
	}
	if (tab==4){
		clicked(5)
		endpoint = "investments"
		investments = []
		var rows = document.getElementById("investmentsTable").rows

		for (var i = 1; i < rows.length; i++) {
    		var index = rows[i].children[0].innerHTML
			var source = rows[i].children[1].innerHTML
			var amount= rows[i].children[2].innerHTML;
			var month = rows[i].children[3].innerHTML;
			var year = rows[i].children[4].innerHTML;

			var dictInvestments = {}
			dictInvestments["index"] = index
			dictInvestments["source"] = source
			dictInvestments["amount"] = amount
			dictInvestments["month"] = month
			dictInvestments["year"] = year

        	investments.push(dictInvestments);
	    }
		path = finPath + "/" + endpoint + "/" + companyName.innerHTML
		investments= {"investments" :investments}
		putRequest(path, investments)

	}
	if (tab==5){
		window.location.href = 'dashboard.html';
	}


}
addTableExpenses = function(){
	endpoint = "itemized"
	expenses = []
	var rows = document.getElementById("expensesTable").rows

	for (var i = 1; i < rows.length; i++) {
		var index = rows[i].children[0].innerHTML
		var name = rows[i].children[1].innerHTML
		var category= rows[i].children[2].innerHTML;
		var amount= rows[i].children[3].innerHTML;
		var frequency = rows[i].children[4].innerHTML;

		var dictExpense = {}
		dictExpense["index"] = index
		dictExpense["name"] = name
		dictExpense["category"] = category
		dictExpense["amount"] = amount
		dictExpense["frequency"] = frequency

		expenses.push(dictExpense);
	}
	path = finPath + "/" + endpoint + "/" + companyName.innerHTML
	console.log(path)
	expenses = {"itemized" : expenses}
	putRequest(path, expenses)
}

var companyLabel = document.getElementById("companyName")
addCompany = function(path){
    path = encodeURI(path)
    var xhrFinance = new XMLHttpRequest() // creating request object
    xhrFinance.open("PUT", path, true) // associates request attributes with XHR

    xhrFinance.onload = function(e) { // triggered when response is received
        // must be written before sent
        response = JSON.parse(xhrFinance.responseText)
        console.log(response)
        companyLabel.innerHTML = response['name']
    }

    xhrFinance.onerror = function(e){ // triggered when error response is received
        // must be written before sent
        console.error(xhrFinance.statusText)
    }

    xhrFinance.send(null) // last step - this ACTUALLY makes the request
}


addRevenue = function(path, data){
	console.log(data)
	path = encodeURI(path)
    var xhrRevenue = new XMLHttpRequest() // creating request object
    xhrRevenue.open("PUT", path, true) // associates request attributes with XHR

    xhrRevenue.onload = function(e) { // triggered when response is received
        // must be written before sent
        response = JSON.parse(xhrRevenue.responseText)
        console.log(response)
        // companyLabel.innerHTML = response['name']
    }

    xhrRevenue.onerror = function(e){ // triggered when error response is received
        // must be written before sent
        console.error(xhrRevenue.statusText)
    }

    xhrRevenue.send(JSON.stringify(data)) // last step - this ACTUALLY makes the request
}


addPayroll = function(path, data){
	path = encodeURI(path)
    var xhrPayroll = new XMLHttpRequest() // creating request object
    xhrPayroll.open("PUT", path, true) // associates request attributes with XHR
	data = {"employees": data}
    xhrPayroll.onload = function(e) { // triggered when response is received
        // must be written before sent
        response = JSON.parse(xhrPayroll.responseText)
        console.log(response)
        // companyLabel.innerHTML = response['name']
    }

    xhrPayroll.onerror = function(e){ // triggered when error response is received
        // must be written before sent
        console.error(xhrPayroll.statusText)
    }
	console.log(data)
    xhrPayroll.send(JSON.stringify(data)) // last step - this ACTUALLY makes the request
}

putRequest = function(path, data){
	path = encodeURI(path)
    var xhrPayroll = new XMLHttpRequest() // creating request object
    xhrPayroll.open("PUT", path, true) // associates request attributes with XHR
	console.log(data)
	console.log(path)
    xhrPayroll.onload = function(e) { // triggered when response is received
        // must be written before sent
        response = JSON.parse(xhrPayroll.responseText)
        console.log(response)
        // companyLabel.innerHTML = response['name']
    }

    xhrPayroll.onerror = function(e){ // triggered when error response is received
        // must be written before sent
        console.error(xhrPayroll.statusText)
    }
    xhrPayroll.send(JSON.stringify(data)) // last step - this ACTUALLY makes the request
}
