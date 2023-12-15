import apiResponse, { branches, classes } from "./get";


const getBranchId = (campusName = "") => 
  branches.find(branch => branch.campus === campusName)?.BranchID

const getClassId = (gradeName) => 
  classes.find(grade => grade.ClassName === gradeName)?.ClassID

const postMCB = async ({
  studentName,
  parentName,
  phone,
  email,
  campus,
  grade,
  utm_campaign,
  QueryContactSourceID,
}) => {
  const res = await fetch('https://api.myclassboard.com/api/EnquiryService/Save_EnquiryDetails', {
    method: 'POST',
    headers: {
      'Authorization': 'Z7zevJRiWVtU4wNZZpXuYK6s97u7T/MEmQYDFkY4AwI=',
      'api_Key': 'msl786-0189-ias-gm19-marmoavis',
      'Cookie': '__cf_bm=w.EtTd2Vb0i_qJdqzln0yc2IM4xcNCzePtB3EoVx6BI-1696418830-0-AbgoS94N+xvhP1ogtwckGgnmjQyj1Xa6G07UTV130SDU0EDNW0RdmaSdeoIldZCBZAuTl0ZpjIg9sL/eycftctk=',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "OrganisationID": 31,
      "BranchID": getBranchId(campus),
      "AcademicYearID": 15,
      "StudentName": studentName,
      "ClassID": getClassId(grade),
      "GuardianEmailID": email,
      "Guardianname": parentName,
      "GuardianMobileno": phone,
      utm_campaign,
      QueryContactSourceID
    })
  }); 
  const data = await res.json()  
}

export default postMCB
 