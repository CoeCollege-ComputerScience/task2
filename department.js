var course = [
    {'CS': ['CS125','CS135','CS215','CS245']},
    {'DS': ['DS100','DS230','DS315']},
    {'MTH': ['MTH135','MTH215','MTH515']},
    {'STA': ['STA100','STA110','STA310']}
];


function buildDepartments() {
    var departmentList = document.getElementById("department");

    for (var i = 0; i < course.length; i++) {
        var department = Object.keys(course[i])[0];

        var option = document.createElement("option");
        option.value = department;
        option.text = department;

        departmentList.appendChild(option);
    }
}

function buildDepartments() {
    var departmentList = document.getElementById("department");

    for (var i = 0; i < course.length; i++) {
        var department = Object.keys(course[i])[0];

        var option = document.createElement("option");
        option.value = department;
        option.text = department;

        departmentList.appendChild(option);
    }
}

function buildCourses() {
    var selectedDepartment = document.getElementById("department").value;
    var courseList = document.getElementById("course");

    courseList.innerHTML = "";

    for (var i = 0; i < course.length; i++) {
        var department = Object.keys(course[i])[0];

        if (department === selectedDepartment) {
            var courses = course[i][department];

            for (var j = 0; j < courses.length; j++) {
                var option = document.createElement("option");
                option.value = courses[j];
                option.text = courses[j];

                courseList.appendChild(option);
            }
        }
    }
}

document.getElementById("department").onchange = function() {
    buildCourses();
};

buildDepartments();
buildCourses();
