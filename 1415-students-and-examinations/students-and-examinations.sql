# Write your MySQL query statement below
SELECT Students.student_id, Students.student_name, Subjects.subject_name,
count(Examinations.subject_name) as attended_exams  
FROM students
join Subjects
LEFT JOIN Examinations
ON Students.student_id = Examinations.student_id
AND Subjects.subject_name = Examinations.subject_name
GROUP BY Students.student_id, Subjects.subject_name
ORDER BY student_id ASC, subject_name ASC