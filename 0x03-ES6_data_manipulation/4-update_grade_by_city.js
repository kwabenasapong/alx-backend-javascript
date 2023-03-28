import getStudentsByLocation from './2-get_students_by_loc';

function check(value, arr, list) {
  const student = list;
  const grade = arr.find((list) => list.studentId === value);
  if (grade) {
    student.grade = grade.grade;
  } else {
    student.grade = 'N/A';
  }
  return student;
}

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const students = getStudentsByLocation(listOfStudents, city);
  return students.map((list) => {
    const student = list;
    return check(list.id, newGrades, student);
  });
}
