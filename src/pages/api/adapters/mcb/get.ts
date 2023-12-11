const campuses = {
  cvraman: "CV Raman Nagar",
  indiranagar: "Indiranagar",
  mandur: "Mandur",
}


let apiResponse = {
  branches: [
    {
        "BranchID": 38,
        "BranchName": campuses.cvraman,
        "LocationID": 34,
        "Pincode": "560075",
        classes: [
           "3486",
           "3610",
           "314",
           "315",
           "316",
           "317",
           "318",
           "319",
           "320",
           "321",
           "322",
           "323",
           "324",
           "325",
           "326",
           "533",
           "534"
      ]
    },
    {
        "BranchID": 50,
        "BranchName": campuses.indiranagar,
        "LocationID": 34,
        "Pincode": "560075",
        classes: [
           "314",
           "315",
           "316",
           "317",
           "318",
           "319",
           "320",
           "321",
           "322",
           "323",
           "324",
           "325",
           "326"
      ],
    },
    {
        "BranchID": 224,
        "BranchName": campuses.mandur,
        "LocationID": 34,
        "Pincode": "560049",
        classes: [
           "314",
           "315",
           "316",
           "317",
           "318",
           "319",
           "320",
           "321",
           "322",
           "323",
           "324"
        ]
    }
  ],
  classes: [
    {
        "ClassID": 3486,
        "ClassName": "Day Care",
        "BoardID": 1
    },
    {
        "ClassID": 3610,
        "ClassName": "Playgroup",
        "BoardID": 1
    },
    {
        "ClassID": 314,
        "ClassName": "Prep 1",
        "BoardID": 1
    },
    {
        "ClassID": 315,
        "ClassName": "Prep 2",
        "BoardID": 1
    },
    {
        "ClassID": 316,
        "ClassName": "Prep 3",
        "BoardID": 1
    },
    {
        "ClassID": 317,
        "ClassName": "Class 1",
        "BoardID": 1
    },
    {
        "ClassID": 318,
        "ClassName": "Class 2",
        "BoardID": 1
    },
    {
        "ClassID": 319,
        "ClassName": "Class 3",
        "BoardID": 1
    },
    {
        "ClassID": 320,
        "ClassName": "Class 4",
        "BoardID": 1
    },
    {
        "ClassID": 321,
        "ClassName": "Class 5",
        "BoardID": 1
    },
    {
        "ClassID": 322,
        "ClassName": "Class 6",
        "BoardID": 1
    },
    {
        "ClassID": 323,
        "ClassName": "Class 7",
        "BoardID": 1
    },
    {
        "ClassID": 324,
        "ClassName": "Class 8",
        "BoardID": 1
    },
    {
        "ClassID": 325,
        "ClassName": "Class 9",
        "BoardID": 1
    },
    {
        "ClassID": 326,
        "ClassName": "Class 10",
        "BoardID": 1
    },
    {
        "ClassID": 375,
        "ClassName": "Class 11-PCMC",
        "BoardID": 1
    },
    {
        "ClassID": 499,
        "ClassName": "Class 11-PCMB",
        "BoardID": 1
    },
    {
        "ClassID": 533,
        "ClassName": "Class 11",
        "BoardID": 1
    },
    {
        "ClassID": 534,
        "ClassName": "Class 12",
        "BoardID": 1
    },
    {
        "ClassID": 3852,
        "ClassName": "Class_SEN",
        "BoardID": 1
    },
    {
        "ClassID": 3703,
        "ClassName": "M1-Class 6",
        "BoardID": 5
    },
    {
        "ClassID": 3704,
        "ClassName": "M2-Class 7",
        "BoardID": 5
    },
    {
        "ClassID": 3705,
        "ClassName": "M3 - Class 8",
        "BoardID": 5
    },
    {
        "ClassID": 3706,
        "ClassName": "M4 - Class 9",
        "BoardID": 5
    },
    {
        "ClassID": 3707,
        "ClassName": "M5 - Class 10",
        "BoardID": 5
    },
    {
        "ClassID": 3708,
        "ClassName": "CP 1 - Class 11",
        "BoardID": 5
    },
    {
        "ClassID": 3709,
        "ClassName": "CP 2 - Class 12",
        "BoardID": 5
    }
  ],
  academicYear: [
    {
        "Selected": false,
        "Text": "2024-2025",
        "Value": "16"
    },
    {
        "Selected": false,
        "Text": "2023-2024",
        "Value": "15"
    },
    {
        "Selected": false,
        "Text": "2022-2023",
        "Value": "14"
    }
  ],
}

