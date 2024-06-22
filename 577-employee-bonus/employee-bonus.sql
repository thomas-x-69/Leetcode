# Write your MySQL query statement below
select em.name, bonus from employee em
left join bonus as b on em.empId = b.empId where b.bonus < 1000 or b.bonus is null;