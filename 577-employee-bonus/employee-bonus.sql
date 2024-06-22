# Write your MySQL query statement below
SELECT Employee.name,Bonus.bonus FROM Employee 
left join bonus on Employee.empid = Bonus.empid
where bonus<1000 or bonus is null