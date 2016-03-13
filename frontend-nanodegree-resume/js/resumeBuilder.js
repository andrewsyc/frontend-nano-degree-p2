var bio = {
    "name": "Andrew Sychra",
    "role": "Software Developer",
    "contacts": {
        "mobile": "515-520-4424",
        "email": "andrew@srchub.com",
        "github": "andrewsyc",
        "twitter": "@andrewsyc",
        "blog": "andrewsychra.com",
        "location": "Ames, Iowa"
    },
    "picture": "images/andrewsyc.png",
    "welcomeMessage": "I am currently in the Ames, Iowa area. Get in touch with me for business or to chat projects.",
    "skills": ["PHP", "Python", "Javascript", "HTML5", "MySQL"]
};

/*
 * Below is the bio information and the iterative function for the bio information.
 */

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);


    /*Conditional if only runs when there is at least one skill listed*/
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    /*Iterates through and adds contact info on the top and bottom of the page*/
    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
}

bio.display();


/*
 * Below is the work information and the iterative function for the work information.
 */

var work = {
    "jobs": [
        {
            "employer": "Wordpress Freelancer",
            "title": "Website Administrator",
            "location": "Ames Iowa",
            "datesWorked": "January 2013 - Present",
            "description": "I helped several businesses either revamp or get online, usually using a CMS like Wordpress to complete the task." +
                " I have my own virtual private server and host several sites on my own server for these businesses as well."

        },
        {
            "employer": "iCracked",
            "title": "iTech",
            "location": "Ames, Iowa",
            "datesWorked": "April 2014 - October 2015",
            "description": "An iCracked certified iTech with over 500 iOS device repairs. Repairs ranged from the iPhone 4 up to the 6 Plus." +
            " For tablets, repairs ranged from the iPad 2 through the iPad Air. Parts for repairs are all bought through iCracked as part of the affiliate agreement. " +
            " Repairs are obtained through my own efforts of advertising: Google adwords, Facebook dark posts, advertisements on bulletin boards. " +
            " iCracked is established enough that the brand provides credibility on top of providing warranties for all techs that complete repairs on devices." +
            " Job was rewarding in that it allowed me to fix the phones of people from all walks of life."
        },
        {
            "employer": "Tutoring Freelancer",
            "title": "Academic Tutor",
            "location": "Ames Iowa",
            "datesWorked": "January 2013 - Present",
            "description": "For a period of time this was my main source of income, simply hustling and finding tutoring gigs. " +
            "My main page can still be seen at msolved.com, where I would funnel craigslist and youtube viewers to a landing page " +
            " where I would then offer my services. Services ranged from Math, English, to Physics and other Sciences." +
            " Over the course of 2 years I assisted people through difficult coursework and complete semester work in " +
            " suitable time. Despite never meeting any of my clients face to face, and some of them never even seeing them in an online meeting, I've forged bonds that are going on 3 years now." +
            " As of December 2015 there are over 1.1 million views on my youtube channel: https://www.youtube.com/user/mathematicssolved/about"

        },
        {
            "employer": "Iowa State University",
            "title": "Academic Tutor",
            "location": "Ames, Iowa",
            "datesWorked": "January 2012 - December 2012",
            "description": "Tutored Trigonometry and Calculus I, ranged from taking on 12 students a semester (some group sessions had as many as 4 students), including the summer of 2012"
        },
        {
            "employer": "Steak & Shake",
            "title": "Server",
            "location": "Davenport, Iowa",
            "datesWorked": "May 2009 - December 2009",
            "description": "This is the only server job that I held, and though not relevant to programming experience is still memorable to me and worth mentioning. " +
            "Working as a server at Steak & Shake was hard initially but once I got things down it was one of the better jobs I've had. " +
            " Despite the my underwhelming and drama ridden coworkers, some of the more colorful personalities I've met."
        },
        {
            "employer": "Morton MetalCraft",
            "title": "Welder",
            "location": "Morton, Illinois",
            "datesWorked": "January 2006 - August 2007",
            "description": "Used my welding education and ran a mechanized weld station among other positions. " +
            "Often worked 60 or more hours a week and covered 2nd and 3rd shifts. Constructed cabins for John Deere Backhoes."
        }
    ]
};

work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

work.display();


/*
 * Below is the projects information and the iterative function for the projects information.
 */

var projects = {
    "projects": [
        {
            "title": "Swap or Cash",
            "datesWorked": "Summer of 2012",
            "description": "This was a facebook app that allowed users to trade books on campus, though we got a user base of over 100 " +
            " results were lackluster.",
            //"images": ["images/blank.jpg"],
            "url": "#"
        },
        {
            "title": "All nano degree projects from all courses here and below",
            "datesWorked": "April 2015 - February 2016",
            "description": "As I complete my coursework I'll add more here.",
            //"images": ["N/A"],
            "url": "N/A"
        }
    ]
};

projects.display = function () {
    if (projects.projects.length > 0) {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();


/*
 * Below is the education information and the iterative function for the education information.
 */

var education = {
    "schools": [

        {
            "name": "Iowa State University",
            "datesAttended": "2010 - 2013",
            "location": "Ames, Iowa, United States",
            "degree": "N/A",
            "major": "Computer Engineering",
            "minor": "Physics",
            "url": "https://www.iastate.edu/"
        },
        {
            "name": "Illinois Central College",
            "datesAttended": "2007 - 2009",
            "location": "East Peoria, Illinois",
            "degree": "Associates in Applied Science",
            "major": "Electronics Technologies",
            "minor": "Welding Certificate",
            "url": "http://icc.edu/"
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Front-End Web Developer Nanodegree",
            "completed": "April 2015 - December 2015",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "school": "Udacity",
            "title": "Full Stack Web Developer Nanodegree",
            "completed": "April 2015 - March 2016",
            "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        }
    ]
};

education.display = function () {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();


function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}
console.log(locationizer(work));


$("#mapDiv").append(googleMap);


