# Write your MySQL query statement below
SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
from visits AS v
LEFT JOIN Transactions AS t
ON v.visit_id = t.visit_id
WHERE  t.visit_id is NULL
GROUP BY  v.customer_id;