apiResponse = {
    ...apiResponse,
    branches: apiResponse.branches.map(branch => ({
        ...branch,
        classes: branch.classes.map((c) => 
            apiResponse.classes.find(classObj => classObj['ClassID'] === Number(c))
        ),
    })
)}
  
  


export const branches = [
    {
        "BranchID": 38,
        campus: campuses.cvraman,
        "BranchName": "National Centre for Excellence CV Raman Nagar",
        "LocationID": 34,
        "Pincode": "560075"
    },
    {
        "BranchID": 50,
        campus: campuses.indiranagar,
        "BranchName": "National Centre for Excellence Indira Nagar",
        "LocationID": 34,
        "Pincode": "560075"
    },
    {
        "BranchID": 224,
        campus: campuses.mandur,
        "BranchName": "National Centre for Excellence Mandur",
        "LocationID": 34,
        "Pincode": "560049"
    }
]


export const academicYears = [
    {
        "AcademicYearID": 14,
        "AcademicYear1": "2022-2023"
    },
    {
        "AcademicYearID": 15,
        "AcademicYear1": "2023-2024"
    }
]

export const classes  = [
    {
        "ClassID": 3486,
        "ClassName": "Day Care",
        "BoardID": 1
    },
    {
        "ClassID": 3610,
        "ClassName": "Playgroup",
        "BoardID": 1
    },
    {
        "ClassID": 314,
        "ClassName": "Prep 1",
        "BoardID": 1
    },
    {
        "ClassID": 315,
        "ClassName": "Prep 2",
        "BoardID": 1
    },
    {
        "ClassID": 316,
        "ClassName": "Prep 3",
        "BoardID": 1
    },
    {
        "ClassID": 317,
        "ClassName": "Class 1",
        "BoardID": 1
    },
    {
        "ClassID": 318,
        "ClassName": "Class 2",
        "BoardID": 1
    },
    {
        "ClassID": 319,
        "ClassName": "Class 3",
        "BoardID": 1
    },
    {
        "ClassID": 320,
        "ClassName": "Class 4",
        "BoardID": 1
    },
    {
        "ClassID": 321,
        "ClassName": "Class 5",
        "BoardID": 1
    },
    {
        "ClassID": 322,
        "ClassName": "Class 6",
        "BoardID": 1
    },
    {
        "ClassID": 323,
        "ClassName": "Class 7",
        "BoardID": 1
    },
    {
        "ClassID": 324,
        "ClassName": "Class 8",
        "BoardID": 1
    },
    {
        "ClassID": 325,
        "ClassName": "Class 9",
        "BoardID": 1
    },
    {
        "ClassID": 326,
        "ClassName": "Class 10",
        "BoardID": 1
    },
    {
        "ClassID": 375,
        "ClassName": "Class 11-PCMC",
        "BoardID": 1
    },
    {
        "ClassID": 499,
        "ClassName": "Class 11-PCMB",
        "BoardID": 1
    },
    {
        "ClassID": 533,
        "ClassName": "Class 11",
        "BoardID": 1
    },
    {
        "ClassID": 534,
        "ClassName": "Class 12",
        "BoardID": 1
    },
    {
        "ClassID": 3852,
        "ClassName": "Class_SEN",
        "BoardID": 1
    },
    {
        "ClassID": 3703,
        "ClassName": "M1-Class 6",
        "BoardID": 5
    },
    {
        "ClassID": 3704,
        "ClassName": "M2-Class 7",
        "BoardID": 5
    },
    {
        "ClassID": 3705,
        "ClassName": "M3 - Class 8",
        "BoardID": 5
    },
    {
        "ClassID": 3706,
        "ClassName": "M4 - Class 9",
        "BoardID": 5
    },
    {
        "ClassID": 3707,
        "ClassName": "M5 - Class 10",
        "BoardID": 5
    },
    {
        "ClassID": 3708,
        "ClassName": "CP 1 - Class 11",
        "BoardID": 5
    },
    {
        "ClassID": 3709,
        "ClassName": "CP 2 - Class 12",
        "BoardID": 5
    }
]

export default apiResponse